// "use client";

// import { useState } from "react";

// export default function AuthModal({ isOpen, onClose }) {
//   const [isSignUp, setIsSignUp] = useState(false);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
//         <h2 className="text-xl font-bold mb-4">
//           {isSignUp ? "Create Account" : "Sign In"}
//         </h2>

//         {/* Google Login */}
//         <button className="w-full py-2 mb-4 bg-red-500 text-white rounded">
//           Continue with Google
//         </button>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-gray-500 text-sm">or</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Email/Password Form */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-2 border rounded text-black placeholder-gray-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded text-black placeholder-gray-500"
//         />
//         <button className="w-full py-2 bg-orange-600 text-white rounded">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </button>

//         {/* Switch between login and signup */}
//         <div className="text-sm mt-4 text-center text-black">
//           {isSignUp ? (
//             <>
//               Already have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(false)}
//                 className="text-blue-600 underline"
//               >
//                 Sign in
//               </button>
//             </>
//           ) : (
//             <>
//               Don’t have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(true)}
//                 className="text-blue-600 underline"
//               >
//                 Sign up
//               </button>
//             </>
//           )}
//         </div>

//         {/* Close Modal */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-gray-600 text-xl"
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";

// export default function AuthModal({ isOpen, onClose }) {
//   const [isSignUp, setIsSignUp] = useState(false);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
//         <h2 className="text-xl font-bold mb-4 text-reddit-dark">
//           {isSignUp ? "Create Account" : "Sign In"}
//         </h2>

//         {/* Google Login */}
//         <button className="w-full py-2 mb-4 bg-google-blue text-white rounded hover:bg-opacity-90 transition">
//           Continue with Google
//         </button>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-reddit-mediumgray text-sm">or</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Email/Password Form */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-2 border rounded text-reddit-dark placeholder-reddit-mediumgray"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded text-reddit-dark placeholder-reddit-mediumgray"
//         />
//         <button className="w-full py-2 bg-reddit-orange text-white rounded hover:bg-opacity-90 transition">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </button>

//         {/* Switch between login and signup */}
//         <div className="text-sm mt-4 text-center text-reddit-dark">
//           {isSignUp ? (
//             <>
//               Already have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(false)}
//                 className="text-reddit-blue underline"
//               >
//                 Sign in
//               </button>
//             </>
//           ) : (
//             <>
//               Don’t have an account?{" "}
//               <button
//                 onClick={() => setIsSignUp(true)}
//                 className="text-reddit-blue underline"
//               >
//                 Sign up
//               </button>
//             </>
//           )}
//         </div>

//         {/* Close Modal */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-reddit-mediumgray text-xl"
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-card rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-reddit-dark">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>

        <button className="w-full py-2 mb-4 bg-google-blue text-white rounded hover:bg-opacity-90 transition">
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-default" />
          <span className="mx-2 text-reddit-mediumgray text-sm">or</span>
          <hr className="flex-grow border-default" />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded text-reddit-dark placeholder-reddit-mediumgray bg-input text-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded text-reddit-dark placeholder-reddit-mediumgray bg-input text-input"
        />
        <button className="w-full py-2 bg-reddit-orange text-white rounded hover:bg-opacity-90 transition">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <div className="text-sm mt-4 text-center text-reddit-dark">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-reddit-blue underline"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-reddit-blue underline"
              >
                Sign up
              </button>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-reddit-mediumgray text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
