import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 60vh;
padding:20px 10px;
  background: linear-gradient(135deg, #0A3CFF, #00c3f7);
`;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//   max-width: 400px;
  width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #0A3CFF;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: #0A3CFF;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #072ed1;
    transform: translateY(-2px);
  }
`;

const LiveStreamButton = () => {
  const handleJoin = () => {
    window.open("https://meet.google.com/gey-hqdv-map", "_blank");
  };

  return (
    <Container>
      <Card>
        <Title>Enter Live Stream</Title>
        <Description>
          Click the button below to enter the live session.
        </Description>

        <Button onClick={handleJoin}>
          🚀 Join Now
        </Button>
      </Card>
    </Container>
  );
};

export default LiveStreamButton;