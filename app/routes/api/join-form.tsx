import { useActionData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";

export function loader({ request }) {
  return json({ message: "Hello from the server!" });
}

export function action({ request }) {
  return json({ message: "Hello from the server!" });
}

export function JoinForm() {
  const data = useActionData();
  console.log(data);

  return (
    <Form method="POST" action="/api-routes/join-form">
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
