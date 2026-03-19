import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";

/* ---------- PAGE ---------- */

const Page = styled.div`
  background:#f8fafc;
`;

/* ---------- HERO ---------- */

const Hero = styled.section`
  padding:120px 20px;
  text-align:center;
  background:linear-gradient(135deg,#001233,#002855);
  color:white;
`;

const HeroTitle = styled.h1`
  font-size:3rem;
  margin-bottom:15px;

  span{
    color:#d4af37;
  }
`;

const HeroText = styled.p`
  max-width:700px;
  margin:auto;
  color:#e2e8f0;
`;

/* ---------- CONTAINER ---------- */

const Container = styled.div`
  max-width:1200px;
  margin:auto;
  padding:80px 20px;
`;

/* ---------- FEATURED ---------- */

const Featured = styled.div`
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:50px;
  align-items:center;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

const VideoBox = styled.div`
  position:relative;
  border-radius:20px;
  overflow:hidden;
`;

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

const Play = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:70px;
  height:70px;
  border-radius:50%;
  background:#d4af37;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  cursor:pointer;
`;

const Content = styled.div``;

const Title = styled.h2`
  font-size:2rem;
  color:#001233;
  margin-bottom:10px;
`;

const Text = styled.p`
  color:#475569;
  line-height:1.7;
  margin-bottom:20px;
`;

/* ---------- CATEGORY ---------- */

const CategoryRow = styled.div`
  display:flex;
  gap:20px;
  margin:60px 0;
  flex-wrap:wrap;
`;

const Category = styled.div`
  padding:12px 20px;
  border-radius:30px;
  background:white;
  box-shadow:0 5px 15px rgba(0,0,0,0.08);
  cursor:pointer;
  font-weight:500;

  &:hover{
    background:#d4af37;
    color:white;
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
  border-radius:18px;
  overflow:hidden;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
  transition:.3s;

  &:hover{
    transform:translateY(-10px);
  }
`;

const CardImage = styled.img`
  width:100%;
  height:200px;
  object-fit:cover;
`;

const CardBody = styled.div`
  padding:20px;
`;

const CardTitle = styled.h4`
  color:#0f172a;
  margin-bottom:8px;
`;

const CardMeta = styled.div`
  font-size:0.8rem;
  color:#94a3b8;
  margin-bottom:10px;
`;

const CardText = styled.p`
  font-size:0.9rem;
  color:#475569;
`;

/* ---------- LOAD MORE ---------- */

const Center = styled.div`
  text-align:center;
  margin-top:50px;
`;

const Button = styled.button`
  padding:14px 30px;
  border:none;
  border-radius:40px;
  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  font-weight:600;
  cursor:pointer;

  &:hover{
    transform:scale(1.05);
  }
`;

/* ---------- COMPONENT ---------- */

export default function SermonsPage(){

return(

<Page>

{/* ---------- HERO ---------- */}

<Hero>
 <Flip triggerOnce={false} duration={4000}>
    <HeroTitle>
      Sermons & <span>Media</span>
    </HeroTitle>
  </Flip>

  <Slide direction="left" triggerOnce={false} duration={4000}>
    <HeroText>
      Grow spiritually through powerful teachings, inspiring messages,
      and life-transforming word from God.
    </HeroText>
  </Slide>
</Hero>


<Container>

{/* ---------- FEATURED ---------- */}



<Featured>

<VideoBox>
  <Image src="/images/sermon-main.jpg" />
  <Play>▶</Play>
</VideoBox>

<Content>
     <Zoom triggerOnce={false} duration={4000}>
  <Title>Walking by Faith</Title>
  </Zoom>
  <Text>
    A powerful message reminding believers to trust God beyond
    what they see and step boldly into His promises.
  </Text>
</Content>

</Featured>



{/* ---------- CATEGORIES ---------- */}

<Slide direction="right" triggerOnce>

<CategoryRow>
  <Category>All</Category>
  <Category>Video Sermons</Category>
  <Category>Audio Messages</Category>
  <Category>Devotionals</Category>
</CategoryRow>

</Slide>


{/* ---------- SERMONS ---------- */}



<Grid>

<Card>
<CardImage src="/images/sermon1.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Faith Over Fear</CardTitle>
</Zoom>
<CardMeta>Sunday Service • 45 mins</CardMeta>
<CardText>Overcome fear and walk in bold faith.</CardText>
</CardBody>
</Card>

<Card>
<CardImage src="/images/sermon2.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Power of Prayer</CardTitle>
</Zoom>
<CardMeta>Midweek • 38 mins</CardMeta>
<CardText>Unlock the power of consistent prayer.</CardText>
</CardBody>
</Card>

<Card>
<CardImage src="/images/sermon3.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Purpose Driven Life</CardTitle>
</Zoom>
<CardMeta>Sunday • 50 mins</CardMeta>
<CardText>Discover your God-given purpose.</CardText>
</CardBody>
</Card>

<Card>
<CardImage src="/images/sermon1.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Grace & Mercy</CardTitle>
</Zoom>
<CardMeta>Special Service • 40 mins</CardMeta>
<CardText>Understanding God's grace deeply.</CardText>
</CardBody>
</Card>

<Card>
<CardImage src="/images/sermon2.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Victory in Christ</CardTitle>
</Zoom>
<CardMeta>Sunday • 42 mins</CardMeta>
<CardText>Living in victory every day.</CardText>
</CardBody>
</Card>

<Card>
<CardImage src="/images/sermon3.jpg"/>
<CardBody>
     <Zoom triggerOnce={false} duration={4000}>
<CardTitle>Spiritual Growth</CardTitle>
</Zoom>
<CardMeta>Midweek • 36 mins</CardMeta>
<CardText>Grow deeper in your walk with God.</CardText>
</CardBody>
</Card>

</Grid>




{/* ---------- LOAD MORE ---------- */}

{/* <Zoom triggerOnce>

<Center>
  <Button>Load More Sermons</Button>
</Center>

</Zoom> */}

</Container>

</Page>

)

}