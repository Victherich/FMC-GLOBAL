import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ehero from '../Images/ehero.png'

/* ---------- PAGE ---------- */

const Page = styled.div`
  background:#f8fafc;
`;

/* ---------- HERO ---------- */

// const Hero = styled.section`
//   padding:110px 20px;
//   text-align:center;
//   background:linear-gradient(135deg,#001233,#002855);
//   color:white;
// `;


const Hero = styled.section`
  padding:170px 20px;
  text-align:center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(${ehero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size:2.8rem;
    text-shadow: 0 5px 15px rgba(0,0,0,1);

  span{
    color:#d4af37;
  }
`;

const HeroText = styled.p`
  margin-top:10px;
  color:#cbd5e1;
    text-shadow: 0 5px 15px rgba(0,0,0,1);
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
  color: #0033a0;
  margin-bottom:10px;
`;

const Meta = styled.div`
  font-size:0.9rem;
  color:#64748b;
  margin-bottom:10px;
  font-weight:bold;
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
  // height:180px;
  object-fit:cover;
`;

const CardBody = styled.div`
  padding:18px;
`;

const CardTitle = styled.h3`
  margin-bottom:5px;
  color: #0033a0;
`;

const CardMeta = styled.div`
  font-size:0.9rem;
  color: #666;
  margin-bottom:8px;
  font-weight:bold;
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
    const [events, setEvents] = useState([]);


useEffect(() => {
  const fetchEvents = async () => {
    const snap = await getDocs(collection(db, "events"));

    const list = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    // sort: latest first
    list.sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });

    setEvents(list);
  };

  fetchEvents();
}, []);




const getDateParts = (date) => {
  if (!date) return { day: "", month: "" };

  const d = new Date(date);
  return {
    day: d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
  };
};



const featured = events[0];




return(

<Page>

{/* ---------- HERO ---------- */}

<Hero>

<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
Our <span>Events</span>
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
<Img src={featured?.image || "/images/event-main.jpg"} />

{featured?.date && (
  <DateBadge>
    <Month>{getDateParts(featured.date).month}</Month>
    <Day>{getDateParts(featured.date).day}</Day>
  </DateBadge>
)}

</FeaturedImage>

<FeaturedContent>
<Zoom triggerOnce={false} duration={4000}>
<Title>{featured?.title || "Event Title"}</Title>


</Zoom>

<Meta>
  Venue: {featured?.venue}
</Meta>

<Meta>
 Date: {featured?.date} • Time: {featured?.time}
</Meta>

<Text>
  {featured?.description}
</Text>

{/* <Button>View Details</Button> */}

</FeaturedContent>

</Featured>



{/* ---------- UPCOMING ---------- */}

<SectionTitle>More Events</SectionTitle>


<Grid>

{events.slice(1).map((item) => (
  <Card key={item.id}>

    <CardImageWrap>
      <CardImg src={item.image} />

      {item.date && (
        <DateBadge>
          <Month>{getDateParts(item.date).month}</Month>
          <Day>{getDateParts(item.date).day}</Day>
        </DateBadge>
      )}
    </CardImageWrap>

    <CardBody>
      <Zoom triggerOnce={false} duration={4000}>
        <CardTitle>{item.title}</CardTitle>
      </Zoom>

      {/* <CardMeta>Time: {item.time}</CardMeta> */}
<CardMeta>
  Venue: {item.venue}
</CardMeta>

<CardMeta>
 Date: {item.date} • Time: {item.time}
</CardMeta>

      <CardText>{item.description}</CardText>
    </CardBody>

  </Card>
))}

</Grid>





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