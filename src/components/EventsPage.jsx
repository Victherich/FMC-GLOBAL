import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { Navigate, useNavigate } from "react-router-dom";

/* ---------- PAGE ---------- */

const Page = styled.div`
  background:#f8fafc;
`;

/* ---------- HERO ---------- */

const Hero = styled.section`
  padding:110px 20px;
  text-align:center;
  background:linear-gradient(135deg,#001233,#002855);
  color:white;
`;

const HeroTitle = styled.h1`
  font-size:2.8rem;

  span{
    color:#d4af37;
  }
`;

const HeroText = styled.p`
  margin-top:10px;
  color:#cbd5e1;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;
  padding:70px 20px;
`;

/* ---------- SECTION TITLE ---------- */

const SectionTitle = styled.h2`
  margin-bottom:25px;
  color:#001233;
`;

/* ---------- FEATURED ---------- */

const Featured = styled.div`
  display:grid;
  grid-template-columns:1.3fr 1fr;
  gap:40px;
  margin-bottom:70px;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

const FeaturedImage = styled.div`
  position:relative;
`;

const Img = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:20px;
`;

/* ---------- DATE BADGE ---------- */

const DateBadge = styled.div`
  position:absolute;
  top:15px;
  left:15px;

  background:#d4af37;
  color:black;

  padding:10px 12px;
  border-radius:10px;
  text-align:center;
  font-weight:600;
`;

const Month = styled.div`
  font-size:0.7rem;
`;

const Day = styled.div`
  font-size:1.2rem;
`;

/* ---------- FEATURE CONTENT ---------- */

const FeaturedContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const Title = styled.h3`
  font-size:1.8rem;
  color:#001233;
  margin-bottom:10px;
`;

const Meta = styled.div`
  font-size:0.9rem;
  color:#64748b;
  margin-bottom:10px;
`;

const Text = styled.p`
  color:#475569;
  margin-bottom:15px;
`;

const Button = styled.button`
  padding:12px 25px;
  border:none;
  border-radius:30px;
  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  cursor:pointer;

  &:hover{
    transform:scale(1.05);
  }
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:25px;

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
  border-radius:15px;
  overflow:hidden;
  box-shadow:0 8px 25px rgba(0,0,0,0.08);
  transition:.3s;

  &:hover{
    transform:translateY(-8px);
  }
`;

const CardImageWrap = styled.div`
  position:relative;
`;

const CardImg = styled.img`
  width:100%;
  height:180px;
  object-fit:cover;
`;

const CardBody = styled.div`
  padding:18px;
`;

const CardTitle = styled.h4`
  margin-bottom:5px;
  color:#0f172a;
`;

const CardMeta = styled.div`
  font-size:0.8rem;
  color:#94a3b8;
  margin-bottom:8px;
`;

const CardText = styled.p`
  font-size:0.9rem;
  color:#475569;
`;

/* ---------- CTA ---------- */

const CTA = styled.div`
  margin-top:70px;
  padding:50px 20px;
  background:linear-gradient(135deg,#001233,#003566);
  color:white;
  text-align:center;
  border-radius:20px;
`;

const CTATitle = styled.h2`
  margin-bottom:10px;

  span{
    color:#d4af37;
  }
`;

const CTAText = styled.p`
  margin-bottom:20px;
  color:#cbd5e1;
`;

/* ---------- COMPONENT ---------- */

export default function EventsPage(){
    const navigate = useNavigate();

return(

<Page>

{/* ---------- HERO ---------- */}

<Hero>

<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
Upcoming <span>Events</span>
</HeroTitle>
</Flip>

<Slide direction="left" triggerOnce={false} duration={4000}>
<HeroText>
Be part of our services, conferences, and life-changing programs.
</HeroText>
</Slide>

</Hero>


<Container>

{/* ---------- FEATURED EVENT ---------- */}



<Featured>

<FeaturedImage>
<Img src="/images/event-main.jpg"/>

<DateBadge>
<Month>MAR</Month>
<Day>25</Day>
</DateBadge>

</FeaturedImage>

<FeaturedContent>
<Zoom triggerOnce={false} duration={4000}>
<Title>Annual Revival Conference</Title>
</Zoom>

<Meta>5:00 PM • Main Auditorium</Meta>

<Text>
A powerful gathering of worship, word, and divine encounter.
Come and experience transformation.
</Text>

<Button>View Details</Button>

</FeaturedContent>

</Featured>




{/* ---------- UPCOMING ---------- */}

<SectionTitle>Upcoming Events</SectionTitle>



<Grid>

<Card>

<CardImageWrap>
<CardImg src="/images/event1.jpg"/>

<DateBadge>
<Month>MAR</Month>
<Day>20</Day>
</DateBadge>

</CardImageWrap>

<CardBody>
    <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Sunday Worship</CardTitle>
</Zoom>
<CardMeta>9:00 AM</CardMeta>
<CardText>Join us for a powerful worship experience.</CardText>
</CardBody>

</Card>


<Card>

<CardImageWrap>
<CardImg src="/images/event2.jpg"/>

<DateBadge>
<Month>MAR</Month>
<Day>22</Day>
</DateBadge>

</CardImageWrap>

<CardBody>
    <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Youth Fellowship</CardTitle>
</Zoom>
<CardMeta>5:00 PM</CardMeta>
<CardText>Empowering young people for greatness.</CardText>
</CardBody>

</Card>


<Card>

<CardImageWrap>
<CardImg src="/images/event3.jpg"/>

<DateBadge>
<Month>MAR</Month>
<Day>24</Day>
</DateBadge>

</CardImageWrap>

<CardBody>
<CardTitle>Prayer Night</CardTitle>
<CardMeta>10:00 PM</CardMeta>
<CardText>A night of deep spiritual encounter.</CardText>
</CardBody>

</Card>

</Grid>




{/* ---------- PAST EVENTS ---------- */}

<SectionTitle>Past Events</SectionTitle>

<Slide direction="right" triggerOnce>

<Grid>

<Card>
<CardImg src="/images/event1.jpg"/>
<CardBody>
<CardTitle>Christmas Service</CardTitle>
<CardMeta>Dec 2025</CardMeta>
<CardText>Celebrating Christ together.</CardText>
</CardBody>
</Card>

<Card>
<CardImg src="/images/event2.jpg"/>
<CardBody>
<CardTitle>Thanksgiving</CardTitle>
<CardMeta>Nov 2025</CardMeta>
<CardText>A service full of gratitude.</CardText>
</CardBody>
</Card>

<Card>
<CardImg src="/images/event3.jpg"/>
<CardBody>
<CardTitle>Family Weekend</CardTitle>
<CardMeta>Oct 2025</CardMeta>
<CardText>Strengthening families in Christ.</CardText>
</CardBody>
</Card>

</Grid>

</Slide>


{/* ---------- CTA ---------- */}

<Zoom triggerOnce={false} duration={4000}>

<CTA>

<CTATitle>
Want to Join an <span>Event?</span>
</CTATitle>

<CTAText>
Reach out for more details or participation.
</CTAText>

<Button onClick={()=>navigate('/contact')}>Contact Us</Button>

</CTA>

</Zoom>

</Container>

</Page>

)

}