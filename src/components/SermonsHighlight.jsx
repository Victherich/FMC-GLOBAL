import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import {  Zoom } from "react-awesome-reveal";
import sermonImg from '../Images/p8.jpeg'

/* ---------- SECTION ---------- */

const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;



const Section = styled.section`
  padding:100px 20px;
  background:#001233;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;

  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

/* ---------- IMAGE SIDE ---------- */

const ImageWrapper = styled.div`
  position:relative;
  border-radius:20px;
  overflow:hidden;
  cursor:pointer;

  box-shadow:0 20px 50px rgba(0,0,0,0.5);

  &:hover img{
    transform:scale(1.08);
  }
`;

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  transition:0.5s;
`;

/* ---------- OVERLAY ---------- */

const Overlay = styled.div`
  position:absolute;
  inset:0;

  background:linear-gradient(
    to top,
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.2)
  );
`;

/* ---------- PLAY BUTTON ---------- */

const PlayButton = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  width:70px;
  height:70px;
  border-radius:50%;

  background:linear-gradient(135deg,#b8860b,#d4af37);

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:26px;
  color:black;

  box-shadow:0 10px 30px rgba(212,175,55,0.6);

  transition:0.3s;

  ${ImageWrapper}:hover &{
    transform:translate(-50%,-50%) scale(1.1);
  }
`;

/* ---------- TEXT SIDE ---------- */

const Content = styled.div`
  color:white;
`;

/* ---------- TITLE ---------- */

const Title = styled.h2`
  font-size:2.6rem;
  margin-bottom:20px;

  span{
    color:#d4af37;
  }
`;

/* ---------- TEXT ---------- */

const Text = styled.p`
  font-size:1.05rem;
  line-height:1.7;
  color:#cbd5e1;
  margin-bottom:25px;
`;

/* ---------- BUTTON ---------- */

const Button = styled.button`
  padding:14px 28px;
  border:none;
  border-radius:40px;

  font-weight:600;
  cursor:pointer;
animation: ${float2} 3s ease-in-out infinite;
  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:black;

  transition:0.3s;

  &:hover{
    transform:scale(1.08);
    box-shadow:0 10px 30px rgba(212,175,55,0.5);
  }
`;

/* ---------- COMPONENT ---------- */

export default function SermonsHighlight(){

const navigate = useNavigate();

return(

<Section>

<Container>

{/* IMAGE SIDE */}

<ImageWrapper onClick={()=>navigate("/sermons")}>

<Image src={sermonImg} alt="Sermons"/>

{/* <Overlay/> */}

{/* <PlayButton>▶</PlayButton> */}

</ImageWrapper>


{/* TEXT SIDE */}

<Content>
<Zoom duration={4000} triggerOnce={false}>
<Title>
Watch & Listen to <span>Life-Changing Messages</span>
</Title>
</Zoom>

<Zoom duration={4000} direction="right" triggerOnce={false}>
<Text>
Be inspired by powerful teachings, spirit-filled worship,
and life-transforming messages. Whether you missed a service
or want to grow deeper in faith, our sermons and media
are always available for you.
</Text>
</Zoom>

<Button onClick={()=>navigate("/sermons")}>
Explore Sermons & Media
</Button>

</Content>

</Container>

</Section>

)

}