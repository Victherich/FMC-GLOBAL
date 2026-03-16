
import React from 'react';
import styled, { keyframes } from 'styled-components';
import dragon1 from '../Images/f1.png';
import dragon2 from '../Images/f2.png';
import dragon3 from '../Images/f3.png';
import dragon4 from '../Images/f4.png';
import dragon5 from '../Images/f5.png';
import dragon6 from '../Images/fp6.png';
import dragon7 from '../Images/f1.png';
import dragon8 from '../Images/f2.png';
import dragon9 from '../Images/f3.png';
import dragon10 from '../Images/f4.png';
import bgImg from '../Images/galaxy.gif';
import modelImg from '../Images/ELogo.png';

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
  const images = [dragon1, dragon2, dragon3, dragon4, dragon5, dragon6, dragon7, dragon8, dragon9, dragon10];
  return (
    <GlobalBackground>
      <Banner>
        <Slider style={{ '--quantity': images.length }}>
          {images.map((img, i) => (
            <Item key={i} style={{ '--position': i + 1 }}>
              <img src={img} alt={`dragon_${i + 1}`} />
            </Item>
          ))}
        </Slider>
        <Content>
          <Title data-content="ELEXDON HOST">ELEXDON HOST</Title>
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