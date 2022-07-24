import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/firebasConfig";
import { Container } from "../styles/styles";


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "normal" },
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setResult(confirmationResult);
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const getOtp = (e) => {
    e.preventDefault();
    if (phoneNumber === "" || phoneNumber === undefined) return setError("Porfavor ingrese un numero valido!");
    try {
      setUpRecaptcha(phoneNumber);
      setFlag(true);
      
    } catch (err) {
      setError(err.message);
    }
  };


  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message)
    }
  };

  return (
    <Container>
      <h1 className="font-bold text-lg">Welcome back</h1>
      <p className="text-xs">Sign in to an existing account <br /> using your phone number</p>

      <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
        <div className="mb-6 mt-10">
          <input
            type="tel"
            id="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your phone number"
            required=""
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            required=""
          />
        </div>
        {/* Muestra el error si el input es vacio o null */}
        {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-2" role="alert">
          <span className="font-medium">Error! </span>{error}
        </div>
      )}
      
        <div className="pt-[10rem]">
          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400">
            Login
          </button>
          <span className="flex justify-center">D’ont have account ? 
           <Link to={'/register'} className="text-blue-300 ml-1">Sign up</Link>
           </span>
        </div>

      </form>

      <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
        <div className="mb-6">
          <label
            htmlFor="otp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Phone number
          </label>
          <input
            type="text"
            id="otp"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Verify code ....."
            required=""
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-2" role="alert">
          <span className="font-medium">Error! </span>{error}
        </div>
      )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Verify Otp
        </button>

      </form>
      <div className="mt-5" id="recaptcha-container"></div>
    </Container>
  );
};

export default Login;
