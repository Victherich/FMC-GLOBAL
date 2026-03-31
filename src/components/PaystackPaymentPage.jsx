import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PaystackPop from "@paystack/inline-js";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

/* ================= STYLES ================= */

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #0f172a;
`;

const Amount = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #16a34a;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 12px;
  border: none;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardButton = styled(Button)`
  background: linear-gradient(135deg, #b8860b, #d4af37);
  color: #fff;
`;

const BankButton = styled(Button)`
  background: #0f172a;
  color: #fff;
`;

const VerifyButton = styled(Button)`
  background: #16a34a;
  color: #fff;
`;

const InfoBox = styled.div`
  margin-top: 25px;
  padding: 20px;
  background: #f1f5f9;
  border-radius: 15px;
  text-align: left;
`;

const Detail = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

/* ================= COMPONENT ================= */

export default function PaystackPaymentPage() {
  const [form, setForm] = useState(null);
  const [bankData, setBankData] = useState(null);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("donationForm");

    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  /* ================= CARD PAYMENT ================= */

  const payWithCard = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      email: form.email,
      amount: form.amount * 100,
      currency: "NGN",
      channels: ["card"],

      onSuccess: async (transaction) => {
        await addDoc(collection(db, "donations"), {
          ...form,
          reference: transaction.reference,
          method: "card",
          createdAt: new Date(),
        });

        Swal.fire("Success", "Payment successful!", "success");

        localStorage.removeItem("donationForm");
      },

      onCancel: () => {
        Swal.fire("Cancelled", "Payment cancelled", "info");
      },
    });
  };

  /* ================= BANK TRANSFER ================= */

  const startBankTransfer = async () => {
    Swal.fire({ text: "Generating account..." });
    Swal.showLoading();

    try {
      const res = await fetch("http://localhost:3000/api/create_transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log("BANK DATA:", data); // 👈 for debugging

      setBankData(data);

      localStorage.setItem("bankPayment", JSON.stringify(data));

      Swal.close();
    } catch (err) {
      Swal.fire("Error", "Could not generate account", "error");
    }
  };

  /* ================= VERIFY ================= */

  const verifyPayment = async () => {
    if (!bankData) return;

    setVerifying(true);

    try {
      const res = await fetch(`/api/verify/${bankData.reference}`);
      const data = await res.json();

      if (data.status === "success") {
        await addDoc(collection(db, "donations"), {
          ...form,
          reference: bankData.reference,
          method: "bank",
          createdAt: new Date(),
        });

        Swal.fire("Success", "Payment confirmed!", "success");

        localStorage.removeItem("bankPayment");
        setBankData(null);
      } else {
        Swal.fire("Pending", "Payment not yet received", "info");
      }
    } catch (err) {
      Swal.fire("Error", "Verification failed", "error");
    }

    setVerifying(false);
  };

  /* ================= AUTO CHECK ================= */

  useEffect(() => {
    if (!bankData) return;

    const interval = setInterval(async () => {
      const res = await fetch(`/api/verify/${bankData.reference}`);
      const data = await res.json();

      if (data.status === "success") {
        clearInterval(interval);
        verifyPayment();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [bankData]);

  if (!form) return <Page><p>Loading payment...</p></Page>;

  return (
    <Page>
      <Card>
        <Title>Complete Your Payment</Title>

        <Amount>₦{form.amount}</Amount>

        <CardButton onClick={payWithCard}>
          Pay with Card 💳
        </CardButton>

        <BankButton onClick={startBankTransfer}>
          Pay with Bank Transfer 🏦
        </BankButton>

        {/* ✅ SHOW ACCOUNT DETAILS */}
        {bankData && (
          <InfoBox>
            <h3>Bank Transfer Details</h3>

            <Detail><b>Bank:</b> {bankData.bank_name}</Detail>
            <Detail><b>Account Name:</b> {bankData.account_name}</Detail>
            <Detail><b>Account Number:</b> {bankData.account_number}</Detail>
            <Detail><b>Amount:</b> ₦{bankData.amount}</Detail>
            <Detail><b>Reference:</b> {bankData.reference}</Detail>

            <VerifyButton onClick={verifyPayment}>
              {verifying ? "Checking..." : "I Have Paid"}
            </VerifyButton>
          </InfoBox>
        )}
      </Card>
    </Page>
  );
}