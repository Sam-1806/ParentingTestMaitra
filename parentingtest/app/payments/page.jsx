"use client";
import { useState, useEffect } from "react";

export default function PaymentPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validate form fields
    setIsFormValid(
      userData.name.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email) &&
        /^[0-9]{10}$/.test(userData.contact)
    );
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePayment = () => {
    // Function to load Razorpay script and handle payment
    const loadRazorpay = () => {
      if (window.Razorpay) {
        const options = {
          key: "rzp_live_u7FhYn8GGX9jHB", // Replace with your Razorpay key
          amount: 69900, // Amount in paise (₹699)
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
            name: userData.name,
            email: userData.email,
            contact: userData.contact,
          },
          theme: {
            color: "#4CAF50",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    };

    // Dynamically load the Razorpay script if not already loaded
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = loadRazorpay;
    script.onerror = () => console.error("Error loading Razorpay script");
    document.body.appendChild(script);
  };

  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Ensures vertical centering
    height: "100vh", // Ensures it takes the full screen
    width: "100%", // Ensures proper width
    overflow: "auto", // Prevents hidden form
    padding: "20px", // Ensures spacing
  }}
>
  <div
    style={{
      width: "90%",
      maxWidth: "600px",
      padding: "30px",
      textAlign: "center",
      border: "3px solid #212121",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative", // Ensures no overlap
      zIndex: 10, // Ensures visibility
    }}
  >
        <h1
          style={{
            color: "#333",
            fontWeight: "600",
            fontSize: "26px",
            marginBottom: "10px",
          }}
        >
          Complete the Form to Proceed to Payment
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Please provide your details to continue with the payment process.
        </p>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Enter your contact number"
            value={userData.contact}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px",
              margin: "12px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="button"
            onClick={handlePayment}
            disabled={!isFormValid}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: isFormValid ? "#4CAF50" : "#9E9E9E",
              border: "none",
              borderRadius: "8px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              transition: "background-color 0.3s ease",
            }}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}  