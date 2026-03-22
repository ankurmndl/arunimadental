export async function GET(req) {
    try {
      // 🔑 Validate token
      const url = new URL(req.url);
      const token = url.searchParams.get("token");
  
      if (token !== process.env.NEXT_PUBLIC_API_TOKEN) {
        return new Response(
          JSON.stringify({ status: "error", message: "Unauthorized request" }),
          { status: 401 }
        );
      }
  
      // 🌐 Fetch data from Google Apps Script
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec?action=getAppointments";
  
      const res = await fetch(scriptUrl);
      const data = await res.json();
  
      return new Response(JSON.stringify({ status: "success", data }), {
        status: 200,
      });
    } catch (err) {
      console.error("Error fetching appointments:", err);
      return new Response(
        JSON.stringify({ status: "error", message: err.message }),
        { status: 500 }
      );
    }
  }
  