import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import youthexplosion from '../Images/youthexplosion1.png'
import co1 from '../Images/co1.png'
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig";

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding:100px 10px;
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
const [events, setEvents] = useState([]);



useEffect(() => {
  const fetchEvents = async () => {
    try {
      const q = query(
        collection(db, "events"),
        orderBy("createdAt", "desc"),
        limit(3)
      );

      const snap = await getDocs(q);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEvents(list);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  fetchEvents();
}, []);





const formatDateParts = (dateStr) => {
  if (!dateStr) return { day: "", month: "" };

  const d = new Date(dateStr);

  return {
    day: d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
  };
};


return(

<Section>

<Header>
<Zoom triggerOnce={false} duration={4000}>
<Title>
Upcoming <span>Events</span>
</Title>
</Zoom>

<Zoom duration={4000} triggerOnce={false}>
<Subtitle>
Stay connected and be part of what God is doing in our community
</Subtitle>
</Zoom>

</Header>


<Grid>

{events.map((item) => {
  const { day, month } = formatDateParts(item.date);

  return (
    <Card key={item.id}>
      <ImageWrapper>
        <Image src={item.image} alt="Event" />

        <DateBadge>
          {day} <br /> {month}
        </DateBadge>
      </ImageWrapper>

      <Content>
        <Zoom triggerOnce={false} duration={4000}>
          <EventTitle>{item.title}</EventTitle>
        </Zoom>

        <EventText>{item.description}</EventText>

        {/* NEW INFO (venue, time, date) */}
        <EventText>
          <strong>Venue:</strong> {item.venue}
        </EventText>

        <EventText>
          <strong>Time:</strong> {item.time}
        </EventText>

        <EventText>
          <strong>Date:</strong> {item.date}
        </EventText>
      </Content>
    </Card>
  );
})}

</Grid>


<ButtonWrapper>

<Button onClick={()=>navigate("/events")}>
View All Events
</Button>

</ButtonWrapper>

</Section>

)

}