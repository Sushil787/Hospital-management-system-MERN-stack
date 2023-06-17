
import axios from "axios";
let config = {
  // replace this key with yours
  publicKey: "test_public_key_a7886824486c4b90afd131eaa4a4e05b",
  productIdentity: "123766",
  productName: "My Ecommerce Store",
  productUrl: "http://localhost:3000",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };
      let Headers={"Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", 
        headers:{"Authorization":"test_secret_key_65392847bd90430f869d33898009b875"}

      }

       axios
         .post(
           `https://khalti.com/api/v2/payment/verify/`,data,Headers
         )
         .then((response) => {
           console.log(response.data);
           alert("Thank you for generosity");
       })
        .catch((error) => {
          console.log(error);
       });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
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

export default config;
