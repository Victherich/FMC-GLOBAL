import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";
import f1 from "../Images/children1.png";
import f2 from "../Images/children2.png";
import f3 from "../Images/children3.png";
import f4 from "../Images/ushers1.png";
import f5 from "../Images/ushers2.png";
import f6 from "../Images/ushers3.png";
import f7 from "../Images/prayer1.png";
import f8 from "../Images/prayer2.png";
import f9 from "../Images/prayer3.png";
import f10 from "../Images/youth1.png";
import f11 from "../Images/youth2.png";
import f12 from "../Images/youth3.png";
import f13 from "../Images/music1.png";
import f14 from "../Images/music2.png";
import f15 from "../Images/music3.png";
import f16 from "../Images/event1.png";
import f17 from "../Images/event2.png";
import f18 from "../Images/event3.png";
import f19 from "../Images/tech1.png";
import f20 from "../Images/tech2.png";
import f21 from "../Images/tech3.png";
import f22 from "../Images/evang1.png";
import f23 from "../Images/evang2.png";
import f24 from "../Images/evang3.png";
import f25 from "../Images/outreach1.png";
import f26 from "../Images/outreach2.png";
import f27 from "../Images/outreach3.png";

/* ---------- SECTION ---------- */


const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
`;


const scrollLeft = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`;



const Section = styled.section`
  position:relative;
  height:80vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  overflow:hidden;
`;

/* ---------- BACKGROUND IMAGE ---------- */

const Background = styled.div`
  position:absolute;
  inset:0;

  background-image:url("/images/ministries-bg.jpg");
  background-size:cover;
  background-position:center;

  transform:scale(1.05);
  transition:transform 6s ease;

  ${Section}:hover &{
    transform:scale(1.15);
  }
`;

/* ---------- DARK OVERLAY ---------- */

const Overlay = styled.div`
  position:absolute;
  inset:0;

  background:linear-gradient(
    to bottom,
    rgba(0,0,0,0.6),
    rgba(0,18,51,0.85)
  );
`;

/* ---------- CONTENT ---------- */

const Content = styled.div`

  z-index:2;
  max-width:800px;
  padding:20px;
  color:white;
`;

/* ---------- TITLE ---------- */

const Title = styled.h1`
  font-size:3rem;
  margin-bottom:20px;

  line-height:1.2;

  span{
    color:#d4af37;
  }

  @media(max-width:768px){
    font-size:2.2rem;
  }
`;

/* ---------- TEXT ---------- */

const Text = styled.p`
  font-size:1.1rem;
  line-height:1.7;
  margin-bottom:30px;
  color:#e2e8f0;
`;

/* ---------- BUTTON ---------- */

const Button = styled.button`
  padding:14px 28px;
  border:none;
  border-radius:40px;

  font-size:1rem;
  font-weight:600;

  cursor:pointer;
   animation: ${float2} 3s ease-in-out infinite;

  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:black;
  z-index:2;
  margin-top:30px;
color:white;
  transition:.3s;

  &:hover{
    transform:scale(1.08);
    box-shadow:0 10px 30px rgba(212,175,55,0.5);
  }
`;

/* ---------- FLOATING CARDS ---------- */

const Cards = styled.div`
  position:absolute;
  bottom:40px;
  width:100%;
  overflow:hidden;
  z-index:2;

  @media(max-width:768px){
    display:none;
  }
`;

const MiniCard = styled.div`
  width:180px;
  height:120px;

  border-radius:15px;
  overflow:hidden;

  background:#000;
  cursor:pointer;

  box-shadow:0 10px 25px rgba(0,0,0,0.3);

  transition:.3s;

  &:hover{
    transform:translateY(-10px) scale(1.05);
  }

  img{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0.85;
  }
`;


const Track = styled.div`
  display:flex;
  gap:20px;
  width:max-content;

  animation:${scrollLeft} 20s linear infinite;
`;

/* ---------- COMPONENT ---------- */

export default function MinistriesHighlight(){

const navigate = useNavigate();

return(

<Section>

<Background/>
<Overlay/>

<Content>
<Zoom duration={4000} triggerOnce={false}>
<Title>
Discover Our <span>Ministries</span>
</Title>
</Zoom>

<Slide triggerOnce={false} duration={4000}>
<Text>
Experience a place where lives are transformed, faith is strengthened,
and purpose is discovered. Our ministries are designed to meet you
at every stage of life — from youth to families and beyond.
</Text>
</Slide>



</Content>

{/* Floating preview images */}
<Cards>

<Track>

{/* ORIGINAL SET */}

<MiniCard>
<img src={f1} alt="Youth Ministry"/>
</MiniCard>

<MiniCard>
<img src={f2} alt="Worship Ministry"/>
</MiniCard>

<MiniCard>
<img src={f3} alt="Outreach Ministry"/>
</MiniCard>

{/* DUPLICATE SET (for seamless loop) */}

<MiniCard>
<img src={f4} alt="Youth Ministry"/>
</MiniCard>

<MiniCard>
<img src={f5} alt="Worship Ministry"/>
</MiniCard>

<MiniCard>
<img src={f6} alt="Outreach Ministry"/>
</MiniCard>

{/* DUPLICATE SET (for seamless loop) */}

<MiniCard>
<img src={f7} alt="Youth Ministry"/>
</MiniCard>

<MiniCard>
<img src={f8} alt="Worship Ministry"/>
</MiniCard>

<MiniCard>
<img src={f9} alt="Outreach Ministry"/>
</MiniCard>

</Track>

</Cards>

<Button onClick={()=>navigate("/ministries")}>
Explore Our Ministries
</Button>

</Section>

)

}