// pages/login.js
import React from 'react';
import SignInButton from '../components/HpButton';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-offWhite">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="https://hassemprag.com/wp-content/uploads/2023/09/Group-57.svg"
            alt="Hassam"
            className="h-12"
          />
        </div>
        <h2 className="text-center text-2xl font-semibold text-hp_navy_blue mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-hp_navy_blue"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-hp_navy_blue"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.93c-2.89-.48-5-2.94-5-5.93 0-.62.08-1.21.21-1.79l2.74 2.74v.54c0 1.1.9 2 2 2v1.44zM16.9 15.39c-.26.59-.74 1.07-1.33 1.33-.88.39-1.89.56-2.9.47v-2.08c.5-.09.98-.31 1.37-.7.39-.39.61-.87.7-1.37h2.08c-.09 1-.26 2.01-.72 2.99zM12 4c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2zm-4.9 2.11c.39-.88.98-1.61 1.75-2.16C10.33 3.61 11.16 3.38 12 3.38V5.5c-.89.09-1.78.26-2.63.59-.56.23-1.06.55-1.53.95-.56.56-1.03 1.23-1.41 1.96L4.1 6.11zm10.55 10.55c-.56.56-1.23 1.03-1.96 1.41-.89.47-1.87.68-2.85.68v-2.12c.62-.11 1.22-.38 1.77-.76.56-.56.89-1.21 1.14-1.95h2.06c-.11 1.26-.34 2.41-.76 3.4zM17.9 12h-2.08c-.1-.49-.31-.95-.7-1.37-.39-.39-.86-.61-1.37-.7V7.44c1.27.11 2.47.38 3.55 1.14.78.53 1.46 1.25 1.97 2.05l-2.37 2.37z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <SignInButton text="Sign in" />
        </form>
      </div>
    </div>
  );
}
