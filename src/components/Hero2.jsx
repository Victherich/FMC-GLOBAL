
import React from 'react';
import styled, { keyframes } from 'styled-components';
import p1 from '../Images/P1.jpeg';
import p2 from '../Images/p2.jpeg';
import p3 from '../Images/p3.jpeg';
import p4 from '../Images/p4.jpeg';
import p5 from '../Images/p5.jpeg';
import p6 from '../Images/p6.jpeg';
import p7 from '../Images/p7.jpeg';
import p8 from '../Images/p8.jpeg';
import p9 from '../Images/p9.jpeg';
import p10 from '../Images/p10.jpeg';

import p11 from '../Images/p11.jpeg';
import p12 from '../Images/p12.jpeg';
import p14 from '../Images/p14.jpeg';
import p15 from '../Images/p15.jpeg';
import p16 from '../Images/p16.jpeg';
import p17 from '../Images/p17.jpeg';
import p18 from '../Images/p18.jpeg';





import bgImg from '../Images/galaxy.gif';
import modelImg from '../Images/logo.png';

const rotate = keyframes`
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
`;

const GlobalBackground = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  background-color: #d2d2d2;
  background-image:
    repeating-linear-gradient(to right, transparent 0 100px, #25283b22 100px 101px),
    repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px);
  position: relative;
  min-height: 100vh;


  &::before {
    position: absolute;
    // width: min(1400px, 90vw);
    width:100%;
    top: 0%;
    left: 0%;
    height: 100%;
    // transform: translateX(-50%);
    content: '';
    background-image: url(${bgImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size:cover;
    pointer-events: none;
    z-index: 0;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const Slider = styled.div`
  position: absolute;
  width: 200px;
  height: 250px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: ${rotate} 20s linear infinite;
  z-index: 2;
`;

const Item = styled.div`
  position: absolute;
  inset: 0;
  transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(1400px, 100vw);
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-family: 'ICA Rubrik', sans-serif;
  font-size: 16em;
  line-height: 1em;
  color: #25283b;
  position: relative;
  text-align:center;
  &::after {
    position: absolute;
    content: attr(data-content);
    inset: 0;
    -webkit-text-stroke: 2px #d2d2d2;
    color: transparent;
    z-index: 2;
  }

  @media(max-width:884px){
    display:none;
  }
`;

const Author = styled.div`
  font-family: 'Poppins', sans-serif;
  text-align: right;
  max-width: 200px;
`;
// 
const Model = styled.div`
//   background-image: url(${modelImg});
  width: 100%;
  height: 75vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: auto 130%;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 1;
`;

const Hero2 = () => {
  const images = [p1,  p3, p6, p7, p8, p9, p10,p12,p14,p15,p17,p18];
  return (
    <GlobalBackground>
      <Banner>
        <Slider style={{ '--quantity': images.length }}>
          {images.map((img, i) => (
            <Item key={i} style={{ '--position': i + 1 }}>
              <img src={img} alt={`p_${i + 1}`} />
            </Item>
          ))}
        </Slider>
        <Content>
          <Title data-content="FMC GLOBAL">FMC GLOBAL</Title>
          <Author>
            <h2></h2>
            <p><b></b></p>
          </Author>
          <Model />
        </Content>
      </Banner>
    </GlobalBackground>
  );
};

export default Hero2;