import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";
import testimony from '../Images/testimonyimg2.png';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

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

const [data, setData] = useState([]);

const testimoniesRef = collection(db, "testimonies");

const fetchData = async () => {
  const snap = await getDocs(testimoniesRef);

  const list = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const sorted = list.sort((a, b) => {
    const dateA = a.createdAt?.seconds
      ? new Date(a.createdAt.seconds * 1000)
      : new Date(a.createdAt);

    const dateB = b.createdAt?.seconds
      ? new Date(b.createdAt.seconds * 1000)
      : new Date(b.createdAt);

    return dateB - dateA;
  });

  // 🔥 only 4
  setData(sorted.slice(0, 4));
};

useEffect(() => {
  fetchData();
}, []);


const featured = data[0];
const others = data.slice(1);




return(

<Section>

<Container>

{/* ---------- HERO ---------- */}

<Hero>

<Image src={testimony} alt="Testimonies"/>

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
{featured?.text}
</Quote>

<Author>
— {featured?.name || "Anonymous"}
</Author>

</Featured>

<Button onClick={()=>navigate("/testimonies")}>
Read More Testimonies
</Button>

</Content>

</Hero>


{/* ---------- GRID ---------- */}
<Grid>

{others.map((item) => (
  <Card key={item.id}>

    <Quote>
      {item.text}
    </Quote>

    <Author>
      — {item.name || "Anonymous"}
    </Author>

  </Card>
))}

</Grid>

</Container>

</Section>

)

}