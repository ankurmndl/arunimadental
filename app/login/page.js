

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault(); // ❌ prevent default form POST (stops 405 error)

//     // Hardcoded credentials (for now)
//     const validUser = "staff";
//     const validPass = "clinic123";

//     if (username === validUser && password === validPass) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/dashboard"); // ✅ go to dashboard
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Staff Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>

//           {error && <p className="text-red-600 text-center">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUser = "staff";
    const validPass = "clinic123";

    if (username === validUser && password === validPass) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <img src="/images/services/logo.png" className="h-10 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
            Staff Login
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Access your dashboard securely
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div className="relative">
            <User size={16} className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
        </form>

      </div>
    </div>
  );
}