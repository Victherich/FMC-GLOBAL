import React from "react";
import styled, { keyframes } from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";
import palmbg from '../Images/palmbg2.gif';

/* ---------- ANIMATIONS ---------- */
const pulse = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.02); }
100% { transform: scale(1); }
`;

/* ---------- SECTION ---------- */
const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  background-image: url(${palmbg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 🔥 makes it stay while scrolling */
`;

/* ---------- OVERLAY ---------- */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.5); /* light overlay */
  backdrop-filter: blur(2px);
`;

/* ---------- CONTAINER ---------- */
const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
`;

/* ---------- CARD ---------- */
const Card = styled.div`
//   background: white;
   background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  transition: 0.3s;
  animation: ${pulse} 6s ease-in-out infinite;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(184,134,11,0.25);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #b8860b;
  margin-bottom: 10px;
//    text-shadow: 0 5px 15px rgba(0,0,0,1);
`;

const CardText = styled.p`
  color: #000;
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-line;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.div`
  font-weight: 600;
  color: #001233;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ServiceText = styled.p`
  font-size: 0.9rem;
  color: #444;
  white-space: pre-line;
`;

/* ---------- SECTION TITLE ---------- */
const SectionTitle = styled.h2`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 2.7rem;
  margin-bottom: 70px;
  color: #001233;
//    text-shadow: 0 5px 15px rgba(0,0,0,1);

  span {
    color: #b8860b;
  }
`;

/* ---------- COMPONENT ---------- */
export default function InfoLandingSection() {

  const locations = [
    {
      title: "USA - Georgia",
      text: "3771 Floyd Rd, Marietta GA 30060\nTel- 770 310 3539.",
      service: "Sunday 10am\nWednesday 6pm",
    },
    {
      title: "USA - Texas",
      text: "11160 Southwest Freeway Houston TX 77031",
      service: "Sunday 10am\nWednesday 6pm",
    },
    {
      title: "Lagos Headquarters",
      text: "Solution House\n1 Opa Aro Close\nOff Tunji Adebayo street, fagba Lagos\n0703 643 4618",
      service: "Sunday 9am\nWednesday 6pm",
    },
    {
      title: "Miracle House",
      text: "3 Sholanke street ifako Agege Lagos\n0703 643 4618",
      service: "Sunday 9am\nWednesday 6pm",
    }
  ];

  return (
    <Section>
      <Overlay />

      <SectionTitle>
        Our <span>Locations & Service Times</span>
      </SectionTitle>

      <Container>
        {locations.map((loc, i) => (
          <Zoom key={i} duration={2000} delay={i * 150}>
            <Card>
              <CardTitle>{loc.title}</CardTitle>

              <CardText>{loc.text}</CardText>

              <ServiceTitle>Service Times</ServiceTitle>
              <ServiceText>{loc.service}</ServiceText>

              <ServiceTitle>Special Programs</ServiceTitle>
              <ServiceText>
                Mountain Moving Miracle Service 9am (Second Saturday)
                {"\n"}
                Solution Night 3rd Friday 10pm (Quarterly)
              </ServiceText>
            </Card>
          </Zoom>
        ))}
      </Container>
    </Section>
  );
}