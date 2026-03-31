

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
//   const [isClient, setIsClient] = useState(false);

//   const itemsPerPage = 5;
//   const router = useRouter();

//   // Analytics
//   const [totalAppointments, setTotalAppointments] = useState(0);
//   const [todayAppointments, setTodayAppointments] = useState(0);
//   const [upcomingAppointments, setUpcomingAppointments] = useState(0);
//   const [weeklyData, setWeeklyData] = useState([]);

//   useEffect(() => {
//     setIsClient(true);

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
//           const reversed = (data.appointments || []).reverse();
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
//     // const today = new Date().toISOString().split("T")[0];
//     const today = new Date().toLocaleDateString("en-CA", {
//       timeZone: "Asia/Kolkata",
//     });

//     setTotalAppointments(data.length);
//     setTodayAppointments(data.filter(a => {
//           const apptDate = new Date(a.Date).toLocaleDateString("en-CA", {
//             timeZone: "Asia/Kolkata",
//           });
//           return apptDate === today;
//         }).length);
//     setUpcomingAppointments(
//       data.filter(a => new Date(a.Date) >= new Date(today)).length
//     );

//     const weekCounts = {};
//     data.forEach(a => {
//       const date = new Date(a.Date).toISOString().split("T")[0];
//       weekCounts[date] = (weekCounts[date] || 0) + 1;
//     });

//     const sortedDates = Object.keys(weekCounts).sort();
//     const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
//     setWeeklyData(weekly);
//   };

//   // Prevent SSR crash
//   if (!isClient) {
//     return <p className="p-6">Loading dashboard...</p>;
//   }

//   // Pagination
//   const totalPages = Math.ceil(appointments.length / itemsPerPage);
//   const startIdx = (currentPage - 1) * itemsPerPage;
//   const currentData = appointments.slice(startIdx, startIdx + itemsPerPage);

//   return (
//     // <div className="p-6 max-w-7xl mx-auto text-gray-800">
//     <div className="pt-24 p-6 max-w-7xl mx-auto text-gray-800">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-semibold text-gray-800">
//           Appointments Dashboard
//         </h1>

//         <button
//           onClick={() => {
//             localStorage.removeItem("isLoggedIn");
//             router.push("/login");
//           }}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Analytics */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <Card title="Total Appointments" value={totalAppointments} />
//         <Card title="Today's Appointments" value={todayAppointments} />
//         <Card title="Upcoming Appointments" value={upcomingAppointments} />
//         <Card title="Days Tracked" value={weeklyData.length} />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">
//             Appointments Over Time
//           </h2>

//           <ResponsiveContainer width="100%" height={220}>
//             <LineChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis allowDecimals={false} />
//               <Tooltip />
//               <Line type="monotone" dataKey="count" stroke="#0d9488" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-800">
//             Appointment Distribution
//           </h2>

//           <ResponsiveContainer width="100%" height={220}>
//             <BarChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis allowDecimals={false} />
//               <Tooltip />
//               <Bar dataKey="count" fill="#0d9488" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//       </div>

//       {/* Table */}
//       {loading && <p>Loading appointments...</p>}
//       {error && <p className="text-red-600">{error}</p>}

//       {!loading && !error && (
//         <>
//           <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
//             <table className="min-w-full border border-gray-200">
//               <thead className="bg-teal-600 text-white">
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
//                     {/* <td className="px-4 py-2 border">{appt.Timestamp}</td> */}
//                     <td>
//                       {new Date(appt.Timestamp).toLocaleString("en-IN", {
//                         timeZone: "Asia/Kolkata",
//                         dateStyle: "medium",
//                         timeStyle: "short",
//                       })}
//                     </td>
//                     <td className="px-4 py-2 border">{appt.Name}</td>
//                     <td className="px-4 py-2 border">{appt.Email}</td>
//                     <td className="px-4 py-2 border">{appt.Phone}</td>
//                     {/* <td className="px-4 py-2 border">{appt.Date}</td> */}
//                     <td>
//                     {new Date(appt.Date).toLocaleString("en-IN", {
//                       timeZone: "Asia/Kolkata",
//                       dateStyle: "medium",
//                       timeStyle: "short",
//                     })}
//                   </td>
//                     <td className="px-4 py-2 border">{appt.Message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center items-center mt-4 space-x-3">
//             <button
//               onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>

//             <span className="text-sm text-gray-700">
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

// // Card Component
// function Card({ title, value }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//       <p className="text-gray-500">{title}</p>
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
import {
  CalendarDays, Users, Activity, Clock, LogOut
} from "lucide-react";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todayAppointments, setTodayAppointments] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);

  const router = useRouter();
  const itemsPerPage = 5;

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
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, [router]);

  // ✅ IST-safe analytics
  const computeAnalytics = (data) => {
    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    });

    setTotalAppointments(data.length);

    setTodayAppointments(
      data.filter(a => {
        const d = new Date(a.Date).toLocaleDateString("en-CA", {
          timeZone: "Asia/Kolkata",
        });
        return d === today;
      }).length
    );

    setUpcomingAppointments(
      data.filter(a => new Date(a.Date) >= new Date()).length
    );

    const weekCounts = {};
    data.forEach(a => {
      const date = new Date(a.Date).toLocaleDateString("en-CA", {
        timeZone: "Asia/Kolkata",
      });
      weekCounts[date] = (weekCounts[date] || 0) + 1;
    });

    const sortedDates = Object.keys(weekCounts).sort();
    const weekly = sortedDates.map(d => ({ date: d, count: weekCounts[d] }));
    setWeeklyData(weekly);
  };

  if (!isClient) return <p className="p-6">Loading...</p>;

  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = appointments.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto bg-gray-50 min-h-screen space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Overview of appointments and activity
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            router.push("/login");
          }}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total" value={totalAppointments} icon={<Users size={18} />} />
        <StatCard title="Today" value={todayAppointments} icon={<CalendarDays size={18} />} />
        <StatCard title="Upcoming" value={upcomingAppointments} icon={<Clock size={18} />} />
        <StatCard title="Days Tracked" value={weeklyData.length} icon={<Activity size={18} />} />
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">

        <Card>
          <h2 className="text-sm font-medium text-gray-600 mb-4">
            Appointments Over Time
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#14b8a6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-sm font-medium text-gray-600 mb-4">
            Appointment Distribution
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#14b8a6" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

      </div>

      {/* TABLE */}
      <Card>
        <h2 className="text-sm font-medium text-gray-600 mb-4">
          Recent Appointments
        </h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              {/* <thead className="bg-gray-100 text-gray-600 uppercase text-xs"> */}
              <thead className="bg-gray-200 text-gray-900 text-xs font-semibold uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3 text-left">Time</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
              {currentData.map((appt, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                  }`}
                >
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {new Date(appt.Timestamp).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>

                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {appt.Name}
                  </td>

                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {appt.Phone}
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {appt.Email}
                  </td>

                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {new Date(appt.Date).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
          <div className="flex justify-end items-center mt-6 gap-3">

          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-sm text-gray-800 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>

        </div>
      </Card>

    </div>
  );
}

// 🔥 Components

function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      {children}
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex justify-between items-center shadow-sm">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
      <div className="text-teal-600">{icon}</div>
    </div>
  );
}