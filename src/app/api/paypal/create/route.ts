import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

  const auth = Buffer.from(
    process.env.PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_SECRET
  ).toString("base64");

  const res = await fetch(`${process.env.PAYPAL_API}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: { currency_code: "EUR", value: amount },
        },
      ],
    }),
  });

  const json = await res.json();
  return NextResponse.json(json);
}
