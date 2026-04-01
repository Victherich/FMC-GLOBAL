// PaystackModal.jsx
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path
import PaystackPop from "@paystack/inline-js";

// Backdrop
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// Modal container
const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
`;

// Close button
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

// Pay button
const PayButton = styled.button`
  margin-top: 1.5rem;
  padding: 12px 20px;
  width: 100%;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg,#b8860b,#d4af37);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: linear-gradient(135deg,#d4af37,#b8860b);
  }
`;

export default function PaystackModal({ form, close,}) {



const payWithPaystack = () => {
  Swal.fire({ text: "Please wait..." });
  Swal.showLoading();

  const paystack = new PaystackPop();

  paystack.newTransaction({
    // key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
    key:"pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170",
    email: "faithandmiraclecenter@gmail.com",
    amount: form.amount * 100,
    currency: "NGN",
    subaccount: "ACCT_6r0tyg8mdqdusld",
    bearer: "subaccount", // or "subaccount"

    onSuccess: (transaction) => {
      (async () => {
        try {
          await addDoc(collection(db, "donations"), {
            ...form,
            reference: transaction.reference,
            createdAt: new Date(),
          });

          Swal.fire({
            title: "Success",
            text: "Payment completed! GOD BLESS YOUR GIVING.",
            icon: "success",
            allowOutsideClick: false,
          }).then(() => {
            close();
            window.location.reload();
          });

        } catch (err) {
          Swal.fire("Error", "Could not record donation.", "error");
        }
      })();
    },

    onCancel: () => {
      Swal.fire("Info", "Payment canceled.", "info");
      close();
    },
  });
};









  if (!form) return null;

 

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={close}>&times;</CloseButton>
        <h2>Confirm Donation</h2>
        <p>Amount: ₦{form.amount}</p>
        <p>Category: {form.category}</p>
        <PayButton onClick={payWithPaystack}>Pay with Paystack</PayButton>
      </ModalContent>
    </ModalBackdrop>
  );
}





// // PaystackModal.jsx
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// import PaystackPop from "@paystack/inline-js";

// const ModalBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0,0,0,0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// const ModalContent = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 20px;
//   max-width: 400px;
//   width: 90%;
//   text-align: center;
// `;

// const Button = styled.button`
//   margin-top: 1rem;
//   padding: 12px;
//   width: 100%;
//   border: none;
//   border-radius: 30px;
//   background: #b8860b;
//   color: white;
//   cursor: pointer;
// `;

// export default function PaystackModal({ form, close }) {
//   const [method, setMethod] = useState(null);
//   const [bankData, setBankData] = useState(null);

//   // 🔁 Load saved bank payment
//   useEffect(() => {
//     const saved = localStorage.getItem("bankPayment");
//     if (saved) {
//       setBankData(JSON.parse(saved));
//       setMethod("bank");
//     }
//   }, []);

//   // 💳 CARD PAYMENT
//   const payWithCard = () => {
//     const paystack = new PaystackPop();

//     paystack.newTransaction({
//       key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//       email: form.email,
//       amount: form.amount * 100,
//       currency: "NGN",
//         channels: ["card"],

//       onSuccess: async (transaction) => {
//         await addDoc(collection(db, "donations"), {
//           ...form,
//           reference: transaction.reference,
//           method: "card",
//           createdAt: new Date(),
//         });

//         localStorage.removeItem("bankPayment");

//         Swal.fire("Success", "Payment successful!", "success").then(() => {
//           close();
//           window.location.reload();
//         });
//       },

//       onCancel: () => {
//         Swal.fire("Cancelled", "Payment cancelled", "info");
//       },
//     });
//   };

//   // 🏦 BANK TRANSFER (CREATE ACCOUNT)
//   const startBankTransfer = async () => {
//     Swal.fire({ text: "Generating account...", allowOutsideClick: false });
//     Swal.showLoading();

//     try {
//       const res = await fetch("http://localhost:3000/api/create_transfer", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       setBankData(data);
//       setMethod("bank");

//       localStorage.setItem("bankPayment", JSON.stringify(data));

//       Swal.close();
//     } catch (err) {
//       Swal.fire("Error", "Could not generate account", "error");
//     }
//   };

//   // 🔁 VERIFY PAYMENT
//   const verifyPayment = async () => {
//     const res = await fetch(`/api/verify/${bankData.reference}`);
//     const data = await res.json();

//     if (data.status === "success") {
//       await addDoc(collection(db, "donations"), {
//         ...form,
//         reference: bankData.reference,
//         method: "bank",
//         createdAt: new Date(),
//       });

//       localStorage.removeItem("bankPayment");

//       Swal.fire("Success", "Payment confirmed!", "success").then(() => {
//         close();
//         window.location.reload();
//       });
//     } else {
//       Swal.fire("Pending", "Payment not yet received", "info");
//     }
//   };

//   // 🔄 AUTO POLLING
//   useEffect(() => {
//     if (!bankData) return;

//     const interval = setInterval(async () => {
//       const res = await fetch(`/api/verify/${bankData.reference}`);
//       const data = await res.json();

//       if (data.status === "success") {
//         clearInterval(interval);
//         verifyPayment();
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [bankData]);

//   if (!form) return null;

//   return (
//     <ModalBackdrop>
//       <ModalContent>
//         <h2>Confirm Donation</h2>
//         <p>₦{form.amount}</p>

//         {!method && (
//           <>
//             <Button onClick={payWithCard}>
//               Pay with Card
//             </Button>

//             <Button onClick={startBankTransfer}>
//               Pay with Bank Transfer
//             </Button>
//           </>
//         )}

//         {method === "bank" && bankData && (
//           <>
//             <h3>Transfer to this account</h3>
//             <p><b>{bankData.bank_name}</b></p>
//             <p><b>{bankData.account_number}</b></p>
//             <p>Amount: ₦{bankData.amount}</p>

//             <Button onClick={verifyPayment}>
//               I Have Paid
//             </Button>
//           </>
//         )}

//         <Button onClick={close}>Cancel</Button>
//       </ModalContent>
//     </ModalBackdrop>
//   );
// }