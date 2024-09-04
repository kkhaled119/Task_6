import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assuming you have a function `signInExistingUser` to handle Firebase sign-in

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const isValid = validateForm();
  //     if (isValid) {
  //       try {
  //         await signInExistingUser(email, password);
  //         navigate("/dashboard"); // Redirect to the desired page after login
  //       } catch (error) {
  //         console.error("Error signing in:", error);
  //       }
  //     }
  //   };

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <div>
      {/* Assuming `SpecialHeader` is a React component */}

      <main className="main">
        <div className="container">
          <div className="img-login">
            <img src="/assets/img/dl.beatsnoop 1.png" alt="" />
          </div>

          <div className="login-box">
            <h2>Log in to Exclusive</h2>
            <p>Log in to your account to continue.</p>

            <form id="myForm">
              <div className="user-box">
                <input
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <span id="emailAlertSpan" className="error">
                    {emailError}
                  </span>
                )}
              </div>

              <div className="user-box">
                <input
                  id="passwordInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <span id="passwordAlertSpan" className="error">
                    {passwordError}
                  </span>
                )}
              </div>

              <div className="login-btns">
                <button id="loginButton" type="submit" className="login-btn">
                  Log in
                </button>

                <a href="#" className="forgot-btn">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Assuming `SpecialFooter` is a React component */}
    </div>
  );
};

export default Login;
