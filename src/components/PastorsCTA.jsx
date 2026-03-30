import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// Animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Wrapper
const Section = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(135deg, rgb(158, 44, 112),
rgb(67,61,248));
  color: white;
  border-radius: 20px;
  margin: 40px 0;
`;

// Title
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

// Subtitle
const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
`;

// Button
const Button = styled.button`
  background: white;
  color: #2575fc;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background: #ff6ec58c;
    color: white;
    transform: scale(1.1);
  }
`;

export default function PastorsCTA() {
  const navigate = useNavigate();

  return (
    <Section>
      <Title>Meet Our Pastors</Title>
      <Text>
        Discover the amazing leaders guiding our church with faith, wisdom, and love.
      </Text>

      <Button onClick={() => navigate("/ministers")}>
        View All Pastors →
      </Button>
    </Section>
  );
}