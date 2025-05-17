"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "@/components/Modal/Auth/LoginForm";
import SignupForm from "@/components/Modal/Auth/SignupForm";
import ResetPasswordForm from '@/components/Modal/Auth/ResetPasswordForm'


const AuthModal = ({ isModalOpen, onClose,view, setView }) => {

  const getHeading = () => {
        switch (view) {
            case 'signup':
                return 'Sign Up';
            case 'resetPassword':
                return 'Reset Password';
            default:
                return 'Log In';
        }
    };

  const renderForm = () => {
    switch (view) {
      case "login":
        return <LoginForm onClose={onClose} setView={setView} />; // Pass setView
      case "signup":
        return <SignupForm onClose={onClose} setView={setView} />;
      case "resetPassword":
        return <ResetPasswordForm onClose={onClose} />;
      default:
        return <LoginForm onClose={onClose} setView={setView} />;
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-transparent shadow-none border-none">
        <div className="p-6 space-y-4 bg-background rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold mb-2 text-center">
             {getHeading()}
            </DialogTitle>

            {view === "login" && (
              <p className="text-xs text-center text-gray-500 mb-4">
                By continuing, you agree to our&nbsp;
                <a href="#" className="underline">
                  User Agreement
                </a>
                &nbsp;and acknowledge that you understand the&nbsp;
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            )}
            {view === "signup" && (
              <p className="text-xs text-center text-gray-500 mb-4">
                By continuing, you agree to our&nbsp;
                <a href="#" className="underline">
                  Terms of Service
                </a>
                &nbsp;and acknowledge that you understand the&nbsp;
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            )}
            {view === "resetPassword" && (
              <p className="text-xs text-center text-gray-500 mb-4">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            )}
          </DialogHeader>
        {renderForm()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
