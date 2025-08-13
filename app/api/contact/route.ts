// app/api/contact/route.ts
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const message = `
📩 Новая заявка

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
        `;

        const TELEGRAM_BOT_TOKEN = "7559388010:AAFCCu5RX1itBly2U-KhZQe7-53RcNTISz0";
        const CHAT_ID = "6859758284";

        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        });

        const telegramResponse = await res.json();

        if (!telegramResponse.ok) {
            console.error("Telegram error:", telegramResponse);
            return NextResponse.json({success: false}, {status: 500});
        }

        return NextResponse.json({success: true});
    } catch (error) {
        console.error("Submission error:", error);
        return NextResponse.json({success: false}, {status: 500});
    }
}