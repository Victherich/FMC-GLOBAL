import React from "react";
import styled from "styled-components";
import contactus from '../Images/contactus.png'
import { Zoom,Slide } from "react-awesome-reveal";
import FAQSection from "./FAQSection";

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding:120px 20px;
  background-image: url(${contactus});
  background-size: cover;
  background-position: center;
  position: relative;
`;

/* ---------- OVERLAY ---------- */

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(248, 250, 252, 0.7); /* soft light overlay for readability */
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media(max-width:900px){
    grid-template-columns: 1fr;
  }
`;

/* ---------- HEADER ---------- */

const Header = styled.div`
  grid-column: span 2;
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size:2.6rem;
  color:#001233;
  margin-bottom:10px;
    text-shadow: 0 5px 15px rgba(255,255,255,1);
  span {
    color:#b8860b;
  }
`;

const Subtitle = styled.p`
  color:#111;
  font-size:1rem;
    text-shadow: 0 5px 15px rgba(0,0,0,1);
`;

/* ---------- FORM ---------- */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap:20px;
`;

const Input = styled.input`
  padding:12px 16px;
  border-radius:8px;
  border:1px solid #cbd5e1;
  font-size:1rem;
  outline:none;

  &:focus {
    border-color:#b8860b;
    box-shadow:0 0 10px rgba(184,134,11,0.2);
  }
`;

const Textarea = styled.textarea`
  padding:12px 16px;
  border-radius:8px;
  border:1px solid #cbd5e1;
  font-size:1rem;
  outline:none;
  min-height:150px;

  &:focus {
    border-color:#b8860b;
    box-shadow:0 0 10px rgba(184,134,11,0.2);
  }
`;

const Button = styled.button`
  padding:14px 30px;
  border:none;
  border-radius:40px;
  font-weight:600;
  cursor:pointer;
  background: linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  transition:.3s;

  &:hover{
    transform:scale(1.05);
    box-shadow:0 10px 25px rgba(184,134,11,0.3);
  }
`;

/* ---------- CONTACT INFO ---------- */

const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`;

const InfoItem = styled.div`
  display:flex;
  flex-direction:column;
  color:#111;
`;

const Label = styled.span`
  font-weight:600;
  color:#001233;
  margin-bottom:5px;
`;

const Value = styled.span`
  color:#111;
  font-size:0.95rem;
`;

/* ---------- COMPONENT ---------- */

export default function ContactSection(){

  return(
    <>
      <Section>
      <Overlay/>
      <Container>

        {/* ---------- HEADER ---------- */}
        <Header>
            <Zoom triggerOnce={false} duration={4000}>
          <Title>Contact <span>Us</span></Title>
          </Zoom>
          <Slide duration={4000} triggerOnce={false}>
          <Subtitle>We would love to hear from you! Reach out to us for any inquiries, prayer requests, or support.</Subtitle>
        </Slide>
        </Header>

        {/* ---------- FORM ---------- */}
        <Form>
          <Input type="text" placeholder="Your Name" required/>
          <Input type="email" placeholder="Your Email" required/>
          <Input type="text" placeholder="Subject" required/>
          <Textarea placeholder="Your Message" required/>
          <Button type="submit">Send Message</Button>
        </Form>

        {/* ---------- CONTACT INFO ---------- */}
        <Slide duration={4000} triggerOnce={false} direction="right">
        <Info>
          <InfoItem>
            <Label>Address:</Label>
            <Value>Faith and Miracle Center Church, Lagos, Nigeria</Value>
          </InfoItem>
          <InfoItem>
            <Label>Email:</Label>
            <Value>info@fmcchurch.org</Value>
          </InfoItem>
          <InfoItem>
            <Label>Phone:</Label>
            <Value>+234 000 000 000</Value>
          </InfoItem>
          <InfoItem>
            <Label>Office Hours:</Label>
            <Value>Mon - Fri: 9:00 AM - 5:00 PM</Value>
          </InfoItem>
        </Info>
        </Slide>

      </Container>

    </Section>
          <FAQSection/>
    </>
  
  )
}