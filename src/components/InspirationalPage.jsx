// import React from "react";
// import styled from "styled-components";
// import { Zoom, Zoom, Flip } from "react-awesome-reveal";
// import { Navigate, useNavigate } from "react-router-dom";

// /* ---------- PAGE ---------- */

// const Page = styled.div`
//   background:#f8fafc;
// `;

// /* ---------- HERO ---------- */

// const Hero = styled.section`
//   padding:110px 20px;
//   text-align:center;
//   background:linear-gradient(135deg,#001233,#003566);
//   color:white;
// `;

// const HeroTitle = styled.h1`
//   font-size:2.8rem;

//   span{
//     color:#d4af37;
//   }
// `;

// const HeroText = styled.p`
//   margin-top:10px;
//   color:#cbd5e1;
// `;

// /* ---------- CONTAINER ---------- */

// const Container = styled.div`
//   max-width:1200px;
//   margin:auto;
//   padding:70px 20px;
// `;

// /* ---------- FEATURED ---------- */

// const Featured = styled.div`
//   margin-bottom:70px;
//   padding:40px;
//   border-radius:20px;

//   background:white;
//   box-shadow:0 10px 30px rgba(0,0,0,0.08);
// `;

// const FeaturedTitle = styled.h2`
//   color:#001233;
//   margin-bottom:10px;
// `;

// const FeaturedMeta = styled.div`
//   font-size:0.85rem;
//   color:#94a3b8;
//   margin-bottom:15px;
// `;

// const FeaturedText = styled.p`
//   color:#475569;
//   line-height:1.8;
//   font-size:1rem;
// `;

// /* ---------- GRID ---------- */

// const Grid = styled.div`
//   display:grid;
//   grid-template-columns:repeat(3,1fr);
//   gap:25px;

//   @media(max-width:900px){
//     grid-template-columns:repeat(2,1fr);
//   }

//   @media(max-width:600px){
//     grid-template-columns:1fr;
//   }
// `;

// /* ---------- CARD ---------- */

// const Card = styled.div`
//   background:white;
//   padding:25px;
//   border-radius:15px;
//   box-shadow:0 8px 25px rgba(0,0,0,0.07);
//   transition:.3s;

//   &:hover{
//     transform:translateY(-8px);
//   }
// `;

// const Category = styled.div`
//   font-size:0.75rem;
//   font-weight:600;
//   color:#d4af37;
//   margin-bottom:10px;
// `;

// const Title = styled.h4`
//   margin-bottom:10px;
//   color:#0f172a;
// `;

// const Text = styled.p`
//   font-size:0.9rem;
//   color:#475569;
//   line-height:1.6;
// `;

// const Meta = styled.div`
//   font-size:0.75rem;
//   color:#94a3b8;
//   margin-top:10px;
// `;

// /* ---------- CTA ---------- */

// const CTA = styled.div`
//   margin-top:70px;
//   padding:50px 20px;
//   text-align:center;
//   background:linear-gradient(135deg,#001233,#003566);
//   color:white;
//   border-radius:20px;
// `;

// const CTATitle = styled.h2`
//   margin-bottom:10px;

//   span{
//     color:#d4af37;
//   }
// `;

// const CTAText = styled.p`
//   margin-bottom:20px;
//   color:#cbd5e1;
// `;

// const Button = styled.button`
//   padding:12px 25px;
//   border:none;
//   border-radius:30px;
//   background:linear-gradient(135deg,#b8860b,#d4af37);
//   color:white;
//   cursor:pointer;

//   &:hover{
//     transform:scale(1.05);
//   }
// `;

// /* ---------- COMPONENT ---------- */

// export default function InspirationalPage(){
//     const navigate = useNavigate();

// return(

// <Page>

// {/* ---------- HERO ---------- */}

// <Hero>

// <Flip triggerOnce={false} duration={4000}>
// <HeroTitle>
// Daily <span>Inspiration</span>
// </HeroTitle>
// </Flip>

// <Zoom direction="left" triggerOnce={false} duration={4000}>
// <HeroText>
// Words of faith, hope, and encouragement from our Pastor.
// </HeroText>
// </Zoom>

// </Hero>


// <Container>

// {/* ---------- FEATURED MESSAGE ---------- */}

// <Zoom direction="left" triggerOnce>

// <Featured>

// <FeaturedTitle>
// Faith Over Fear
// </FeaturedTitle>

// <FeaturedMeta>
// By Pastor • March 2026
// </FeaturedMeta>

// <FeaturedText>
// When fear rises, remember that faith is greater.
// God has not given you the spirit of fear, but of power,
// love, and a sound mind. Stand firm, trust Him, and
// watch Him move in your life.
// </FeaturedText>

// </Featured>

// </Zoom>


// {/* ---------- MESSAGE GRID ---------- */}

// <Flip cascade damping={0.1} triggerOnce>

// <Grid>

// <Card>
// <Category>Faith</Category>
// <Title>Trust the Process</Title>
// <Text>
// God is working behind the scenes even when you don’t see it.
// </Text>
// <Meta>March 2026</Meta>
// </Card>

// <Card>
// <Category>Encouragement</Category>
// <Title>You Are Not Alone</Title>
// <Text>
// God walks with you through every storm and every valley.
// </Text>
// <Meta>Feb 2026</Meta>
// </Card>

// <Card>
// <Category>Hope</Category>
// <Title>New Beginnings</Title>
// <Text>
// Every day is an opportunity for God to do something new.
// </Text>
// <Meta>Feb 2026</Meta>
// </Card>

// <Card>
// <Category>Faith</Category>
// <Title>Hold On</Title>
// <Text>
// Even when it's hard, keep believing. Breakthrough is coming.
// </Text>
// <Meta>Jan 2026</Meta>
// </Card>

// <Card>
// <Category>Devotion</Category>
// <Title>Seek Him First</Title>
// <Text>
// Put God first and everything else will fall into place.
// </Text>
// <Meta>Jan 2026</Meta>
// </Card>

// <Card>
// <Category>Strength</Category>
// <Title>Grace is Enough</Title>
// <Text>
// His grace will sustain you through every challenge.
// </Text>
// <Meta>Dec 2025</Meta>
// </Card>

// </Grid>

// </Flip>


// {/* ---------- CTA ---------- */}

// <Zoom triggerOnce={false} duration={4000}>

// <CTA>

// <CTATitle>
// Need More <span>Inspiration?</span>
// </CTATitle>

// <CTAText>
// Reach out, connect, and grow deeper in faith with us.
// </CTAText>

// <Button onClick={()=>navigate('/contact')}>Contact Us</Button>

// </CTA>

// </Zoom>

// </Container>

// </Page>

// )

// }











import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Zoom, Flip } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import inspirationalhero from '../Images/P1.jpeg'
import { useMemo } from "react";




/* ---------- PAGE ---------- */

const Page = styled.div`
  background:#f8fafc;
`;

/* ---------- HERO ---------- */

const Hero = styled.section`
  padding:170px 20px;
  text-align:center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${inspirationalhero});
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
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
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
  font-size:1rem;
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

const Title = styled.h4`
  margin-bottom:10px;
  color:#0f172a;
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

export default function InspirationalPage(){
  const navigate = useNavigate();

  const [data, setData] = useState([]);

const ref = useMemo(() => collection(db, "inspirations"), []);




useEffect(() => {

  const unsubscribe = onSnapshot(ref, (snap) => {

    const list = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // 🔥 sort latest first
    list.sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });

    setData(list);
  });

  // cleanup when component unmounts
  return () => unsubscribe();

}, [ref]);




  // 📅 format month
  const formatDate = (date) => {
    if (!date) return "";
    const d = date.seconds ? new Date(date.seconds * 1000) : new Date(date);

    return d.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const featured = data[0];
  const others = data.slice(1);

  return(

<Page>

{/* ---------- HERO ---------- */}

<Hero>

<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
Daily <span>Inspiration</span>
</HeroTitle>
</Flip>

<Zoom direction="left" triggerOnce={false} duration={4000}>
<HeroText>
Words of faith, hope, and encouragement from our Pastor.
</HeroText>
</Zoom>

</Hero>


<Container>

{/* ---------- FEATURED MESSAGE ---------- */}

{featured && (
<Zoom direction="left" triggerOnce>

<Featured>

<FeaturedTitle>
{featured.title}
</FeaturedTitle>

<FeaturedMeta>
{featured.category} • {formatDate(featured.createdAt)}
</FeaturedMeta>

<FeaturedText>
{featured.content}
</FeaturedText>

</Featured>

</Zoom>
)}


{/* ---------- MESSAGE GRID ---------- */}



<Grid>

{others.map(item => (
<Card key={item.id}>
<Category>{item.category}</Category>
<Zoom triggerOnce={false} duration={4000}>
<Title>{item.title}</Title>
</Zoom>
<Text>{item.content}</Text>
<Meta>{formatDate(item.createdAt)}</Meta>
</Card>
))}

</Grid>




{/* ---------- CTA ---------- */}

<Zoom triggerOnce={false} duration={4000}>

<CTA>

<CTATitle>
Need More <span>Inspiration?</span>
</CTATitle>

<CTAText>
Reach out, connect, and grow deeper in faith with us.
</CTAText>

<Button onClick={()=>navigate('/contact')}>Contact Us</Button>

</CTA>

</Zoom>

</Container>

</Page>

)

}