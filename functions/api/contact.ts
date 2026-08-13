export const onRequestPost = async (context: {
  request: Request;
  env: {
    TELEGRAM_BOT_TOKEN?: string;
    TELEGRAM_CHAT_ID?: string;
    WEB3FORMS_ACCESS_KEY?: string;
  };
}) => {
  try {
    const body = (await context.request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
      _gotcha?: string;
      _renderTime?: number | string;
    };

    const { name, email, subject, message, _gotcha, _renderTime } = body || {};

    // 🛡️ ANTI-BOT TRAP 1: Honeypot Check
    if (_gotcha && String(_gotcha).trim() !== "") {
      console.warn(
        "[Anti-Bot Honeypot]: Blocked automated spam bot submission."
      );
      return Response.json({ success: true, message: "Message received" });
    }

    // 🛡️ ANTI-BOT TRAP 2: Speed Trap Check
    if (_renderTime && Date.now() - Number(_renderTime) < 1500) {
      console.warn(
        "[Anti-Bot Speed Trap]: Blocked fast bot submission (< 1.5s)."
      );
      return Response.json({ success: true, message: "Message received" });
    }

    // 🛡️ ANTI-BOT TRAP 3: Required Fields Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const telegramToken = context.env?.TELEGRAM_BOT_TOKEN;
    const telegramChatId = context.env?.TELEGRAM_CHAT_ID;
    const web3Key = context.env?.WEB3FORMS_ACCESS_KEY;

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
          }
        );

        const resData = (await res.json()) as { ok?: boolean };
        if (!resData?.ok) {
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

        const web3Data = (await web3Res.json()) as { success?: boolean };
        if (web3Data?.success) {
          console.log(
            "[Web3Forms Success]: Email notification delivered to inbox!"
          );
        } else {
          console.error("[Web3Forms Error]:", web3Data);
        }
      } catch (web3Err) {
        console.error("[Web3Forms Exception]:", web3Err);
      }
    }

    console.log(
      `[Contact Form Received] From: ${name} (${email}) | Subject: ${subject}`
    );

    return Response.json({
      success: true,
      message: "Message delivered successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json(
      { error: "Failed to dispatch message" },
      { status: 500 }
    );
  }
};

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
