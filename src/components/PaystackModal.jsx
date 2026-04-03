// // PaystackModal.jsx
// import React from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // adjust path
// import PaystackPop from "@paystack/inline-js";

// // Backdrop
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

// // Modal container
// const ModalContent = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 20px;
//   max-width: 400px;
//   width: 90%;
//   position: relative;
//   text-align: center;
//   box-shadow: 0 10px 25px rgba(0,0,0,0.2);
// `;

// // Close button
// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// // Pay button
// const PayButton = styled.button`
//   margin-top: 1.5rem;
//   padding: 12px 20px;
//   width: 100%;
//   border: none;
//   border-radius: 30px;
//   background: linear-gradient(135deg,#b8860b,#d4af37);
//   color: #fff;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: 0.2s;

//   &:hover {
//     background: linear-gradient(135deg,#d4af37,#b8860b);
//   }
// `;

// export default function PaystackModal({ form, close,}) {



// const payWithPaystack = () => {
//   Swal.fire({ text: "Please wait..." });
//   Swal.showLoading();

//   const paystack = new PaystackPop();

//   paystack.newTransaction({
//     // key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//     key:"pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170",
//     email: "faithandmiraclecenter@gmail.com",
//     amount: form.amount * 100,
//     currency: "NGN",
//     subaccount: "ACCT_nb1fgn9yju5fohg",
//     bearer: "subaccount", // or "subaccount"

//     onSuccess: (transaction) => {
//       (async () => {
//         try {
//           await addDoc(collection(db, "donations"), {
//             ...form,
//             reference: transaction.reference,
//             createdAt: new Date(),
//           });

//           Swal.fire({
//             title: "Success",
//             text: "Payment completed! GOD BLESS YOUR GIVING.",
//             icon: "success",
//             allowOutsideClick: false,
//           }).then(() => {
//             close();
//             window.location.reload();
//           });

//         } catch (err) {
//           Swal.fire("Error", "Could not record donation.", "error");
//         }
//       })();
//     },

//     onCancel: () => {
//       Swal.fire("Info", "Payment canceled.", "info");
//       window.location.reload();
//       close();
//     },
//   });
// };









//   if (!form) return null;

 

//   return (
//     <ModalBackdrop>
//       <ModalContent>
//         <CloseButton onClick={close}>&times;</CloseButton>
//         <h2>Confirm Donation</h2>
//         <p>Amount: ₦{form.amount}</p>
//         <p>Category: {form.category}</p>
//         <PayButton onClick={payWithPaystack}>Pay with Paystack</PayButton>
//       </ModalContent>
//     </ModalBackdrop>
//   );
// }




import React, { useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import { Context } from "./Context";

// ---------------- STYLES ----------------
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PayButton = styled.button`
  margin-top: 1.5rem;
  padding: 12px;
  width: 100%;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg,#b8860b,#d4af37);
  color: #fff;
  cursor: pointer;
`;



const CancelButton = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid gray;
  background-color: #fff;
  color: gray;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top:10px;

  &:hover {
    background-color:darkgray;
    color: #fff;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// ---------------- COMPONENT ----------------
export default function PaystackModal({ form, close }) {



  const {openPendingModal, setOpenPendingModal,test}= useContext (Context);

  const payWithPaystack = () => {
    Swal.fire({
      text: "Initializing payment...",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const paystack = new PaystackPop();

    // ✅ UNIQUE ID (CRITICAL FOR IOT)
    const verificationNumber = `${Date.now()}-${Math.floor(
      Math.random() * 1000000000
    )}`;

    // ✅ OPTIONAL: attach device info (IoT)
    const deviceId = form.deviceId || "default-device";

    // ✅ SAVE EVERYTHING LOCALLY
    localStorage.setItem(
      "pendingDonation",
      JSON.stringify({
        form,
        verificationNumber,
        deviceId,
        status: "pending",
      })
    );

    setOpenPendingModal(true)

    paystack.newTransaction({
      key: "pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170",
      //  key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      email: "faithandmiraclecenter@gmail.com",
      amount: form.amount * 100,
      currency: "NGN",
      subaccount: "ACCT_nb1fgn9yju5fohg",
    // subaccount: "ACCT_6r0tyg8mdqdusld", //TEST SUB ACCOUNT
      bearer: "subaccount",

      // ✅ SEND IDENTIFIER TO PAYSTACK
      metadata: {
        custom_payment_type: verificationNumber,
        device_id: deviceId, // 🔥 IoT tracking
      },

      onSuccess: () => {
        // ❌ DO NOTHING HERE
        // Let global modal handle everything

        Swal.fire({
          title: "Processing...",
          text: "Verifying your payment...",
          allowOutsideClick: false,
          timer:1000
        });

        close(); // close this modal only
      },

      onCancel: () => {
        localStorage.removeItem("pendingDonation");
setOpenPendingModal(false)
        Swal.fire("Cancelled", "Payment cancelled.", "info");
        close();
      },

      onError: (err) => {
        localStorage.removeItem("pendingDonation");
setOpenPendingModal(false)
        Swal.fire("Error", err.message, "error");
      },
    });
  };


    if (!form) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={close}>&times;</CloseButton>

        <h2>Confirm Payment</h2>
        <p>Amount: ₦{form.amount}</p>
        <p>Category: {form.category}</p>

        <PayButton onClick={payWithPaystack}>
          Pay with Paystack
        </PayButton>
        <br/>
        <CancelButton 
        onClick={()=>close()}>
          Cancel
        </CancelButton>
      </ModalContent>
    </ModalBackdrop>
  );
}