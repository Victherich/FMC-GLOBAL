import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import give from '../Images/donation2.png'

/* ---------- SECTION ---------- */


const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;

const Section = styled.section`
  padding:110px 20px;
  background:linear-gradient(135deg,#001233,#002366);
  color:white;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

/* ---------- TOP (SPLIT) ---------- */

const Top = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;

  @media(max-width:900px){
    grid-template-columns:1fr;
    text-align:center;
  }
`;

/* ---------- IMAGE ---------- */

const Image = styled.img`
  width:100%;
  border-radius:20px;
  box-shadow:0 25px 60px rgba(0,0,0,0.5);
`;

/* ---------- CONTENT ---------- */

const Content = styled.div``;

/* ---------- TITLE ---------- */

const Title = styled.h2`
  font-size:2.7rem;
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
  margin-bottom:30px;
`;

/* ---------- BUTTON ---------- */

const Button = styled.button`
  padding:14px 30px;
  border:none;
  border-radius:40px;

  font-weight:600;
  cursor:pointer;
animation: ${float2} 3s ease-in-out infinite;
  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:black;

  transition:.3s;

  &:hover{
    transform:scale(1.08);
    box-shadow:0 10px 30px rgba(212,175,55,0.5);
  }
`;

/* ---------- OPTIONS ---------- */

const Options = styled.div`
  margin-top:70px;

  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;

  @media(max-width:900px){
    grid-template-columns:repeat(2,1fr);
  }

  @media(max-width:600px){
    grid-template-columns:1fr;
  }
`;

/* ---------- CARD ---------- */

const Card = styled.div`
  background:rgba(255,255,255,0.05);
  padding:30px;
  border-radius:18px;

  backdrop-filter:blur(10px);

  border:1px solid rgba(255,255,255,0.1);

  transition:.35s;
  cursor:pointer;

  &:hover{
    transform:translateY(-10px);
    border-color:#d4af37;
    box-shadow:0 20px 40px rgba(0,0,0,0.4);
  }
`;

/* ---------- CARD CONTENT ---------- */

const CardTitle = styled.h3`
  margin-bottom:10px;
`;

const CardText = styled.p`
  font-size:0.95rem;
  color:#cbd5e1;
`;

/* ---------- IMPACT ---------- */

const Impact = styled.div`
  margin-top:80px;
  text-align:center;
`;

const ImpactGrid = styled.div`
  margin-top:30px;

  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;

  @media(max-width:768px){
    grid-template-columns:1fr;
  }
`;

const Stat = styled.div`
  font-size:2rem;
  font-weight:bold;
  color:#d4af37;
`;

const StatText = styled.p`
  font-size:0.9rem;
  color:#cbd5e1;
`;

/* ---------- COMPONENT ---------- */

export default function DonationHighlight(){

const navigate = useNavigate();

return(

<Section>

<Container>

{/* ---------- TOP HERO ---------- */}

<Top>

<Image src={give} alt="Giving" />

<Content>
<Zoom duration={4000} triggerOnce={false} >
<Title>
Give & <span>Make an Impact</span>
</Title>
</Zoom>

<Zoom duration={4000} direction="right" triggerOnce={false}>
<Text>
Your generosity fuels ministry, transforms lives,
and brings hope to communities. Every seed you sow
helps expand God's work and touch lives around the world.
</Text>
</Zoom>

<Button onClick={()=>navigate("/donations")}>
Give Now
</Button>

</Content>

</Top>


{/* ---------- GIVING OPTIONS ---------- */}

<Options>

<Card onClick={()=>navigate("/donations")}>
<CardTitle>🙏 Tithes</CardTitle>
<CardText>
Honor God with your increase and remain faithful in stewardship.
</CardText>
</Card>

<Card onClick={()=>navigate("/donations")}>
<CardTitle>💝 Offering</CardTitle>
<CardText>
Give freely and cheerfully to support the work of the ministry.
</CardText>
</Card>

<Card onClick={()=>navigate("/donations")}>
<CardTitle>🌍 Partnership</CardTitle>
<CardText>
Join hands with us to impact lives globally through missions.
</CardText>
</Card>

</Options>


{/* ---------- IMPACT ---------- */}

<Impact>
<Zoom duration={4000} triggerOnce={false}>
    <Title>
Your Giving <span>In Action</span>
</Title>
</Zoom>

<ImpactGrid>

<div>
<Stat>10,000+</Stat>
<StatText>Lives Reached</StatText>
</div>

<div>
<Stat>500+</Stat>
<StatText>Families Supported</StatText>
</div>

<div>
<Stat>50+</Stat>
<StatText>Outreach Programs</StatText>
</div>

</ImpactGrid>

</Impact>

</Container>

</Section>

)

}