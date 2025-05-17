'use client';

import { atom } from "recoil";

const defaultModalState = {
  open: false,
  view: "login", // Could be "login", "signup", or "resetPassword"
};

// Create an atom for the modal state
export const authModalState = atom({
  key: "authModalState", // Unique key for this atom
  default: defaultModalState, // Initial value for the state
});
