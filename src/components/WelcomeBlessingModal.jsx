import React, { useEffect, useState } from "react";
import { Flip, Slide, Zoom } from "react-awesome-reveal";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
  color: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  color: #f5d76e;
`;

const Scripture = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #f5d76e, #f39c12);
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function WelcomeBlessingModal() {
  const [visible, setVisible] = useState(true);
  const [scripture, setScripture] = useState("");

  const scriptures = [
    "The Lord bless you and keep you; the Lord make His face shine upon you. – Numbers 6:24-26",
    "The Lord is my shepherd; I shall not want. – Psalm 23:1",
    "I can do all things through Christ who strengthens me. – Philippians 4:13",
    "Surely goodness and mercy shall follow me all the days of my life. – Psalm 23:6",
    "The Lord will fight for you; you need only to be still. – Exodus 14:14"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * scriptures.length);
    setScripture(scriptures[randomIndex]);
  }, []);

  if (!visible) return null;

  return (
    <Overlay>
      <Modal>
        <Flip duration={4000} triggerOnce={false}>
        <Title>God's Word for you</Title>
        </Flip>
        <Zoom duration={4000} triggerOnce={false}>
        <Scripture>{scripture}</Scripture>
    </Zoom>
    <Slide duration={4000} triggerOnce={false}>
        <Button onClick={() => setVisible(false)}>AMEN</Button>
        </Slide>
      </Modal>
    </Overlay>
  );
}
