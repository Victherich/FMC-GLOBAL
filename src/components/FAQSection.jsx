import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

/* ---------- SECTION ---------- */
const Section = styled.section`
  padding:80px 20px;
  background:#f8fafc;
  max-width:1200px;
  margin:auto;
`;

/* ---------- HEADER ---------- */
const Header = styled.div`
  text-align:center;
  margin-bottom:50px;
`;

const Title = styled.h2`
  font-size:2.4rem;
  color:#001233;

  span {
    color:#b8860b;
  }
`;

const Subtitle = styled.p`
  font-size:1rem;
  color:#475569;
  margin-top:10px;
`;

/* ---------- ACCORDION ---------- */
const AccordionItem = styled.div`
  margin-bottom:15px;
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 8px 20px rgba(0,0,0,0.05);
  background:white;
`;

const Question = styled.div`
  padding:20px 25px;
  cursor:pointer;
  font-weight:600;
  color:#001233;
  display:flex;
  justify-content:space-between;
  align-items:center;
  transition:background .3s;

  &:hover{
    background:rgba(184,134,11,0.05);
  }
`;

const Answer = styled.div`
  padding:0 25px;
  color:#475569;
  line-height:1.6;
  max-height: ${props => props.height}px;
  overflow:hidden;
  transition:max-height 0.35s ease;
`;

const AnswerContent = styled.div`
  padding:15px 0;
`;

const ToggleIcon = styled.span`
  font-size:1.2rem;
  color:#b8860b;
`;

/* ---------- COMPONENT ---------- */
export default function FAQSection(){

  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const faqs = [
    {
      question:"What are your service times?",
      answer:`Sunday Worship: 9:00 AM & 11:00 AM
Midweek Service: Wednesday 6:00 PM
Youth Fellowship: Friday 5:00 PM`
    },
    {
      question:"Where is the church located?",
      answer:`Faith and Miracle Center Church
Lagos, Nigeria`
    },
    {
      question:"How can I get involved in ministries?",
      answer:`You can join our various ministries including Youth, Outreach, Music, Media, and Prayer by visiting the ministries page or contacting us directly.`
    },
    {
      question:"How can I give tithes or donations?",
      answer:`We accept tithes and donations online through our donations page or in-person during services.`
    },
    {
      question:"Do you offer counseling or prayer support?",
      answer:`Yes, our pastoral team provides counseling and prayer support. You can request a session by contacting us through the contact page or visiting the church office.`
    }
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return(
    <Section>
      <Header>
        <Title>Frequently Asked <span>Questions</span></Title>
        <Subtitle>Find answers to common questions about our church, services, and community.</Subtitle>
      </Header>

      {faqs.map((faq,index)=>(
        <AccordionItem key={index}>
          <Question onClick={()=>toggleFAQ(index)}>
            {faq.question}
            <ToggleIcon>{openIndex === index ? "−" : "+"}</ToggleIcon>
          </Question>
          <Answer
            ref={el => refs.current[index] = el}
            height={openIndex === index ? refs.current[index]?.scrollHeight || 0 : 0}
          >
            <AnswerContent>
              {faq.answer.split("\n").map((line,i)=>(
                <p key={i}>{line}</p>
              ))}
            </AnswerContent>
          </Answer>
        </AccordionItem>
      ))}
    </Section>
  )
}