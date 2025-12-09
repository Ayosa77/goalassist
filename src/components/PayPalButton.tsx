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

    // 🧹 IMPORTANT : on nettoie les conteneurs pour éviter les doublons
    const containerPaypal = document.getElementById(btnIdPayPal);
    const containerCard = document.getElementById(btnIdCard);

    if (containerPaypal) containerPaypal.innerHTML = "";
    if (containerCard) containerCard.innerHTML = "";

    /* ------------------------------
       BOUTON PAYPAL
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
      })
      .render(`#${btnIdPayPal}`);

    /* ------------------------------
       BOUTON CARTE BANCAIRE
    ------------------------------ */
    window.paypal
      .Buttons({
        fundingSource: "card",
        style: {
          layout: "vertical",
          color: "black",
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
      })
      .render(`#${btnIdCard}`);
  }, [amount]);

  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      <div id={btnIdPayPal} className="w-full"></div>
      <div id={btnIdCard} className="w-full"></div>
    </div>
  );
}
