import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import {Zoom, Slide} from 'react-awesome-reveal'



const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding:120px 20px;
  background:#f8fafc;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

/* ---------- HEADER ---------- */

const Header = styled.div`
  text-align:center;
  margin-bottom:70px;
`;

const Title = styled.h2`
  font-size:2.6rem;
  color:#001233;
  margin-bottom:10px;

  span{
    color:#b8860b;
  }
`;

const Subtitle = styled.p`
  color:#475569;
  font-size:1rem;
`;

/* ---------- FEATURED ---------- */

const Featured = styled.div`
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:50px;
  align-items:center;
  margin-bottom:80px;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

const Image = styled.img`
  width:100%;
  border-radius:20px;
  box-shadow:0 20px 50px rgba(0,0,0,0.15);
`;

/* ---------- CONTENT ---------- */

const Content = styled.div``;

const MessageTitle = styled.h3`
  font-size:1.8rem;
  color:#0f172a;
  margin-bottom:15px;
`;

const MessageText = styled.p`
  color:#475569;
  line-height:1.7;
  margin-bottom:20px;
`;

/* ---------- AUTHOR ---------- */

const Author = styled.div`
  font-weight:600;
  color:#b8860b;
  margin-bottom:20px;
`;

/* ---------- BUTTON ---------- */

const Button = styled.button`
  padding:12px 26px;
  border:none;
  border-radius:30px;

  font-weight:600;
  cursor:pointer;

  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
animation: ${float2} 3s ease-in-out infinite;
  transition:.3s;

  &:hover{
    transform:scale(1.05);
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
  cursor:pointer;

  &:hover{
    transform:translateY(-8px);
    box-shadow:0 20px 50px rgba(0,0,0,0.15);
  }
`;

const CardTitle = styled.h4`
  font-size:1.2rem;
  color:#0f172a;
  margin-bottom:10px;
`;

const CardText = styled.p`
  font-size:0.9rem;
  color:#475569;
  line-height:1.6;
  margin-bottom:10px;
`;

const CardAuthor = styled.div`
  font-size:0.85rem;
  color:#b8860b;
`;

/* ---------- COMPONENT ---------- */

export default function InspirationalHighlight(){

const navigate = useNavigate();

return(

<Section>

<Container>

{/* ---------- HEADER ---------- */}

<Header>
<Zoom triggerOnce={false} duration={4000}>
<Title>
Inspirational <span>Messages</span>
</Title>
</Zoom>

<Slide direction="right" duration={4000} triggerOnce={false}>
<Subtitle>
Be uplifted, encouraged, and strengthened through powerful
inspirationals from our Pastor.
</Subtitle>
</Slide>

</Header>


{/* ---------- FEATURED MESSAGE ---------- */}

<Featured>

<Image src="/images/pastor.jpg" alt="Pastor"/>

<Content>

<MessageTitle>
Walking in Faith, Not by Sight
</MessageTitle>

<MessageText>
In moments of uncertainty, God calls us to trust Him completely.
Faith is not about what we see, but about believing that He is
working behind the scenes for our good.
</MessageText>

<Author>— Pastor John Doe</Author>

<Button>
Read Full Message
</Button>

</Content>

</Featured>


{/* ---------- OTHER MESSAGES ---------- */}

<Grid>

<Card>
<Zoom triggerOnce={false} duration={4000}>
<CardTitle>Trusting God in Difficult Times</CardTitle>
</Zoom>
<CardText>
Even in the storms of life, God remains faithful. Learn how to
stand firm and trust Him through every challenge.
</CardText>

<CardAuthor>— Pastor John Doe</CardAuthor>

</Card>


<Card>
<Zoom triggerOnce={false} duration={4000}>
<CardTitle>The Power of Prayer</CardTitle>
</Zoom>

<CardText>
Prayer is a direct connection to God. Discover how a consistent
prayer life can transform everything around you.
</CardText>

<CardAuthor>— Pastor John Doe</CardAuthor>

</Card>


<Card>

<Zoom triggerOnce={false} duration={4000}>
<CardTitle>Living a Purposeful Life</CardTitle>
</Zoom>
<CardText>
You were created with purpose. Step into your calling and begin
to live the life God has designed for you.
</CardText>

<CardAuthor>— Pastor John Doe</CardAuthor>

</Card>

</Grid>

</Container>

</Section>

)

}