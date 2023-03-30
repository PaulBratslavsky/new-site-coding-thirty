import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { submitJoinForm } from "~/api/form.server";

// TODO: ADD FORM VALIDATION
// TODO: ADD ERROR HANDLING
// TODO: ADD ERROR BOUNDRY

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const formBody = {
    data: {
      email: formData.get("email"),
      gitHubLink: formData.get("gitHubLink"),
      firstName: formData.get("firstName"),
    },
  };

  const response = await submitJoinForm(
    formBody as {
      data: {
        email: string;
        gitHubLink: string;
        firstName: string;
      };
    }
  );

  const data = await response.json();
  return json({ data });
}

export function JoinForm() {
  const fetcher = useFetcher<typeof action>();

  if (fetcher.data) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold mb-4 text-pink-500">Thank You!</h1>
        <p className="text-gray-500 text-lg">
          We appreciate your interest in our community. We'll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <fetcher.Form method="post" action="/api/join-form">
      <fieldset className="border-0">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3">
            <label className="block mb-2 text-sm text-gray-500 font-bold">
              Name
            </label>
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-pink-200 rounded-full"
              id="signUpDarkReverseInput5-1"
              type="text"
              placeholder="Enter your name"
              name="firstName"
              required
            />
          </div>
          <div className="w-full p-3">
            <label className="block mb-2 text-sm text-gray-500 font-bold">
              Email Address
            </label>
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-pink-200 rounded-full"
              id="signUpDarkReverseInput5-2"
              type="email"
              placeholder="Email address"
              name="email"
              required
            />
          </div>
          <div className="w-full p-3">
            <label className="block mb-2 text-sm text-gray-500 font-bold">
              GitHub Link
            </label>
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-pink-200 rounded-full"
              id="signUpDarkReverseInput5-2"
              type="text"
              placeholder="GitHub Link"
              name="gitHubLink"
              required
            />
          </div>

          <div className="w-full p-3">
            <div className="flex flex-wrap md:justify-end -m-2">
              <div className="w-full p-2">
                <button
                  className="block px-8 py-3.5 text-lg text-center text-white font-bold bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-200 rounded-full"
                  type="submit"
                >
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {fetcher.data.error  && (
          <div className="text-center text-red-500 mt-4">
            {fetcher.error.message}
          </div>
        )}  */}
      </fieldset>
    </fetcher.Form>
  );
}
