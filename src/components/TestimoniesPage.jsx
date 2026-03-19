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
  background:linear-gradient(135deg,#001233,#003566);
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

<Featured>

<FeaturedTitle>
"Healed and Restored"
</FeaturedTitle>

<FeaturedMeta>
By Sister Grace • March 2026
</FeaturedMeta>

<FeaturedText>
I came to church burdened with sickness and fear, but through
prayer and faith, God healed me completely. Today I stand
strong and full of joy. Truly, God is faithful!
</FeaturedText>

</Featured>

</Slide>


{/* ---------- TESTIMONIES GRID ---------- */}

<Flip cascade damping={0.1} triggerOnce>

<Grid>

<Card>
<Category>Healing</Category>
<Name>Brother John</Name>
<Text>
God delivered me from years of pain. I am completely free!
</Text>
<Meta>Feb 2026</Meta>
</Card>

<Card>
<Category>Breakthrough</Category>
<Name>Sister Mary</Name>
<Text>
After months of waiting, God opened a door for my job.
</Text>
<Meta>Feb 2026</Meta>
</Card>

<Card>
<Category>Provision</Category>
<Name>Daniel K.</Name>
<Text>
God provided financially when I needed it the most.
</Text>
<Meta>Jan 2026</Meta>
</Card>

<Card>
<Category>Restoration</Category>
<Name>Faith A.</Name>
<Text>
My family has been restored. God answered our prayers.
</Text>
<Meta>Jan 2026</Meta>
</Card>

<Card>
<Category>Healing</Category>
<Name>Samuel T.</Name>
<Text>
I was healed after prayer. God still performs miracles!
</Text>
<Meta>Dec 2025</Meta>
</Card>

<Card>
<Category>Salvation</Category>
<Name>Esther L.</Name>
<Text>
I gave my life to Christ and everything has changed.
</Text>
<Meta>Dec 2025</Meta>
</Card>

</Grid>

</Flip>


{/* ---------- CTA ---------- */}

<Zoom triggerOnce>

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