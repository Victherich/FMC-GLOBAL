import React from "react";
import styled from "styled-components";
import contactus from '../Images/contactus.png'
import { Zoom,Slide } from "react-awesome-reveal";
import FAQSection from "./FAQSection";
import { useState } from "react";
import Swal from "sweetalert2";

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

// const InfoItem = styled.div`
//   display:flex;
//   flex-direction:column;
//   color:#111;
// `;

const InfoItem = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  padding:10px 0;
  border-bottom:1px solid rgba(0,0,0,0.1);
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
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();
  Swal.fire({ text: "Please wait..." });
  Swal.showLoading();

  const payload = {
    ...formData,
    recipientEmail: "faithandmiraclecenter@gmail.com",
    websiteName: "FMC GLOBAL"
  };

  console.log(payload)

  try {
    // const response = await fetch("http://localhost:3000/api/contact", {
          const response = await fetch("https://backend-mailer-1.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({ text: "✅ Your message has been sent successfully and we shall get back to you soon!", icon:"success" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      Swal.fire({ text: `❌ Error: ${data.error}` });
    }
  } catch (error) {
    Swal.fire({ text: "❌ Network error, please try again." });
    console.error("Error submitting form:", error);
  }
};




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
        <Form onSubmit={handleSubmit}>
        <Input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

<Input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
/>

<Input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

<Textarea
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
/>
          <Button type="submit">Send Message</Button>
        </Form>

        {/* ---------- CONTACT INFO ---------- */}
     <Slide duration={4000} triggerOnce={false} direction="right">
<Info>

  {/* ---------- EMAILS ---------- */}
  <InfoItem>
    <Label>Emails:</Label>
    <Value>info@yournewdomain.com</Value>
    <Value>support@yournewdomain.com</Value>
    <Value>prayer@yournewdomain.com</Value>
  </InfoItem>

  {/* ---------- USA LOCATIONS ---------- */}
  <InfoItem>
    <Label>USA - Georgia:</Label>
    <Value>3771 Floyd Rd, Marietta GA 30060</Value>
    <Value>Tel: 770 310 3539</Value>
  </InfoItem>

  <InfoItem>
    <Label>USA - Texas:</Label>
    <Value>11160 Southwest Freeway, Houston TX 77031</Value>
  </InfoItem>

  {/* ---------- LAGOS LOCATIONS ---------- */}
  <InfoItem>
    <Label>Lagos Headquarters:</Label>
    <Value>Solution House</Value>
    <Value>1 Opa Aro Close</Value>
    <Value>Off Tunji Adebayo Street, Fagba, Lagos</Value>
    <Value>0703 643 4618</Value>
  </InfoItem>

  <InfoItem>
    <Label>Miracle House:</Label>
    <Value>3 Sholanke Street, Ifako Agege, Lagos</Value>
    <Value>0703 643 4618</Value>
  </InfoItem>

  {/* ---------- SERVICE TIMES ---------- */}
  <InfoItem>
    <Label>Service Times (USA):</Label>
    <Value>Sunday: 10:00 AM</Value>
    <Value>Wednesday: 6:00 PM</Value>
  </InfoItem>

  <InfoItem>
    <Label>Service Times (Lagos):</Label>
    <Value>Sunday: 9:00 AM</Value>
    <Value>Wednesday: 6:00 PM</Value>
  </InfoItem>

  {/* ---------- SPECIAL PROGRAMS ---------- */}
  <InfoItem>
    <Label>Special Programs:</Label>
    <Value>Second Saturday: Mountain Moving Miracle Service – 9:00 AM</Value>
    <Value>Quarterly: Solution Night – 3rd Friday, 10:00 PM</Value>
  </InfoItem>

</Info>
</Slide>

      </Container>

    </Section>
          <FAQSection/>
    </>
  
  )
}