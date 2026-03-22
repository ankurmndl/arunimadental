// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function Dashboard() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const router = useRouter();

// //   useEffect(() => {
// //     // Check login
// //     const loggedIn = localStorage.getItem("isLoggedIn");
// //     if (loggedIn !== "true") {
// //       router.push("/login"); // redirect if not logged in
// //       return;
// //     }

// //     async function fetchAppointments() {
// //       try {
// //         const res = await fetch(
// //           "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments"
// //         );
// //         const data = await res.json();

// //         if (data.status === "success") {
// //           setAppointments(data.appointments);
// //         } else {
// //           setError(data.message || "Failed to fetch data");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching data:", err);
// //         setError("Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchAppointments();
// //   }, [router]);

// //   if (!localStorage.getItem("isLoggedIn")) return null; // avoid flash

// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-semibold">Appointments Dashboard</h1>
// //         <button
// //           onClick={() => {
// //             localStorage.removeItem("isLoggedIn");
// //             router.push("/login");
// //           }}
// //           className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {loading && <p>Loading appointments...</p>}
// //       {error && <p className="text-red-600">{error}</p>}

// //       {!loading && !error && (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
// //             <thead>
// //               <tr className="bg-blue-600 text-white">
// //                 <th className="px-4 py-2 border">Timestamp</th>
// //                 <th className="px-4 py-2 border">Name</th>
// //                 <th className="px-4 py-2 border">Email</th>
// //                 <th className="px-4 py-2 border">Phone</th>
// //                 <th className="px-4 py-2 border">Date</th>
// //                 <th className="px-4 py-2 border">Message</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {appointments.map((appt, index) => (
// //                 <tr key={index} className="hover:bg-gray-50">
// //                   <td className="px-4 py-2 border">{appt.Timestamp}</td>
// //                   <td className="px-4 py-2 border">{appt.Name}</td>
// //                   <td className="px-4 py-2 border">{appt.Email}</td>
// //                   <td className="px-4 py-2 border">{appt.Phone}</td>
// //                   <td className="px-4 py-2 border">{appt.Date}</td>
// //                   <td className="px-4 py-2 border">{appt.Message}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // 'use client';

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
// // } from "recharts";

// // export default function Dashboard() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const router = useRouter();

// //   // Analytics
// //   const [totalAppointments, setTotalAppointments] = useState(0);
// //   const [todayAppointments, setTodayAppointments] = useState(0);
// //   const [upcomingAppointments, setUpcomingAppointments] = useState(0);
// //   const [weeklyData, setWeeklyData] = useState([]);

// //   useEffect(() => {
// //     // Check login
// //     const loggedIn = localStorage.getItem("isLoggedIn");
// //     if (loggedIn !== "true") {
// //       router.push("/login");
// //       return;
// //     }

// //     async function fetchAppointments() {
// //       try {
// //         const res = await fetch(`/api/appointment-data?token=YOUR_API_TOKEN`);
// //         const data = await res.json();

// //         if (data.status === "success") {
// //           setAppointments(data.data || []);
// //           computeAnalytics(data.data || []);
// //         } else {
// //           setError(data.message || "Failed to fetch data");
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         setError("Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchAppointments();
// //   }, [router]);

// //   const computeAnalytics = (data) => {
// //     const today = new Date().toISOString().split('T')[0];
// //     setTotalAppointments(data.length);
// //     setTodayAppointments(data.filter(a => a.Date === today).length);
// //     setUpcomingAppointments(data.filter(a => new Date(a.Date) >= new Date(today)).length);

// //     // Weekly trend
// //     const weekCounts = {};
// //     data.forEach(a => {
// //       const date = new Date(a.Date).toISOString().split('T')[0];
// //       weekCounts[date] = (weekCounts[date] || 0) + 1;
// //     });
// //     const sortedDates = Object.keys(weekCounts).sort();
// //     const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
// //     setWeeklyData(weekly);
// //   };

// //   if (!localStorage.getItem("isLoggedIn")) return null; // avoid flash

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-semibold">Appointments Dashboard</h1>
// //         <button
// //           onClick={() => {
// //             localStorage.removeItem("isLoggedIn");
// //             router.push("/login");
// //           }}
// //           className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {/* Analytics Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //         <Card title="Total Appointments" value={totalAppointments} />
// //         <Card title="Today's Appointments" value={todayAppointments} />
// //         <Card title="Upcoming Appointments" value={upcomingAppointments} />
// //         <Card title="Weekly Trend" value={`Last ${weeklyData.length || 0} days`} />
// //       </div>

// //       {/* Charts */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// //         <div className="bg-white rounded-xl shadow-lg p-4">
// //           <h2 className="text-lg font-semibold mb-2">Appointments Over Time</h2>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <LineChart data={weeklyData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis allowDecimals={false} />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="count" stroke="#2563eb" />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-lg p-4">
// //           <h2 className="text-lg font-semibold mb-2">Appointments Bar Chart</h2>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <BarChart data={weeklyData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis allowDecimals={false} />
// //               <Tooltip />
// //               <Bar dataKey="count" fill="#2563eb" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       {/* Appointments Table */}
// //       {loading && <p>Loading appointments...</p>}
// //       {error && <p className="text-red-600">{error}</p>}
// //       {!loading && !error && (
// //         <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
// //           <table className="min-w-full border border-gray-200">
// //             <thead className="bg-blue-600 text-white">
// //               <tr>
// //                 <th className="px-4 py-2 border">Timestamp</th>
// //                 <th className="px-4 py-2 border">Name</th>
// //                 <th className="px-4 py-2 border">Email</th>
// //                 <th className="px-4 py-2 border">Phone</th>
// //                 <th className="px-4 py-2 border">Date</th>
// //                 <th className="px-4 py-2 border">Message</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {appointments.map((appt, idx) => (
// //                 <tr key={idx} className="hover:bg-gray-50">
// //                   <td className="px-4 py-2 border">{appt.Timestamp}</td>
// //                   <td className="px-4 py-2 border">{appt.Name}</td>
// //                   <td className="px-4 py-2 border">{appt.Email}</td>
// //                   <td className="px-4 py-2 border">{appt.Phone}</td>
// //                   <td className="px-4 py-2 border">{appt.Date}</td>
// //                   <td className="px-4 py-2 border">{appt.Message}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // Analytics Card Component
// // function Card({ title, value }) {
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
// //       <p className="text-gray-500">{title}</p>
// //       <p className="text-2xl font-semibold mt-2">{value}</p>
// //     </div>
// //   );
// // }

// // 'use client';

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
// // } from "recharts";

// // export default function Dashboard() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const router = useRouter();

// //   // Analytics
// //   const [totalAppointments, setTotalAppointments] = useState(0);
// //   const [todayAppointments, setTodayAppointments] = useState(0);
// //   const [upcomingAppointments, setUpcomingAppointments] = useState(0);
// //   const [weeklyData, setWeeklyData] = useState([]);

// //   useEffect(() => {
// //     // Check login
// //     const loggedIn = localStorage.getItem("isLoggedIn");
// //     if (loggedIn !== "true") {
// //       router.push("/login");
// //       return;
// //     }

// //     async function fetchAppointments() {
// //       try {
// //         const res = await fetch(
// //           "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments"
// //         );
// //         const data = await res.json();

// //         if (data.status === "success") {
// //           setAppointments(data.appointments);
// //           computeAnalytics(data.appointments);
// //         } else {
// //           setError(data.message || "Failed to fetch data");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching data:", err);
// //         setError("Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchAppointments();
// //   }, [router]);

// //   const computeAnalytics = (data) => {
// //     const today = new Date().toISOString().split("T")[0];

// //     setTotalAppointments(data.length);
// //     setTodayAppointments(data.filter(a => a.Date === today).length);
// //     setUpcomingAppointments(data.filter(a => new Date(a.Date) >= new Date(today)).length);

// //     // Weekly trend
// //     const weekCounts = {};
// //     data.forEach(a => {
// //       const date = new Date(a.Date).toISOString().split("T")[0];
// //       weekCounts[date] = (weekCounts[date] || 0) + 1;
// //     });
// //     const sortedDates = Object.keys(weekCounts).sort();
// //     const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
// //     setWeeklyData(weekly);
// //   };

// //   if (!localStorage.getItem("isLoggedIn")) return null; // avoid flash

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-semibold">Appointments Dashboard</h1>
// //         <button
// //           onClick={() => {
// //             localStorage.removeItem("isLoggedIn");
// //             router.push("/login");
// //           }}
// //           className="bg-red-600 text-gray 800 px-4 py-2 rounded-lg hover:bg-red-700"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {/* Analytics Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //         <Card title="Total Appointments" value={totalAppointments} />
// //         <Card title="Today's Appointments" value={todayAppointments} />
// //         <Card title="Upcoming Appointments" value={upcomingAppointments} />
// //         <Card title="Weekly Trend" value={`Last ${weeklyData.length || 0} days`} />
// //       </div>

// //       {/* Charts */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// //         <div className="bg-white rounded-xl shadow-lg p-4">
// //           <h2 className="text-lg font-semibold mb-2 text-gray 800">Appointments Over Time</h2>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <LineChart data={weeklyData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis allowDecimals={false} />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="count" stroke="#2563eb" />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-lg p-4">
// //           <h2 className="text-lg font-semibold mb-2">Appointments Bar Chart</h2>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <BarChart data={weeklyData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis allowDecimals={false} />
// //               <Tooltip />
// //               <Bar dataKey="count" fill="#2563eb" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       {/* Appointments Table */}
// //       {loading && <p>Loading appointments...</p>}
// //       {error && <p className="text-red-600">{error}</p>}
// //       {!loading && !error && (
// //         <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
// //           <table className="min-w-full border border-gray-200">
// //             <thead className="bg-blue-600 text-gray 800">
// //               <tr>
// //                 <th className="px-4 py-2 border ">Timestamp</th>
// //                 <th className="px-4 py-2 border">Name</th>
// //                 <th className="px-4 py-2 border">Email</th>
// //                 <th className="px-4 py-2 border">Phone</th>
// //                 <th className="px-4 py-2 border">Date</th>
// //                 <th className="px-4 py-2 border">Message</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {appointments.map((appt, idx) => (
// //                 <tr key={idx} className="hover:bg-gray-50">
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Timestamp}</td>
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Name}</td>
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Email}</td>
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Phone}</td>
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Date}</td>
// //                   <td className="px-4 py-2 border text-gray-800">{appt.Message}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // Analytics Card Component
// // function Card({ title, value }) {
// //   return (
// //     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
// //       <p className="text-gray-600">{title}</p>
// //       <p className="text-2xl font-semibold mt-2">{value}</p>
// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
// } from "recharts";

// export default function Dashboard() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Show 5 appointments per page
//   const router = useRouter();

//   // Analytics
//   const [totalAppointments, setTotalAppointments] = useState(0);
//   const [todayAppointments, setTodayAppointments] = useState(0);
//   const [upcomingAppointments, setUpcomingAppointments] = useState(0);
//   const [weeklyData, setWeeklyData] = useState([]);

//   useEffect(() => {
//     // Check login
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn !== "true") {
//       router.push("/login");
//       return;
//     }

//     async function fetchAppointments() {
//       try {
//         const res = await fetch(
//           "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments"
//         );
//         const data = await res.json();

//         if (data.status === "success") {
//           const reversed = data.appointments.reverse(); // newest first
//           setAppointments(reversed);
//           computeAnalytics(reversed);
//         } else {
//           setError(data.message || "Failed to fetch data");
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchAppointments();
//   }, [router]);

//   const computeAnalytics = (data) => {
//     const today = new Date().toISOString().split("T")[0];
//     setTotalAppointments(data.length);
//     setTodayAppointments(data.filter(a => a.Date === today).length);
//     setUpcomingAppointments(data.filter(a => new Date(a.Date) >= new Date(today)).length);

//     // Weekly trend
//     const weekCounts = {};
//     data.forEach(a => {
//       const date = new Date(a.Date).toISOString().split("T")[0];
//       weekCounts[date] = (weekCounts[date] || 0) + 1;
//     });
//     const sortedDates = Object.keys(weekCounts).sort();
//     const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
//     setWeeklyData(weekly);
//   };

//   if (!localStorage.getItem("isLoggedIn")) return null; // avoid flash

//   // Pagination logic
//   const totalPages = Math.ceil(appointments.length / itemsPerPage);
//   const startIdx = (currentPage - 1) * itemsPerPage;
//   const currentData = appointments.slice(startIdx, startIdx + itemsPerPage);

//   return (
//     <div className="p-6 max-w-7xl mx-auto text-gray-800">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-semibold text-white ">Appointments Dashboard</h1>
//         <button
//           onClick={() => {
//             localStorage.removeItem("isLoggedIn");
//             router.push("/login");
//           }}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Analytics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <Card title="Total Appointments" value={totalAppointments} />
//         <Card title="Today's Appointments" value={todayAppointments} />
//         <Card title="Upcoming Appointments" value={upcomingAppointments} />
//         <Card title="Weekly Trend" value={`Last ${weeklyData.length || 0} days`} />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">Appointments Over Time</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis allowDecimals={false} />
//               <Tooltip />
//               <Line type="monotone" dataKey="count" stroke="#2563eb" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">Appointments Bar Chart</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <BarChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis allowDecimals={false} />
//               <Tooltip />
//               <Bar dataKey="count" fill="#2563eb" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Appointments Table */}
//       {loading && <p>Loading appointments...</p>}
//       {error && <p className="text-red-600">{error}</p>}
//       {!loading && !error && (
//         <>
//           <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
//             <table className="min-w-full border border-gray-200 text-gray-800">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="px-4 py-2 border">Timestamp</th>
//                   <th className="px-4 py-2 border">Name</th>
//                   <th className="px-4 py-2 border">Email</th>
//                   <th className="px-4 py-2 border">Phone</th>
//                   <th className="px-4 py-2 border">Date</th>
//                   <th className="px-4 py-2 border">Message</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentData.map((appt, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="px-4 py-2 border">{appt.Timestamp}</td>
//                     <td className="px-4 py-2 border">{appt.Name}</td>
//                     <td className="px-4 py-2 border">{appt.Email}</td>
//                     <td className="px-4 py-2 border">{appt.Phone}</td>
//                     <td className="px-4 py-2 border">{appt.Date}</td>
//                     <td className="px-4 py-2 border">{appt.Message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center items-center mt-4 space-x-2">
//             <button
//               onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             <span className="text-sm text-white">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // Analytics Card Component
// function Card({ title, value }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
//       <p className="text-gray-600">{title}</p>
//       <p className="text-2xl font-semibold mt-2 text-gray-800">{value}</p>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const itemsPerPage = 5;
  const router = useRouter();

  // Analytics
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todayAppointments, setTodayAppointments] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    setIsClient(true);

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/login");
      return;
    }

    async function fetchAppointments() {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments"
        );
        const data = await res.json();

        if (data.status === "success") {
          const reversed = (data.appointments || []).reverse();
          setAppointments(reversed);
          computeAnalytics(reversed);
        } else {
          setError(data.message || "Failed to fetch data");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, [router]);

  const computeAnalytics = (data) => {
    const today = new Date().toISOString().split("T")[0];

    setTotalAppointments(data.length);
    setTodayAppointments(data.filter(a => a.Date === today).length);
    setUpcomingAppointments(
      data.filter(a => new Date(a.Date) >= new Date(today)).length
    );

    const weekCounts = {};
    data.forEach(a => {
      const date = new Date(a.Date).toISOString().split("T")[0];
      weekCounts[date] = (weekCounts[date] || 0) + 1;
    });

    const sortedDates = Object.keys(weekCounts).sort();
    const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
    setWeeklyData(weekly);
  };

  // Prevent SSR crash
  if (!isClient) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  // Pagination
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = appointments.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-800">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Appointments Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            router.push("/login");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card title="Total Appointments" value={totalAppointments} />
        <Card title="Today's Appointments" value={todayAppointments} />
        <Card title="Upcoming Appointments" value={upcomingAppointments} />
        <Card title="Days Tracked" value={weeklyData.length} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Appointments Over Time
          </h2>

          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#0d9488" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Appointment Distribution
          </h2>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#0d9488" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Table */}
      {loading && <p>Loading appointments...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-4 py-2 border">Timestamp</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Message</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((appt, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{appt.Timestamp}</td>
                    <td className="px-4 py-2 border">{appt.Name}</td>
                    <td className="px-4 py-2 border">{appt.Email}</td>
                    <td className="px-4 py-2 border">{appt.Phone}</td>
                    <td className="px-4 py-2 border">{appt.Date}</td>
                    <td className="px-4 py-2 border">{appt.Message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 space-x-3">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// Card Component
function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2 text-gray-800">{value}</p>
    </div>
  );
}