import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";


const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;

/* ---------- SECTION ---------- */
const Section = styled.section`
  padding:100px 20px;
  background-image: url("/images/cta-bg.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

/* ---------- OVERLAY ---------- */
const Overlay = styled.div`
  position: absolute;
  inset:0;
  background: rgba(248,250,252,0.85);
`;

/* ---------- CONTAINER ---------- */
const Container = styled.div`
  position: relative;
  z-index:2;
  max-width:900px;
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:25px;
`;

/* ---------- HEADLINE ---------- */
const Headline = styled.h2`
  font-size:2.6rem;
  color:#001233;
  font-weight:700;

  span {
    color:#b8860b;
  }

  @media(max-width:768px){
    font-size:2rem;
  }
`;

/* ---------- TEXT ---------- */
const Text = styled.p`
  color:#475569;
  font-size:1.05rem;
  line-height:1.7;
`;

/* ---------- BUTTON ---------- */
const Button = styled.button`
  padding:16px 36px;
  border:none;
  border-radius:40px;
  font-weight:600;
  cursor:pointer;
  font-size:1rem;
  background: linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  transition:.3s;
  animation: ${float2} 3s ease-in-out infinite;

  &:hover{
    transform:scale(1.05);
    box-shadow:0 10px 25px rgba(184,134,11,0.3);
  }
`;

/* ---------- COMPONENT ---------- */
export default function ContactCTA(){

  const navigate = useNavigate();

  return(
    <Section>
      <Overlay/>
      <Container>
        <Zoom triggerOnce={false} duration={4000}>
        <Headline>
          Need Guidance or Prayer? <span>Reach Out to Us!</span>
        </Headline>
        </Zoom>
        <Text>
          Our pastoral team is here to listen, pray, and help you in any way possible. 
          Don’t hesitate to contact us for support, questions, or spiritual guidance.
        </Text>
        <Button onClick={()=>navigate("/contact")}>
          Contact Us Today
        </Button>
      </Container>
    </Section>
  )
}