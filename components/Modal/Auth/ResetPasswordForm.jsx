import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react';

const ResetPasswordForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [emailError, setEmailError] = useState('');

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid = email.trim() && !emailError;

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail.trim() && !isEmailValid(newEmail)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Simulate sending a reset password link
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Password reset link sent to:', email);
            onClose(); // Close the modal after successful request

        } catch (error) {
            setSubmitError(error.message || 'An error occurred while requesting password reset.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* <h2 className="text-lg font-semibold text-center mb-4">Reset Password</h2> */}
            <p className="text-sm text-center text-gray-600 mb-4">
                Enter your email address and we'll send you a link to reset your password.
            </p>
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
            <Button
                type="submit"
                className="w-full"
                disabled={!isFormValid || isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Link...
                    </>
                ) : (
                    "Send Reset Link"
                )}
            </Button>
            {submitError && (
                <p className="text-red-500 text-sm mt-2 text-center">{submitError}</p>
            )}
        </form>
    );
};

export default ResetPasswordForm;