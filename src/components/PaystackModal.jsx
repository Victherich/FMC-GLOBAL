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
    key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
    email: form.email,
    amount: form.amount * 100,
    currency: "NGN",

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