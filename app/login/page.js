// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         localStorage.setItem("isLoggedIn", "true"); // save login
//         router.push("/dashboard");
//       } else {
//         setError("Invalid username or password");
//       }
//     } catch (err) {
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Staff Login</h2>

//         {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-500"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-500"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // ❌ prevent default form POST (stops 405 error)

    // Hardcoded credentials (for now)
    const validUser = "staff";
    const validPass = "clinic123";

    if (username === validUser && password === validPass) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard"); // ✅ go to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Staff Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
