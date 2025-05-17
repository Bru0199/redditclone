import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react';

const SignupForm = ({ onClose, setView }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordMatch = password === confirmPassword;

    const isFormValid = email.trim() && name.trim() && password.trim() && isPasswordMatch && !emailError;

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail.trim() && !isEmailValid(newEmail)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (confirmPassword.trim() && e.target.value !== confirmPassword) {
            setPasswordMatchError('Passwords do not match.');
        } else {
            setPasswordMatchError('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password.trim() && e.target.value !== password) {
            setPasswordMatchError('Passwords do not match.');
        } else {
            setPasswordMatchError('');
        }
    };

    const handleGoToLoginClick = () => {
        setView('login');

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            if (!isFormValid) {
                throw new Error("Please ensure all fields are valid and passwords match.");
            }
            console.log('Signup successful!');
            onClose();

        } catch (error) {
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
            {/* <h2 className="text-lg font-semibold text-center mb-4">Sign Up</h2> */}

            <Button
                variant="outline"
                className="w-full mb-4 flex items-center gap-2 border-gray-300 hover:bg-gray-50 text-gray-700"
                onClick={() => {
                    console.log('Continue with Google');
                }}
            >
                <img src="/images/Google__G__logo.svg" alt="Google Logo" width="24" height="24" className="mr-2" />
                Continue with Google
            </Button>

            <div className="w-full flex items-center justify-between my-4">
                <div className="h-[1px] w-[40%] bg-gray-300" />
                <span className="text-gray-500 text-sm">OR</span>
                <div className="h-[1px] w-[40%] bg-gray-300" />
            </div>

            <div>
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    aria-label="Name"
                />
            </div>
            <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className={cn("w-full", emailError && "ring-1 ring-red-500")}
                    aria-label="Email"
                />
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div>
                <Label htmlFor="password" className="sr-only">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={cn("w-full", passwordMatchError && "ring-1 ring-red-500")}
                    aria-label="Password"
                />
            </div>
            <div>
                <Label htmlFor="confirmPassword" className="sr-only">Confirm Password</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={cn("w-full", passwordMatchError && "ring-1 ring-red-500")}
                    aria-label="Confirm Password"
                />
                {passwordMatchError && <p className="text-red-500 text-xs mt-1">{passwordMatchError}</p>}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={!isFormValid || isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing Up...
                    </>
                ) : (
                    "Sign Up"
                )}
            </Button>

            <div className="mt-4 text-center text-sm text-gray-600">
                Already a user?<button type="button" onClick={handleGoToLoginClick} className="text-green-500 hover:underline">Click here</button>
            </div>

            {submitError && (
                <p className="text-red-500 text-sm mt-2 text-center">{submitError}</p>
            )}
        </form>
    );
};

export default SignupForm;