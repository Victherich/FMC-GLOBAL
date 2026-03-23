import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path




const Container = styled.div`
  padding: 2rem;
  background: #f5f7fb;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

const Label = styled.span`
  font-weight: 600;
  color: #555;
`;

const Value = styled.span`
  color: #222;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  background: ${props => props.type === "paypal" ? "#0070ba" : "#00c3f7"};
  color: white;
`;

const Empty = styled.p`
  text-align: center;
  margin-top: 3rem;
  color: #888;
`;

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const q = query(collection(db, "donations"), orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setPayments(data);
    setLoading(false);
  }, (error) => {
    console.error("Error fetching payments:", error);
    setLoading(false);
  });

  // cleanup listener when component unmounts
  return () => unsubscribe();
}, []);




  if (loading) return <Container><Title>Loading payments...</Title></Container>;

  return (
    <Container>
      <Title>Payment History</Title>

      {payments.length === 0 ? (
        <Empty>No payments found.</Empty>
      ) : (
        payments.map(payment => {
          const isPaypal = !!payment.paymentDetails;

          return (
            <Card key={payment.id}>
              <Row>
                <Label>Payment Method:</Label>
                <Badge type={isPaypal ? "paypal" : "paystack"}>
                  {isPaypal ? "PayPal" : "Paystack"}
                </Badge>
              </Row>

              {payment.name && (
                <Row>
                  <Label>Name:</Label>
                  <Value>{payment.name}</Value>
                </Row>
              )}

              {payment.email && (
                <Row>
                  <Label>Email:</Label>
                  <Value>{payment.email}</Value>
                </Row>
              )}

              {payment.amount && (
                <Row>
                  <Label>Amount:</Label>
                  <Value>{payment.currency} {payment.amount}</Value>
                </Row>
              )}

              {isPaypal && payment.paymentDetails?.id && (
                <Row>
                  <Label>Transaction ID:</Label>
                  <Value>{payment.paymentDetails.id}</Value>
                </Row>
              )}

              {!isPaypal && payment.reference && (
                <Row>
                  <Label>Reference:</Label>
                  <Value>{payment.reference}</Value>
                </Row>
              )}

              <Row>
                <Label>Date:</Label>
                <Value>
                  {payment.createdAt?.toDate
                    ? payment.createdAt.toDate().toLocaleString()
                    : new Date(payment.createdAt).toLocaleString()}
                </Value>
              </Row>
            </Card>
          );
        })
      )}
    </Container>
  );
};

export default PaymentHistory;
