import { useActionData, Form, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// TODO: REFACTOR TO NOT TRIGGER A RELOAD

import { redirect } from "@remix-run/node"; // or cloudflare/deno
import { submitJoinForm } from "~/api/form.server";

export async function loader({ request }: { request: Request }) {
  return json({ message: "Hello from the server!" });
}

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  const formData = {
    data: {
      email: data.get("email"),
      gitHubLink: data.get("gitHubLink"),
      firstName: data.get("firstName"),
    },
  };

  const response = await submitJoinForm(
    formData as {
      data: {
        email: string;
        gitHubLink: string;
        firstName: string;
      };
    }
  );

  if (response?.error)
    return json(
      {
        error: response.error,
        message: response.message,
      },
      { status: 400 }
    );

  console.log(response, "response from api");

  console.log("from action");
  return redirect("/");
}

export function JoinForm() {
  const data = useActionData<typeof action>();
  const formData = useLoaderData<typeof loader>();
  console.log(data, formData);

  return (
    <Form method="post" action="/api/join-form">
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
    </Form>
  );
}
