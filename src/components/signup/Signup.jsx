import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!password) formErrors.password = "Password is required.";
    else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid");
    }
  };

  return (
    <main className="main flex justify-center items-center min-h-screen bg-[#F5F5F5]">
      <div className="container flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="img-login mb-4 md:mb-0 md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6ivu54pHURXWfYb4dcF6V0x2nlvcmD9WHv76pjMGM-Y1Hx3mx7YxYD5rrduW8pWS-sw4n3B50QD9UzoEa3SWDqMc3-RVb3uAAtLQHqQMZ7R33Yn7FeoLVD8fD2hQCKkZhcXfYy1gVvD1PCM2eDmQa5d1F8rLeD6LMPdBcMHpFnQHo3cor-8tjzDKebKEyeYCCifZAg9Mb6bDxikw7Ef1uK5eQAxgCe85iJ-QK0ci6~EUnnRgqZK7zCLqtB5Ssefdd28Lye5mU417XgYOH3Atc0x22BOxlJA7T5g5bxPoXF~Er2Hold0XGAcRyCuAFPNGMUvwurBSc6g4TTgClAieA__"
            alt=""
            className="w-full"
          />
        </div>

        <div className="sign_up-box md:w-1/2 px-8">
          <h2 className="text-3xl font-semibold mb-2 text-[#333333]">
            Create an account
          </h2>
          <p className="text-[#666666] mb-6">Enter your details below.</p>

          <form id="sign-up" className="space-y-4" onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                id="nameInput"
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && (
                <span id="nameError" className="text-red-500 text-sm">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="user-box">
              <input
                id="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <span id="emailAlertSpan" className="text-red-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="user-box">
              <input
                id="passwordInput"
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <span id="passwordAlertSpan" className="text-red-500 text-sm">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="btns-form">
              <div className="sign_up-btns mb-4">
                <button
                  href="/home"
                  type="submit"
                  className="w-full bg-[#DB4444] text-white py-3 rounded-md p-10"
                >
                  Sign Up
                </button>
              </div>
              <div className="have-acc text-center">
                <p className="mb-2 text-[#333333]">Already have an account?</p>
                <Link to={"/"} className="text-[#007BFF] hover:underline">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
