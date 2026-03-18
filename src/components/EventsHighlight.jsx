import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding:100px 20px;
  background:#f8fafc;
`;

const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;

/* ---------- HEADER ---------- */

const Header = styled.div`
  text-align:center;
  margin-bottom:60px;
`;

const Title = styled.h2`
  font-size:2.6rem;
  margin-bottom:15px;
  color:#001233;

  span{
    color:#b8860b;
  }
`;

const Subtitle = styled.p`
  color:#475569;
  font-size:1rem;
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
  max-width:1200px;
  margin:auto;

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
  border-radius:18px;
  overflow:hidden;

  box-shadow:0 12px 30px rgba(0,0,0,0.08);
  cursor:pointer;

  transition:0.35s;

  &:hover{
    transform:translateY(-12px);
    box-shadow:0 20px 50px rgba(0,0,0,0.15);
  }
`;

/* ---------- IMAGE ---------- */

const ImageWrapper = styled.div`
  position:relative;
  height:200px;
  overflow:hidden;
`;

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  transition:0.5s;

  ${Card}:hover &{
    transform:scale(1.08);
  }
`;

/* ---------- DATE BADGE ---------- */

const DateBadge = styled.div`
  position:absolute;
  top:15px;
  left:15px;

  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:black;

  padding:10px 12px;
  border-radius:10px;

  text-align:center;
  font-weight:700;
  font-size:14px;

  box-shadow:0 8px 20px rgba(0,0,0,0.3);
`;

/* ---------- CONTENT ---------- */

const Content = styled.div`
  padding:20px;
`;

const EventTitle = styled.h3`
  font-size:1.2rem;
  margin-bottom:10px;
  color:#0f172a;
`;

const EventText = styled.p`
  font-size:0.9rem;
  color:#475569;
  line-height:1.6;
`;

/* ---------- CTA ---------- */

const ButtonWrapper = styled.div`
  text-align:center;
  margin-top:50px;
`;

const Button = styled.button`
  padding:14px 30px;
  border:none;
  border-radius:40px;
  animation: ${float2} 3s ease-in-out infinite;

  font-weight:600;
  cursor:pointer;

  background:linear-gradient(135deg,#001233,#002366);
  color:white;

  transition:0.3s;

  &:hover{
    transform:scale(1.08);
    box-shadow:0 10px 30px rgba(0,0,0,0.3);
  }
`;

/* ---------- COMPONENT ---------- */

export default function EventsHighlight(){

const navigate = useNavigate();

return(

<Section>

<Header>
<Zoom triggerOnce={false} duration={4000}>
<Title>
Upcoming <span>Events</span>
</Title>
</Zoom>

<Slide duration={4000} triggerOnce={false}>
<Subtitle>
Stay connected and be part of what God is doing in our community
</Subtitle>
</Slide>

</Header>


<Grid>

{/* EVENT 1 */}
<Card onClick={()=>navigate("/events")}>

<ImageWrapper>

<Image src="/images/event1.jpg" alt="Event"/>

<DateBadge>
12 <br/> AUG
</DateBadge>

</ImageWrapper>

<Content>
<Zoom triggerOnce={false} duration={4000}>
<EventTitle>Annual Revival Conference</EventTitle>
</Zoom>
<EventText>
Join us for a powerful time of worship, prayer, and the Word.
Experience revival like never before.
</EventText>

</Content>

</Card>


{/* EVENT 2 */}
<Card onClick={()=>navigate("/events")}>

<ImageWrapper>

<Image src="/images/event2.jpg" alt="Event"/>

<DateBadge>
25 <br/> SEP
</DateBadge>

</ImageWrapper>

<Content>
<Zoom triggerOnce={false} duration={4000}>
<EventTitle>Youth Explosion Night</EventTitle>
</Zoom>

<EventText>
A night of music, dance, and empowerment for young people.
Don’t miss this life-changing gathering.
</EventText>

</Content>

</Card>


{/* EVENT 3 */}
<Card onClick={()=>navigate("/events")}>

<ImageWrapper>

<Image src="/images/event3.jpg" alt="Event"/>

<DateBadge>
05 <br/> OCT
</DateBadge>

</ImageWrapper>

<Content>
<Zoom triggerOnce={false} duration={4000}>
<EventTitle>Community Outreach Day</EventTitle>
</Zoom>
<EventText>
Serving our community with love through food, clothing,
and support for families in need.
</EventText>

</Content>

</Card>

</Grid>


<ButtonWrapper>

<Button onClick={()=>navigate("/events")}>
View All Events
</Button>

</ButtonWrapper>

</Section>

)

}