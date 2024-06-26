import React, { useState } from "react";
import AuthIcon from "../AuthIcon";

// Image
import logoLight from "assets/images/logo-braincore-dark.png";
import logoDark from "assets/images/logo-braincore-light.png";
import { Link, useNavigate } from "react-router-dom";
import authService from "helpers/auth.service";

const Basic = () => {

    document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setError("");
      try {
        await authService.login(email, password);
        navigate("/");
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          console.log(e.message);
        } 
      }
    };
    
    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
        };
    }, []);

    return (
      <div className="relative">
        <AuthIcon />

        <div className="mb-0 w-screen lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-100 dark:shadow-zink-500/20 relative">
          <div className="!px-10 !py-12 card-body">
            <Link to="/">
              <img
                src={logoLight}
                alt=""
                className="hidden h-8 mx-auto dark:block"
              />
              <img
                src={logoDark}
                alt=""
                className="block h-8 mx-auto dark:hidden"
              />
            </Link>

            <div className="mt-8 text-center">
              <h4 className="mb-1 text-custom-500 dark:text-custom-500">
                Welcome Back !
              </h4>
              <p className="text-slate-500 dark:text-zink-200">
                Sign in to continue to Dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10" id="signInForm">
              <div
                className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
                id="successAlert"
              >
                You have <b>successfully</b> signed in.
              </div>
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Email ID
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  id="username"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter username or email"
                />
                <div
                  id="username-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter password"
                />
                <div
                  id="password-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Password must be at least 8 characters long and contain both
                  letters and numbers.
                </div>
                {error ? <div>Error: {error}</div> : <div></div>}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    id="checkboxDefault1"
                    className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                    type="checkbox"
                    value=""
                  />
                  <label
                    htmlFor="checkboxDefault1"
                    className="inline-block text-base font-medium align-middle cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <div
                  id="remember-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Please check the "Remember me" before submitting the form.
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Basic;