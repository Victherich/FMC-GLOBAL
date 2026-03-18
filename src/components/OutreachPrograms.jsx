import React from "react";
import styled, { keyframes } from "styled-components";
import { Slide, Zoom, Bounce, Flip, Rotate } from "react-awesome-reveal";
import feed from '../Images/feed.png'
import youth from '../Images/youth.png'
import motherbaby from '../Images/motherbaby.png'
import cloth from '../Images/cloth.png'

/* ---------- SECTION ---------- */

const OutreachSection = styled.section`
  padding:110px 20px;
  background:#f8fafc;
  text-align:center;
`;

/* ---------- TITLE ---------- */

const SectionTitle = styled.h2`
  font-size:2.8rem;
  margin-bottom:70px;
font-style:italic;
  color:transparent;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
// rgb(47,161,104)
);

-webkit-background-clip:text;
background-clip:text;
`;

/* ---------- GRID ---------- */

const Grid = styled.div`
  max-width:1200px;
  margin:auto;

  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:40px;

  @media(max-width:768px){
    grid-template-columns:1fr;
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

/* ---------- IMAGE ---------- */

const Image = styled.img`
  width:100%;
  height:220px;
  object-fit:cover;

  animation:${float} 5s ease-in-out infinite;
`;

/* ---------- CONTENT ---------- */

const Content = styled.div`
  padding:30px;
  text-align:left;
`;

const Title = styled.h3`
  font-size:1.6rem;
  margin-bottom:15px;
  

    color:transparent;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
// rgb(47,161,104)
);

-webkit-background-clip:text;
background-clip:text;
`;

const Text = styled.div`
  font-size:.95rem;
  line-height:1.7;
  color:#334155;

  p{
    margin-bottom:12px;
  }

  ul{
    margin-left:18px;
    margin-bottom:12px;
  }

  li{
    margin-bottom:6px;
  }
`;

/* ---------- COMPONENT ---------- */

export default function OutreachPrograms(){

return(

<OutreachSection>

<Zoom triggerOnce={false} duration={3000}>
<SectionTitle>
OUR OUTREACH PROGRAMS
</SectionTitle>
</Zoom>

<Grid>


{/* ---------- CARD 1 ---------- */}

<Card>

<Image src={feed} alt="Feeding the Multitudes" />

<Content>

<Slide triggerOnce={false} duration={3000}>
<Title>Feeding the Multitudes</Title>
</Slide>

<Text>

{/* <Slide direction="left" triggerOnce={false} duration={3000}> */}
<p>
This program is developed to ensure that no one in our community
goes hungry. Special focus is given to the communities of
Austell, Powder Springs, Mableton, and Marietta.
</p>
{/* </Slide> */}

{/* <Slide direction="right" triggerOnce={false} duration={3000}> */}
<p>
Feeding the Multitudes provides free weekly bakery supplies
to these communities at the following times:
</p>
{/* </Slide> */}

<ul>

{/* <Zoom triggerOnce={false} duration={3000}> */}
<li>Every Saturday at 2:00 PM</li>
{/* </Zoom> */}

{/* <Bounce triggerOnce={false} duration={3000}> */}
<li>Every Sunday after the morning service</li>
{/* </Bounce> */}

</ul>

</Text>

</Content>

</Card>



{/* ---------- CARD 2 ---------- */}

<Card>

<Image src={youth} alt="Youth Outreach" />

<Content>

<Rotate triggerOnce={false} duration={3000}>
<Title>Hope to Cope (Youth Outreach)</Title>
</Rotate>

<Text>

{/* <Slide direction="up" triggerOnce={false} duration={3000}> */}
<p>
Our After School and Summer Program is designed to keep youths
between the ages of 7–18 off the streets and away from negative
influences.
</p>
{/* </Slide> */}

<Zoom triggerOnce={false} duration={3000}>
<p>The program includes:</p>
</Zoom>

<ul>

{/* <Slide direction="left" triggerOnce={false} duration={3000}> */}
<li>Youth Mentoring</li>
{/* </Slide> */}

{/* <Slide direction="right" triggerOnce={false} duration={3000}> */}
<li>Homework Assistance</li>
{/* </Slide> */}

{/* <Bounce triggerOnce={false} duration={3000}> */}
<li>Computer Training</li>
{/* </Bounce> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<li>Performing Arts (Music, Singing, Dance)</li>
{/* </Zoom> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<li>Theater / Drama / Acting</li>
{/* </Zoom> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<li>Photography</li>
{/* </Zoom> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<li>Videography</li>
{/* </Zoom> */}

{/* <Bounce triggerOnce={false} duration={3000}> */}
<li>Etiquette and Mannerism Training</li>
{/* </Bounce> */}

{/* <Bounce triggerOnce={false} duration={3000}> */}
<li>Home-making Skills</li>
{/* </Bounce> */}

</ul>

</Text>

</Content>

</Card>



{/* ---------- CARD 3 ---------- */}

<Card>

<Image src={motherbaby} alt="Mother and Baby Outreach" />

<Content>

<Zoom triggerOnce={false} duration={3000}>
<Title>Hope to Cope (Mother & Baby Friendly Outreach)</Title>
</Zoom>

<Text>

{/* <Slide direction="left" triggerOnce={false} duration={3000}> */}
<p>
This outreach supports mothers and newborn babies by providing
essential items needed for early childcare.
</p>
{/* </Slide> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<p>Items provided include:</p>
{/* </Zoom> */}

<ul>

<Bounce triggerOnce={false} duration={3000}><li>Baby Diapers</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Baby Clothing / Going Home Clothes</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Feeding Bottles</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Breast Feeding Pods</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Newborn Toys</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Baby Hats, Booties, Mittens, Socks</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Bibs and Burp Cloths</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Bedding and Blankets</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Maternity Bags</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Diaper Bags</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Changing Mats</li></Bounce>

</ul>

</Text>

</Content>

</Card>



{/* ---------- CARD 4 ---------- */}

<Card>

<Image src={cloth} alt="Clothing Ministry" />

<Content>

<Zoom triggerOnce={false} duration={3000}>
<Title>Clothing Ministry</Title>
</Zoom>

<Text>

{/* <Slide direction="right" triggerOnce={false} duration={3000}> */}
<p>
The Clothing Ministry serves the homeless and underprivileged
by providing essential clothing and warmth during difficult
seasons.
</p>
{/* </Slide> */}

{/* <Zoom triggerOnce={false} duration={3000}> */}
<p>Items distributed include:</p>
{/* </Zoom> */}

<ul>

<Bounce triggerOnce={false} duration={3000}><li>Coats</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Jackets</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Sweaters</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Gloves</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Scarves</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Thermal Underwear</li></Bounce>
<Bounce triggerOnce={false} duration={3000}><li>Blankets</li></Bounce>

</ul>

{/* <Slide direction="up" triggerOnce={false} duration={3000}> */}
<p>
Special attention is given during the winter season to ensure
that people in need remain warm and protected.
</p>
{/* </Slide> */}

</Text>

</Content>

</Card>



</Grid>

</OutreachSection>

)

}