import { NextResponse } from "next/server";

// Server In-Memory Rate Limiter (Max 4 messages per 5 minutes per IP address)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _gotcha, _renderTime } = body;

    // 🛡️ ANTI-BOT TRAP 1: Honeypot Check
    // Bots auto-fill invisible fields; humans don't see or touch them
    if (_gotcha && String(_gotcha).trim() !== "") {
      console.warn(
        "[Anti-Bot Honeypot]: Blocked automated spam bot submission.",
      );
      return NextResponse.json({ success: true, message: "Message received" });
    }

    // 🛡️ ANTI-BOT TRAP 2: Speed Trap Check
    // Humans take > 1.5s to fill forms; bots submit instantly (< 1.5s)
    if (_renderTime && Date.now() - Number(_renderTime) < 1500) {
      console.warn(
        "[Anti-Bot Speed Trap]: Blocked fast bot submission (< 1.5s).",
      );
      return NextResponse.json({ success: true, message: "Message received" });
    }

    // 🛡️ ANTI-BOT TRAP 3: Required Fields Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 🛡️ ANTI-BOT TRAP 4: IP Rate Limiting (Prevent Flooding Script Loops)
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "client-ip";
    const now = Date.now();
    const windowMs = 5 * 60 * 1000; // 5 minutes
    const maxRequests = 4; // Max 4 submissions every 5 mins

    const clientRate = rateLimitMap.get(clientIp) || {
      count: 0,
      lastReset: now,
    };

    if (now - clientRate.lastReset > windowMs) {
      clientRate.count = 0;
      clientRate.lastReset = now;
    }

    if (clientRate.count >= maxRequests) {
      console.warn(
        `[Anti-Bot Rate Limit]: Blocked IP ${clientIp} for excessive requests.`,
      );
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes before sending another message.",
        },
        { status: 429 },
      );
    }

    clientRate.count += 1;
    rateLimitMap.set(clientIp, clientRate);

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

    // 1. Silent Background Dispatch to Telegram Bot API
    if (telegramToken && telegramChatId) {
      try {
        const text = `Hello 👋 I'm ${name}\n\n📧 Email: ${email}\n📌 Subject: ${subject || "N/A"}\n\n💬 Message:\n${message}`;
        const res = await fetch(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: text,
            }),
          },
        );

        const resData = await res.json();
        if (!resData.ok) {
          console.error("[Telegram API Error]:", resData);
        } else {
          console.log("[Telegram API Success]: Notification sent!");
        }
      } catch (err) {
        console.error("[Telegram API Exception]:", err);
      }
    }

    // 2. Silent Background Dispatch to Web3Forms API
    if (web3Key) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: name,
            email: email,
            subject: subject || `New Portfolio Contact Message from ${name}`,
            message: message,
            from_name: "RI Suvo Portfolio",
          }),
        });

        const web3Data = await web3Res.json();
        if (web3Data.success) {
          console.log(
            "[Web3Forms Success]: Email notification delivered to inbox!",
          );
        } else {
          console.error("[Web3Forms Error]:", web3Data);
        }
      } catch (web3Err) {
        console.error("[Web3Forms Exception]:", web3Err);
      }
    }

    // Always log in server console
    console.log(
      `[Contact Form Received] From: ${name} (${email}) | Subject: ${subject}`,
    );

    return NextResponse.json({
      success: true,
      message: "Message delivered successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch message" },
      { status: 500 },
    );
  }
}
