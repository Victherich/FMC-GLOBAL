import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import styled, { keyframes } from "styled-components";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, paymentDb } from "../firebaseConfig";
import { Context } from "./Context";

// === Spinner Animation ===
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// === Styled Components ===
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 90%;
  max-width: 420px;
  text-align: center;
`;

const Spinner = styled.div`
  border: 4px solid #e0e0e0;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto 1.5rem;
  animation: ${spin} 1s linear infinite;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 1.8rem;
`;

const Countdown = styled.div`
  font-size: 1.1rem;
  color: #007bff;
  font-weight: bold;
`;

const CancelButton = styled.button`
  background-color: lightgray;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;

// === COMPONENT ===
const PaymentInProgressModal = () => {
  const [timeLeft, setTimeLeft] = useState(200);
  const [show, setShow] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // prevents duplicate saves
const {setOpenPendingModal} =useContext(Context);
 const [messageIndex, setMessageIndex] = useState(0);
  // ============================================
  // 🧠 CHECK LOCALSTORAGE ON LOAD (AND RELOAD SAFE)
  // ============================================
  useEffect(() => {
    const pending = localStorage.getItem("pendingDonation");

    if (pending) {
      setShow(true);

      const { verificationNumber } = JSON.parse(pending);

      startPolling(verificationNumber);
    }
  }, []);

  // ============================================
  // ⏳ COUNTDOWN
  // ============================================
  useEffect(() => {
    if (!show) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [show]);

  // ============================================
  // 🔁 POLLING FUNCTION
  // ============================================
  const startPolling = (verificationNumber) => {
    let attempts = 0;
    const maxAttempts = 18;

    const intervalId = setInterval(async () => {
      if (isProcessing) return; // 🚫 prevent duplicate execution

      try {
        attempts++;

       const paymentsRef = collection(paymentDb, "paystack_webhooks");
        const q = query(
          paymentsRef,
          where("data.metadata.custom_payment_type", "==", verificationNumber)
        );

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const successDoc = snapshot.docs.find(
            (doc) => doc.data()?.data?.status === "success"
          );

          if (successDoc) {
            setIsProcessing(true);
            clearInterval(intervalId);

            const verified = successDoc.data();
            const reference = verified?.data?.reference;

            await handleSuccess(reference);
            return;
          }
        }

        // ⛔ timeout
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);

          Swal.fire(
            "Delayed",
            "Payment not confirmed yet. If debited, contact support.",
            "warning"
          );

          cleanup();
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, 10000);
  };

  // ============================================
  // 💾 SAVE AFTER VERIFICATION
  // ============================================
  const handleSuccess = async (reference) => {
    try {
      const pending = JSON.parse(localStorage.getItem("pendingDonation"));
      if (!pending) return;

      const { form, verificationNumber } = pending;

      await addDoc(collection(db, "donations"), {
        ...form,
        reference,
        verificationNumber,
        status: "success",
        createdAt: new Date(),
      });

      Swal.fire(
        "Success",
        "Payment verified! GOD BLESS YOUR GIVING 🙏",
        "success"
      );

      cleanup();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to save donation.", "error");
    }
  };

  // ============================================
  // 🧹 CLEANUP
  // ============================================
  const cleanup = () => {
    localStorage.removeItem("pendingDonation");
    setShow(false);
    setIsProcessing(false);
    setOpenPendingModal(false);
  };

  // ============================================
  // ❌ CANCEL
  // ============================================
  const handleCancel = () => {
    Swal.fire({
      title: "Cancel Payment?",
      text: "Are you sure?",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        cleanup();
      }
    });
  };



  const messages = [
    "Please wait while we verify your payment.",
    "Please ensure that you actually made the payment from your bank app.",
    "Please ensure that the payment was successful.",
    "Your payment seems not to have reached us.",
    "After long waiting and this persists, you can cancel the payment and contact our support team and also check with your bank, your payment seem not to have reached us.",
  ];


    // Update message every 20 seconds
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 20000);
    return () => clearInterval(messageTimer);
  }, [messages.length]);



  // ============================================
  // 🚫 DON'T RENDER IF NOTHING TO VERIFY
  // ============================================
  if (!show) return null;

  return (
    <Overlay>
      <ModalBox>
        <Spinner />
        <Title>Verifying Payment...</Title>

        <Countdown>⏳ {timeLeft}s</Countdown>

        <Message>
          {messages[messageIndex]}
        </Message>

        <CancelButton onClick={handleCancel}>
          Cancel
        </CancelButton>
      </ModalBox>
    </Overlay>
  );
};

export default PaymentInProgressModal;