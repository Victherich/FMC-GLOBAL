



import React from "react";
import styled, { keyframes } from "styled-components";
import "animate.css";

/* ---------- LIGHT SECTION ---------- */

const OutreachSection = styled.section`
  padding: 110px 20px;
  background: #f8fafc;
  text-align: center;
`;

/* ---------- TITLE ---------- */

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 70px;

  background: linear-gradient(90deg,#ff7e5f,#feb47b);
  -webkit-background-clip:text;
  color:transparent;
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
  max-width:1200px;
  margin:auto;

  display:grid;
 grid-template-columns:repeat(2,1fr);
  gap:40px;

@media(max-width:768px){
  grid-template-columns:1fr; /* 1 per row on small screens */
}


`;

/* ---------- FLOAT ANIMATION ---------- */

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-8px)}
100%{transform:translateY(0)}
`;

/* ---------- CARD ---------- */

const Card = styled.div`
  background:white;
  border-radius:18px;
  overflow:hidden;

  box-shadow:0 12px 35px rgba(0,0,0,.08);

  transition:.35s;

  &:hover{
    transform:translateY(-10px) scale(1.03);
    box-shadow:0 20px 50px rgba(0,0,0,.15);
  }
`;

/* ---------- CARD IMAGE ---------- */

const Image = styled.img`
  width:100%;
  height:220px;
  object-fit:cover;

  animation:${float} 5s ease-in-out infinite;
`;

/* ---------- CARD CONTENT ---------- */

const Content = styled.div`
  padding:30px;
  text-align:left;
`;

const Title = styled.h3`
  font-size:1.6rem;
  margin-bottom:15px;
  color:#1e293b;
`;

const Text = styled.pre`
  font-family:inherit;
  font-size:.95rem;
  line-height:1.7;
  color:#334155;
  white-space:pre-wrap;
`;

/* ---------- COMPONENT ---------- */

export default function OutreachPrograms(){

const programs = [

{
title:"Feeding the Multitudes",
text:`This program is developed to insure that no one in our
community will go hungry. More specific service is dedicated to
our immediate jurisdiction (Austell, Powder Springs, Mableton
and Marietta). Feeding the multitude is designed to provide free weekly bakery supplies to these communities, every Saturday at 2:00 pm, and again on Sundays after the morning
service.`
},

{
title:"Hope to Cope (Youth Outreach)",
text:`Our AFTER SCHOOL/SUMMER PROGRAM serves the purpose of keeping our youths (7-18) off the streets after school and away from the temptation and bad influences.
Our comprehensive program will incorporate:
🟢 Youth Mentoring.
Home Work Assistance.
Computer Training.
🟢 Performing Arts, including Music, Singing, Dance. - Theater/Drama-Acting, Photography, Videography. Etiquette, Mannerism, Home-making.`
},

{
title:"Hope to Cope (Mother & Baby Friendly Outreach)",
text:`OUR COMPREHENSIVE PROGRAM INCORPORATES
HELPING OUT WITH ANY OF THESE ITEMS:
-
Baby Diapers
-Baby Clothing/Going Home Clothes for Baby
Feeding Bottles for Bottle Fed Babies
- Breast Feeding Pods
Newborn Toys
Baby Hats, Booties, Mittens, Socks, Bibs, Burp Cloths Bedding & Blankets
-Maternity Bag, Diaper Bag, Changing Mat`
},

{
title:"Clothing Ministry",
text:`The clothing ministry is designed to meet the needs of the homeless and underprivileged by providing coats, jackets, sweaters, gloves, scarves, thermal underwear, and blankets particularly in winter season.`
}

]

return(

<OutreachSection>

<SectionTitle>
Outreach Programs
</SectionTitle>

<Grid>

{programs.map((p,i)=>(

<Card
key={i}
className="animate__animated animate__fadeInUp"
>

<Image src={`/images/outreach${i+1}.jpg`} />

<Content>

<Title>
{p.title}
</Title>

<Text>
{p.text}
</Text>

</Content>

</Card>

))}

</Grid>

</OutreachSection>

)

}