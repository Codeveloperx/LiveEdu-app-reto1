import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../styles/styles";

const Register = () => {
  return (
    <Container>
      <h1 className="font-bold text-lg">Create new Account</h1>
      <p className="text-xs">
        Create a new account by filling in all the <br />
        fields or log in to an existing account
      </p>
      <form>
      <div className="mb-6 mt-10">
          <input
            type="text"
            id="nombre"
            className="bg-gray-50 border border-[#A0FB8A] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nombre"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="tel"
            id="tel"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Phone"
            required=""
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-gray-50 border border-blue-300 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            required=""
          />
        </div>
        <div className="pt-[2rem]">
          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
          >
            Create
          </button>
          <span className="flex justify-center">
            I have account ?
            <Link to={"/login"} className="text-blue-300 ml-1">
              Sign In
            </Link>
          </span>
        </div>

        <div className="mt-5" id="recaptcha-container"></div>
      </form>
    </Container>
  );
};
export default Register;
