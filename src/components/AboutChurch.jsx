import React from "react";
import styled, { keyframes } from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";

/* =========================
ANIMATIONS
========================= */

const fadeUp = keyframes`
0%{opacity:0; transform:translateY(40px)}
100%{opacity:1; transform:translateY(0)}
`;

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-12px)}
100%{transform:translateY(0)}
`;

/* =========================
SECTION
========================= */

const Section = styled.section`
padding:120px 20px;
background:linear-gradient(180deg,#ffffff,#f4f6fb);
position:relative;
overflow:hidden;
`;

/* Decorative Glow */

const Glow = styled.div`
position:absolute;
width:400px;
height:400px;
background:radial-gradient(circle, rgba(255,65,179,0.7), transparent);
top:-100px;
left:-100px;
filter:blur(60px);
`;

/* =========================
HEADER
========================= */

const Header = styled.div`
text-align:center;
margin-bottom:70px;
animation:${fadeUp} 1s ease;
`;

const Title = styled.h2`
font-size:3rem;
font-weight:800;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

const Subtitle = styled.p`
margin-top:10px;
font-size:1.2rem;
color:#555;
`;

/* =========================
MAIN GRID
========================= */

const Grid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
max-width:1200px;
margin:auto;

@media(max-width:900px){
grid-template-columns:1fr;
}
`;

/* =========================
TEXT PANEL
========================= */

const TextPanel = styled.div`
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 20px 60px rgba(0,0,0,0.08);
line-height:1.9;
font-size:0.95rem;
max-height:600px;
overflow-y:auto;

&::-webkit-scrollbar{
width:6px;
}
&::-webkit-scrollbar-thumb{
background:#ddd;
border-radius:20px;
}
`;

const Welcome = styled.h3`
font-size:1.5rem;
margin-bottom:20px;
font-weight:700;
// color:#111;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

/* =========================
RIGHT SIDE CARDS
========================= */

const Cards = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`;

const Card = styled.div`
background:white;
padding:25px;
border-radius:16px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
transition:0.3s;
animation:${fadeUp} 1s ease;

&:hover{
transform:translateY(-8px);
box-shadow:0 20px 40px rgba(0,0,0,0.12);
}
`;

const CardTitle = styled.h4`
font-size:1.2rem;
margin-bottom:10px;
font-weight:700;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

const CardText = styled.p`
font-size:0.95rem;
color:#444;
line-height:1.7;
`;

/* =========================
COMPONENT
========================= */

export default function AboutChurch(){

return(

<Section>

<Glow/>

<Header>
    <Zoom triggerOnce={false} duration={3000}>
<Title>About Our Church</Title>
</Zoom>
<Slide triggerOnce={false} duration={3000}>
<Subtitle>Welcome and Thank You for visiting The Faith and Miracle Center</Subtitle>
</Slide>
</Header>

<Grid>

{/* LEFT TEXT */}

<TextPanel>
<Slide direction="right" triggerOnce={false} duration={3000}>
<Welcome>Welcome</Welcome>
</Slide>
<p>
Welcome and Thank You for visiting
The Faith and Miracle Center
Soth in the usa
FMC is a dynamic, Bible based church located in Austell, -Georgia with a passion for changing lives with the Word of God. As a growing, loving church, we preach and teach the word with special emphasis on practical application. By laying a strong foundation in the word, we are equipped and empowered to address life's challenges knowing the provision of our victory is assured.
Senior Pastors Tai and Sade Kuku are kingdom minded leaders and their approach to ministry is centered around the heartbeat of the King which is souls. On both the global and domestic areas, we proclaim the truth and declare His power over every obstacle of hindrance in the lives of those who believe. Our Christian preaching is life-related, our aim is to produce a changed lifestyle. It doesn't just inform, it trans- forms. If you are looking for a place to worship and grow in the Lord, then The Faith and Miracle Center is the place for you. We cordially invite you to join us and witness the trans- formation power of God to change your life forever!
</p>

<p>
If you are searching for a church home, there is special place here just for you. Our church family will be delighted to have you grace us with your presence. We assure you that you will be among friends who care. We hope that you feel right at home as we worship together.
</p>

</TextPanel>


{/* RIGHT CARDS */}

<Cards>

<Card>
    <Slide direction="right" triggerOnce={false} duration={3000}>
<CardTitle>A Place for Friendship......</CardTitle>
</Slide>
<CardText>
We make it a priority to build lasting bonds of concern and genuine commitment between the members of our church family. We'd love for this family relationship to include you.
</CardText>
</Card>

<Card>
    <Slide direction="right" triggerOnce={false} duration={3000}>
<CardTitle>A Place for Learning.....</CardTitle>
</Slide>
<CardText>
To us, studying the Bible is vital because it does not only in- struct intellectually, but also guides spiritually. We believe it and accept it as God's word to man, a book that is alive and relevant to life today.
</CardText>
</Card>

<Card>
    <Slide direction="right" triggerOnce={false} duration={3000}>
<CardTitle>A Place for Enrichment.....</CardTitle>
</Slide>
<CardText>
We offer a wealth of opportunities and ministries for persons of all ages levels; which include children, youth and adults. You can be assured that you will have the occasion to pro- gress in many levels of growth in Christ.
</CardText>
</Card>

<Card>
    <Slide direction="right" triggerOnce={false} duration={3000}>
<CardTitle>A Place for Service..</CardTitle>
</Slide>
<CardText>
Just as Christ came "not to be ministered unto, but to minister..."We accept our responsibility to reach out in service to others. This applies both within the church family and outside of our fellowship.
</CardText>
</Card>

<Card>
    <Slide direction="right" triggerOnce={false} duration={3000}>
<CardTitle>A Place for Worship......</CardTitle>
</Slide>
<CardText>
The primary reason we meet together is to focus our atten- tion on God, to give him our worship, and receive His blessing in faith and inspiration. We hope this is what you will exper- ience today and we certainly hope to see you again very soon.
</CardText>
</Card>

</Cards>

</Grid>

</Section>

)

}