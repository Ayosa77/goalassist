"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

export default function PayPalButton({
  amount,
  description,
}: {
  amount: string;
  description: string;
}) {
  const btnIdPayPal = `paypal-btn-${amount.replace(".", "-")}`;
  const btnIdCard = `card-btn-${amount.replace(".", "-")}`;

  useEffect(() => {
    if (!window.paypal) return;

    /* ------------------------------
       BOUTON PAYPAL OFFICIEL
    ------------------------------ */
    window.paypal
      .Buttons({
        fundingSource: "paypal",
        style: {
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "paypal",
          height: 45,
        },

        createOrder() {
          return fetch("/api/paypal/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
          })
            .then((res) => res.json())
            .then((order) => order.id);
        },

        onApprove(data: { orderID: string }) {
          return fetch("/api/paypal/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          }).then(() => {
            window.location.href = "/merci";
          });
        },

        onError(err: Error) {
          console.error("PayPal Error:", err);
          alert("Erreur lors du paiement.");
        },
      })
      .render(`#${btnIdPayPal}`);

    /* ------------------------------
       BOUTON CARTE BANCAIRE (CARD)
       ✔ Doit utiliser color: "black" ou "white"
       ✔ "silver" = ERREUR PayPal → crash
    ------------------------------ */
    window.paypal
      .Buttons({
        fundingSource: "card",
        style: {
          layout: "vertical",
          color: "black", // ✔ CORRECTION
          shape: "pill",
          label: "pay",
          height: 45,
        },

        createOrder() {
          return fetch("/api/paypal/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
          })
            .then((res) => res.json())
            .then((order) => order.id);
        },

        onApprove(data: { orderID: string }) {
          return fetch("/api/paypal/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          }).then(() => {
            window.location.href = "/merci";
          });
        },

        onError(err: Error) {
          console.error("PayPal CARD Error:", err);
          alert("Erreur lors du paiement par carte.");
        },
      })
      .render(`#${btnIdCard}`);
  }, [amount]);

  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      {/* PAYPAL */}
      <div id={btnIdPayPal} className="w-full"></div>

      {/* CARTE BANCAIRE */}
      <div id={btnIdCard} className="w-full"></div>
    </div>
  );
}
