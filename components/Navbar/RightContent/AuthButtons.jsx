"use client";

import React, { useState } from "react";
import AuthModal from "@/components/Modal/Auth/AuthModal";

import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState("login");

  const handleOpenAuthModal = (view) => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthModalView("login"); // Reset view on close
  };

  return (
    <>
      <div className="flex justify-center space-x-4">
        <Button
className="hide-on-small w-[100px] md:w-[110px] mr-2 button-base button-md button-outline"
          onClick={() => handleOpenAuthModal("login")}
        >
          Log In
        </Button>
        <Button
          className=" hide-on-small w-[100px] md:w-[110px] mr-6 button-base button-md button-solid "
          onClick={() => handleOpenAuthModal("signup")}
        >
          Sign Up
        </Button>
      </div>
      <AuthModal
        isModalOpen={isAuthModalOpen}
        onClose={handleCloseAuthModal}
        view={authModalView}
        setView={setAuthModalView}
      />
    </>
  );
};

export default AuthButtons;
