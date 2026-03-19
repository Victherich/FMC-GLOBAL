// PaystackModal.jsx
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path

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
  if (!form) return null;

  const payWithPaystack = () => {
    Swal.fire({text:"Please wait"});
    Swal.showLoading();
    const handler = window.PaystackPop.setup({
    //   key: "YOUR_PUBLIC_KEY", // replace with your Paystack key
      key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      email: form.email,
      amount: form.amount * 100,
      currency: "NGN",
      callback: function (response) {
        // Wrap async logic in a proper function
        (async () => {
          try {
            await addDoc(collection(db, "donations"), {
              ...form,
              reference: response.reference,
              createdAt: new Date(),
            });
            Swal.fire({title:"Success", text:"Payment completed! GOD BLESS YOUR GIVING.", icon:"success", allowOutsideClick:false})
  .then(() => {
    // Close modal
    close();
    // Refresh the page
    window.location.reload();
  });
          
            close();

          } catch (err) {
            Swal.fire("Error", "Could not record donation.", "error");
          }
        })();
      },
      onClose: function () {
        Swal.fire("Info", "Payment canceled.", "info");
        close();
      },
    });
    handler.openIframe();
  };

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