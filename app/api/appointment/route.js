// export async function POST(req) {
//     try {
//       const body = await req.json();
  
//       const res = await fetch("https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
  
//       const data = await res.json();
  
//       return new Response(JSON.stringify(data), { status: 200 });
//     } catch (err) {
//       console.error("Error in API route:", err);
//       return new Response(JSON.stringify({ status: "error", message: err.message }), { status: 500 });
//     }
//   }
  

export async function POST(req) {
    try {
      const body = await req.json();
      const { captcha } = body;
  
      // 1️⃣ Verify CAPTCHA
      if (!captcha) {
        return new Response(
          JSON.stringify({ status: "error", message: "CAPTCHA token missing." }),
          { status: 400 }
        );
      }
  
      const secretKey = "6LfuO8srAAAAAJ31b7GGD6Oc0HLqp-Vd8EIGzkLm";
      const captchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${secretKey}&response=${captcha}`,
        }
      );
  
      const captchaResult = await captchaRes.json();
  
      if (!captchaResult.success) {
        return new Response(
          JSON.stringify({ status: "error", message: "CAPTCHA verification failed." }),
          { status: 400 }
        );
      }
  
      // 2️⃣ Forward the form data to Google Apps Script
      const scriptRes = await fetch(
        "https://script.google.com/macros/s/AKfycbyDstljLVMdMJPPmzfbAAeFokqBIudX69M3muXNVwCjr09m5sci0dBMNeVbwThaekXn/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
  
      const data = await scriptRes.json();
  
      // 3️⃣ Return response
      return new Response(JSON.stringify(data), { status: 200 });
  
    } catch (err) {
      console.error("Error in API route:", err);
      return new Response(
        JSON.stringify({ status: "error", message: err.message }),
        { status: 500 }
      );
    }
  }
  