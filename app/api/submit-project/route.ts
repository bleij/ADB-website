import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const message = `
🛠 Новый проект от ${data.firstName} ${data.lastName}

👤 Должность: ${data.position}
📧 Email: ${data.email}
📞 Телефон: ${data.phone}
❓ Продукт для реализации: ${data.productToMake}

📦 Название продукта: ${data.productName}
Тип: ${data.productType}
Описание: ${data.productDesc}

🎯 Цель: ${data.goal}
🎯 Аудитория: ${data.audience}

🔧 Функции: ${data.features}
🔌 Интеграции: ${data.integrations}

🎨 Стиль: ${data.style}
👁 Визуал: ${data.visual}

💻 Платформы: ${data.platforms}
⚙️ Технологии: ${data.technologies}

🚀 MVP: ${data.launchDate}
💰 Бюджет: ${data.budget}
    `;

        const TELEGRAM_BOT_TOKEN = "7559388010:AAFCCu5RX1itBly2U-KhZQe7-53RcNTISz0";
        const CHAT_ID = "6859758284";

        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        });

        const telegramResponse = await res.json();

        if (!telegramResponse.ok) {
            console.error("Telegram error:", telegramResponse);
            return NextResponse.json({ success: false, error: "Telegram API failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Submission error:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}