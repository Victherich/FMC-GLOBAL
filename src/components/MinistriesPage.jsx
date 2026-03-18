import React, { useState, useEffect } from "react";
import MinistriesHero from "./MinistriesHero";
import ChurchMinistries from "./ChurchMinistries";
import OutreachPrograms from "./OutreachPrograms";
import styled, {keyframes} from "styled-components";
import cta1 from '../Images/cta1.png'
import { useNavigate } from "react-router-dom";

const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
`;

/* ---------------- CTA ---------------- */
const CTA = styled.section`
  padding: 120px 20px;
  background: url(${cta1});
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CTAButton = styled.button`
  padding: 16px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 40px;
  background: linear-gradient(135deg, #ffd700, #ff9a00);
  cursor: pointer;
  margin-top: 25px;
  transition: 0.3s;
  animation: ${float2} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

/* ---------------- Outreach Data ---------------- */
const outreachPrograms = [
  {
    title: "Feeding the Multitudes",
    text: "Providing free weekly bakery supplies to communities in Austell, Powder Springs, Mableton and Marietta.",
  },
  {
    title: "Hope to Cope Youth Program",
    text: "After-school and summer program keeping youth away from negative influences through mentoring, homework help and arts.",
  },
  {
    title: "Mother & Baby Outreach",
    text: "Supporting mothers with baby clothing, diapers, blankets and essential newborn items.",
  },
  {
    title: "Clothing Ministry",
    text: "Helping the homeless and underprivileged with coats, blankets and winter clothing.",
  },
];

export default function MinistriesPage() {
const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <MinistriesHero />

      {/* CHURCH MINISTRIES */}
      <ChurchMinistries />

      {/* OUTREACH PROGRAMS */}
      <OutreachPrograms programs={outreachPrograms} />

      {/* CTA */}
      <CTA>
        <CTAContent>
          <h2>Join a Ministry Today</h2>
          <p>
            Discover your purpose by serving God and others through one of our
            ministries.
          </p>
          <CTAButton onClick={()=>navigate('/contact')}>Get Involved</CTAButton>
        </CTAContent>
      </CTA>
    </div>
  );
}