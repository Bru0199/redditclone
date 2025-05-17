import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const LoginForm = ({ onClose, setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = email.trim() && password.trim() && !emailError;

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.trim() && !isEmailValid(newEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleForgotPasswordClick = () => {
    setView("resetPassword");
  };

  const handleGoToSignupClick = () => {
    setView("signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === "test@example.com" && password === "password") {
        console.log("Login successful!");
        onClose();
      } else {
        throw new Error(
          "Invalid credentials. Please check your email and password."
        );
      }
    } catch (error) {
      setSubmitError(error.message || "An error occurred during login.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* <h2 className="text-lg font-semibold text-center mb-4">Log In</h2> */}

      <Button
        variant="outline"
        className="w-full mb-4 flex items-center gap-2 border-gray-300 hover:bg-gray-50 text-gray-700"
        onClick={() => {
          console.log("Continue with Google");
        }}
      >
        <img
          src="/images/Google__G__logo.svg"
          alt="Google Logo"
          width="24"
          height="24"
          className="mr-2"
        />
        Continue with Google
      </Button>

      <div className="w-full flex items-center justify-between my-4">
        <div className="h-[1px] w-[40%] bg-gray-300" />
        <span className="text-gray-500 text-sm">OR</span>
        <div className="h-[1px] w-[40%] bg-gray-300" />
      </div>

      <div>
        <Label htmlFor="email" className="sr-only">
          Email or username
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Email or username"
          value={email}
          onChange={handleEmailChange}
          className={cn("w-full", emailError && "ring-1 ring-red-500")}
          aria-label="Email or username"
        />
        {emailError && (
          <p className="text-red-500 text-xs mt-1">{emailError}</p>
        )}
      </div>
      <div className="relative">
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pr-10"
          aria-label="Password"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          disabled={isSubmitting}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-black" />
          ) : (
            <EyeIcon className="h-5 w-5 text-black" />
          )}
        </button>
      </div>

      <div className="flex justify-end text-sm mb-4">
        <button
          type="button"
          onClick={handleForgotPasswordClick}
          className="text-blue-500 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          "Log In"
        )}
      </Button>

      <div className="mt-4 text-center text-sm text-gray-600">
        New User?{" "}
        <button
          type="button"
          onClick={handleGoToSignupClick}
          className="text-green-500 hover:underline"
        >
          Click here
        </button>
      </div>

      {submitError && (
        <p className="text-red-500 text-sm mt-2 text-center">{submitError}</p>
      )}
    </form>
  );
};

export default LoginForm;
