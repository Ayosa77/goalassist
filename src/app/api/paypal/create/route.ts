import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { productToken } = await req.json();

    // 🎯 Base de données interne ultra simple et sécurisée
    const PRODUCTS: Record<string, { price: string; token: string }> = {
      "1m": { price: "6.99", token: "tok_1m_x81js91ns7" },
      "3m": { price: "14.99", token: "tok_3m_81jsn712aa" },
      "6m": { price: "24.99", token: "tok_6m_92msja61bb" },
      "12m": { price: "39.99", token: "tok_12m_82ksn191cc" },
    };

    // 🔐 On retrouve le produit à partir du token
    const product = Object.values(PRODUCTS).find(
      (p) => p.token === productToken
    );

    if (!product) {
      return NextResponse.json(
        { error: "Invalid product token" },
        { status: 400 }
      );
    }

    const amount = product.price;

    const clientId = process.env.PAYPAL_CLIENT_ID!;
    const secret = process.env.PAYPAL_SECRET!;
    const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

    // 🧾 Création de l’ordre PayPal
    const response = await fetch(`${process.env.PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: amount,
            },
          },
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("PayPal createOrder error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
