import axios from "axios";

const tokens = localStorage.getItem("jwt");

const makePayment = async (token, amount) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/patient/appointment/payment",
      {
        token: token,
        amount: amount,
      },
      {
        headers: {
          authorization: tokens

        },
      }
    );

    console.log(response.data);
    alert("Thank you for your generosity");
  } catch (error) {
    console.log(error.message);
  }
};

const Config = {
  
  publicKey: process.env.KHATLI_PUBLIC_KEY,
  productIdentity: "123766",
  productName: "My Ecommerce Store",
  productUrl: "http://localhost:3000",
  eventHandler: {
    onSuccess(payload) {
      console.log(payload);
      const { token, amount } = payload;
       makePayment(token, amount);
    },
    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default Config;