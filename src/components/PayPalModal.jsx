// PayPalModal.jsx
import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

// Modal backdrop
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
  max-width: 450px;
  max-height:90vh;
  overflow-y:scroll;
  width: 90%;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
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

// Optional header
const Header = styled.h2`
  margin-bottom: 1.5rem;
`;

export default function PayPalModal({ form, close}) {
  if (!form) return null;

  const savePayment = async (details) => {
    Swal.fire({text:"Please wait..."})
    Swal.showLoading();
    await addDoc(collection(db, "donations"), {
      ...form,
      paymentDetails: details,
      createdAt: new Date(),
    });
  };

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={close}>&times;</CloseButton>
        <Header>Complete Donation</Header>
        <p>Amount: ${form.amount}</p>
        {/* BRO MATT PAYPAL TEST KEY */}
        <PayPalScriptProvider options={{ "client-id": "AavNyWV2t6Ih-7AC2EqiU4VBGXjpB5J9ZB6eK9IQV2a2H-onWs-FL1vEz10idSU63pjI_wZGvCESso6O" }}>
          <PayPalButtons
            style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: form.amount,
                  },
                }],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              await savePayment(details);
      
              Swal.fire({title:"Success", text:"Payment completed! GOD BLESS YOUR GIVING.", icon:"success", allowOutsideClick:false})
               .then(() => {
                 // Close modal
                 close();
                 // Refresh the page
                 window.location.reload();
               });
              close();

              
            }}
            onError={(err) => {
              console.error("PayPal Error:", err);
              alert("Payment failed. Please try again.");
            }}
          />
        </PayPalScriptProvider>
      </ModalContent>
    </ModalBackdrop>
  );
}