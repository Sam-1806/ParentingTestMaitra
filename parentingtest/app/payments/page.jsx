"use client";
import { useState, useEffect } from "react";

export default function PaymentPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    parentAge: "",
    numKids: "",
    profession: "",
    kidAge: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validate form fields
    setIsFormValid(
      userData.name.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email) &&
        /^[0-9]{10}$/.test(userData.contact) &&
        /^[0-9]{1,2}$/.test(userData.parentAge) &&
        /^[0-9]{1,2}$/.test(userData.numKids) &&
        userData.profession.trim() !== "" &&
        /^[0-9]{1,2}$/.test(userData.kidAge)
    );
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePayment = () => {
    const loadRazorpay = () => {
      if (window.Razorpay) {
        const options = {
          key: "rzp_live_u7FhYn8GGX9jHB",
          amount: 69900,
          currency: "INR",
          name: "Parenting Quiz",
          description: "Complete the quiz after payment",
          image: "/assets/logo/Logo2.svg",
          handler: function (response) {
            console.log("Payment ID:", response.razorpay_payment_id);
            window.location.href = "/quiz";
          },
          prefill: { ...userData },
          theme: { color: "#4CAF50" },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    };

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = loadRazorpay;
    script.onerror = () => console.error("Error loading Razorpay script");
    document.body.appendChild(script);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        overflow: "auto",
        padding: "20px",
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
        }}
      >
        <h1 style={{ color: "#333", fontWeight: "600", fontSize: "26px", marginBottom: "10px" }}>
          Complete the Form to Proceed to Payment
        </h1>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
          Please provide your details to continue with the payment process.
        </p>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="tel"
            name="contact"
            placeholder="Enter your contact number"
            value={userData.contact}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="parentAge"
            placeholder="Enter your age"
            value={userData.parentAge}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="numKids"
            placeholder="Number of kids"
            value={userData.numKids}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="profession"
            placeholder="Your profession"
            value={userData.profession}
            onChange={handleInputChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="kidAge"
            placeholder="Age of your kid"
            value={userData.kidAge}
            onChange={handleInputChange}
            style={inputStyle}
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
