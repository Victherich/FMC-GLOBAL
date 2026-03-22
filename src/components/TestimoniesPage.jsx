import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import testimonyhero from '../Images/testimonyhero.png'
import { useMemo} from "react";

/* ---------- PAGE ---------- */

const Page = styled.div`
  background:#f8fafc;
`;

/* ---------- HERO ---------- */

const Hero = styled.section`
  padding:170px 20px;
  text-align:center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${testimonyhero});
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

/* ---------- FEATURED ---------- */

const Featured = styled.div`
  margin-bottom:70px;
  padding:40px;
  border-radius:20px;
  background:white;
  box-shadow:0 12px 35px rgba(0,0,0,0.08);
`;

const FeaturedTitle = styled.h2`
  color:#001233;
  margin-bottom:10px;
`;

const FeaturedMeta = styled.div`
  font-size:0.85rem;
  color:#94a3b8;
  margin-bottom:15px;
`;

const FeaturedText = styled.p`
  color:#475569;
  line-height:1.8;
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
  padding:25px;
  border-radius:15px;
  box-shadow:0 8px 25px rgba(0,0,0,0.07);
  transition:.3s;

  &:hover{
    transform:translateY(-8px);
  }
`;

const Category = styled.div`
  font-size:0.75rem;
  font-weight:600;
  color:#d4af37;
  margin-bottom:10px;
`;

const Name = styled.h4`
  color:#0f172a;
  margin-bottom:5px;
`;

const Text = styled.p`
  font-size:0.9rem;
  color:#475569;
  line-height:1.6;
`;

const Meta = styled.div`
  font-size:0.75rem;
  color:#94a3b8;
  margin-top:10px;
`;

/* ---------- CTA ---------- */

const CTA = styled.div`
  margin-top:70px;
  padding:50px 20px;
  text-align:center;
  background:linear-gradient(135deg,#001233,#003566);
  color:white;
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

/* ---------- COMPONENT ---------- */

export default function TestimoniesPage(){
    const navigate = useNavigate();

    const [data, setData] = useState([]);
const testimoniesRef = useMemo(() => collection(db, "testimonies"), []);

useEffect(() => {

  const unsubscribe = onSnapshot(testimoniesRef, (snap) => {

    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // ✅ sort latest first
    const sorted = list.sort((a, b) => {
      const dateA = a.createdAt?.seconds
        ? new Date(a.createdAt.seconds * 1000)
        : new Date(a.createdAt);

      const dateB = b.createdAt?.seconds
        ? new Date(b.createdAt.seconds * 1000)
        : new Date(b.createdAt);

      return dateB - dateA;
    });

    console.log("Realtime testimonies:", sorted); // 🔥 debug

    setData(sorted);
  });

  return () => unsubscribe();

}, [testimoniesRef]);


const formatDate = (date) => {
  if (!date) return "";
  const d = date.seconds ? new Date(date.seconds * 1000) : new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};



return(

<Page>

{/* ---------- HERO ---------- */}

<Hero>

<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
Life-Changing <span>Testimonies</span>
</HeroTitle>
</Flip>

<Slide direction="left" triggerOnce={false}>
<HeroText>
See what God is doing in the lives of His people.
</HeroText>
</Slide>

</Hero>


<Container>

{/* ---------- FEATURED TESTIMONY ---------- */}

<Slide direction="left" triggerOnce>

{data[0] && (
  <Featured>
    <FeaturedTitle>
      "{data[0].category}"
    </FeaturedTitle>

    <FeaturedMeta>
      By {data[0].title} {data[0].name} • {formatDate(data[0].createdAt)}
    </FeaturedMeta>

    <FeaturedText>
      {data[0].text}
    </FeaturedText>
  </Featured>
)}

</Slide>


{/* ---------- TESTIMONIES GRID ---------- */}



<Grid>
  {data.slice(1).map((item) => (
    <Card key={item.id}>
      <Category>{item.category}</Category>

<Slide duration={4000} triggerOnce={false} direction="right">
      <Name>
        {`${item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : ""} ${
          item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : ""
        }`}
      </Name>
      </Slide>

      <Text>{item.text}</Text>

      <Meta>{formatDate(item.createdAt)}</Meta>
    </Card>
  ))}
</Grid>




{/* ---------- CTA ---------- */}

<Zoom triggerOnce={false}>

<CTA>

<CTATitle>
Share Your <span>Testimony</span>
</CTATitle>

<CTAText>
God has done something in your life? Let others be blessed by your story.
</CTAText>

<Button onClick={()=>navigate('/contact')}>Submit Testimony</Button>

</CTA>

</Zoom>

</Container>

</Page>

)

}