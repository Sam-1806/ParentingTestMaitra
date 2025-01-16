"use client";
import { useEffect } from "react";

export default function PaymentPage() {
  useEffect(() => {
    // Function to load Razorpay script and handle payment
    const loadRazorpay = () => {
      if (window.Razorpay) {
        const options = {
          key: "rzp_live_u7FhYn8GGX9jHB", // Replace with your Razorpay key
          amount: 69900, // Amount in paise (₹500)
          currency: "INR",
          name: "Parenting Quiz",
          description: "Complete the quiz after payment",
          image: "parentingtest/public/assets/logo/Logo2.svg", // Optional: logo to display in Razorpay widget
          handler: function (response) {
            const paymentId = response.razorpay_payment_id;
            console.log("Payment ID:", paymentId);
            // After successful payment, redirect to the quiz page
            window.location.href = "/quiz"; // Redirect to quiz page
          },
          prefill: {
            name: "User Name",
            email: "user@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#4CAF50",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        // Handle case if Razorpay SDK is not loaded
        console.error("Razorpay SDK not loaded");
      }
    };

    // Dynamically load the Razorpay script if not already loaded
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = loadRazorpay;
    script.onerror = () => console.error("Error loading Razorpay script");
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          padding: "20px",
          textAlign: "center",
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 style={{ color: "black", fontWeight: "bold", fontSize: "24px", margin: "0" }}>
          Complete Payment to Start the Quiz
        </h1>
      </div>
      <a href="/payments"></a>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#4CAF50",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => window.location.reload()}
      >
        Pay Now
      </button>
    </div>
  );
}

