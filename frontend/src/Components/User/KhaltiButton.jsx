import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

const KhaltiButton = ({item}) => {
  let checkout = new KhaltiCheckout(config);
  const handleClick = () => {
    // Initialize KhaltiCheckout with your public key
    const config = {
      publicKey: "a7886824486c4b90afd131eaa4a4e05b",
      productIdentity: "12345678",
      productName: "Hms",
      productUrl: "http://localhost:3000",
      eventHandler: {
        onSuccess(payload) {
          console.log("Payment successful", payload);
          // Perform any actions after successful payment
        },
        onError(error) {
          console.log("Payment error", error);
          // Handle payment error
        },
        onClose() {
          console.log("Payment closed");
          // Handle payment close event
        },
      },
    };

    
  };

  return <button onClick={() => checkout.show({ amount: 10000 })} sx={{
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  }}>Pay with Khalti</button>;
};

export default KhaltiButton;
