import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

/* ---------- SECTION ---------- */

const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;


const Section = styled.section`
  padding:120px 20px;
  background:#f8fafc;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

/* ---------- HERO ---------- */

const Hero = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
  margin-bottom:80px;

  @media(max-width:900px){
    grid-template-columns:1fr;
    text-align:center;
  }
`;

/* ---------- IMAGE ---------- */

const Image = styled.img`
  width:100%;
  border-radius:20px;
  box-shadow:0 20px 50px rgba(0,0,0,0.15);
`;

/* ---------- CONTENT ---------- */

const Content = styled.div``;

/* ---------- TITLE ---------- */

const Title = styled.h2`
  font-size:2.6rem;
  margin-bottom:20px;
  color:#001233;

  span{
    color:#b8860b;
  }
`;

/* ---------- TEXT ---------- */

const Text = styled.p`
  font-size:1.05rem;
  line-height:1.7;
  color:#475569;
  margin-bottom:30px;
`;

/* ---------- FEATURED ---------- */

const Featured = styled.div`
  background:white;
  padding:25px;
  border-radius:15px;

  border-left:4px solid #b8860b;

  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  margin-bottom:30px;
`;

const Quote = styled.p`
  font-style:italic;
  color:#334155;
  margin-bottom:10px;
`;

const Author = styled.div`
  color:#b8860b;
  font-weight:600;
  font-size:0.9rem;
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
  color:white;

  transition:.3s;

  &:hover{
    transform:scale(1.08);
    box-shadow:0 10px 25px rgba(184,134,11,0.3);
  }
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
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
  background:white;
  padding:25px;
  border-radius:18px;

  box-shadow:0 10px 30px rgba(0,0,0,0.08);

  transition:.35s;

  &:hover{
    transform:translateY(-10px);
    box-shadow:0 20px 50px rgba(0,0,0,0.15);
  }
`;

/* ---------- COMPONENT ---------- */

export default function TestimoniesHighlight(){

const navigate = useNavigate();

return(

<Section>

<Container>

{/* ---------- HERO ---------- */}

<Hero>

<Image src="/images/testimony-main.jpg" alt="Testimonies"/>

<Content>
<Zoom triggerOnce={false} duration={4000}>
<Title>
Real Stories. <span>Real Miracles.</span>
</Title>
</Zoom>
<Slide direction="right" triggerOnce={false} duration={4000}>
<Text>
God is still transforming lives every day. These testimonies
are living proof of His goodness, faithfulness, and power.
</Text>
</Slide>

<Featured>

<Quote>
“I came broken and without direction, but through God's Word
and prayers, my life was completely transformed. Today I walk
in peace and purpose.”
</Quote>

<Author>— Grace A.</Author>

</Featured>

<Button onClick={()=>navigate("/testimonials")}>
Read More Testimonies
</Button>

</Content>

</Hero>


{/* ---------- GRID ---------- */}

<Grid>

<Card>
<Quote>
“God healed me from a long-term illness doctors said was impossible.
Today I am completely restored.”
</Quote>
<Author>— Daniel K.</Author>
</Card>

<Card>
<Quote>
“My finances were restored after years of struggle.
God truly made a way.”
</Quote>
<Author>— Esther M.</Author>
</Card>

<Card>
<Quote>
“My family is now united again. God restored love in our home.”
</Quote>
<Author>— The Johnsons</Author>
</Card>

</Grid>

</Container>

</Section>

)

}