import React from "react";
import styled, { keyframes } from "styled-components";
import { FaPray, FaBible, FaChalkboardTeacher, FaHeart } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

/* =========================
ANIMATIONS
========================= */

const fadeUp = keyframes`
0%{opacity:0; transform:translateY(50px)}
100%{opacity:1; transform:translateY(0)}
`;

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-15px)}
100%{transform:translateY(0)}
`;

const glow = keyframes`
0%{opacity:.3}
50%{opacity:.7}
100%{opacity:.3}
`;

/* =========================
SECTION
========================= */

const Section = styled.section`
padding:120px 20px;
background:linear-gradient(180deg,#ffffff,#f5f7fb);
position:relative;
overflow:hidden;
`;

/* Floating particles */

const Particle = styled.div`
position:absolute;
width:6px;
height:6px;
background:rgba(255,65,179,0.3);
border-radius:50%;
animation:${float} 6s infinite ease-in-out;

&:nth-child(1){top:10%; left:20%;}
&:nth-child(2){top:30%; left:80%;}
&:nth-child(3){top:70%; left:10%;}
&:nth-child(4){top:80%; left:60%;}
`;

/* Glow */

const Glow = styled.div`
position:absolute;
width:500px;
height:500px;
background:radial-gradient(circle, rgba(67,61,248,0.15), transparent);
bottom:-150px;
right:-150px;
filter:blur(100px);
animation:${glow} 8s infinite;
`;

/* =========================
HEADER
========================= */

const Header = styled.div`
text-align:center;
margin-bottom:80px;
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
color:#666;
`;

/* =========================
LAYOUT
========================= */

const Grid = styled.div`
display:grid;
grid-template-columns:1.2fr 1fr;
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

animation:${fadeUp} 1s ease;

&::-webkit-scrollbar{
width:6px;
}
&::-webkit-scrollbar-thumb{
background:#ddd;
border-radius:20px;
}
`;

/* =========================
CARDS
========================= */

const Cards = styled.div`
display:flex;
flex-direction:column;
gap:25px;
`;

const Card = styled.div`
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 15px 40px rgba(0,0,0,0.08);
transition:0.4s;
position:relative;
overflow:hidden;

&:hover{
transform:translateY(-10px);
box-shadow:0 30px 60px rgba(0,0,0,0.15);
}

&::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:linear-gradient(
135deg,
rgba(255,65,179,0.1),
rgba(67,61,248,0.1)
);
opacity:0;
transition:.4s;
}

&:hover::before{
opacity:1;
}
`;

const IconWrap = styled.div`
font-size:28px;
margin-bottom:15px;
color:#433df8;
animation:${float} 5s infinite;
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
`;

/* =========================
COMPONENT
========================= */

export default function WhyWeExistPremium(){

return(

<Section>

{/* effects */}
<Glow/>
<Particle/>
<Particle/>
<Particle/>
<Particle/>

<Header>
    <Zoom triggerOnce={false} duration={3000}>
<Title>Our Statement: WHY WE EXIST AS A CHURCH</Title>
</Zoom>
<Zoom direction="left" triggerOnce={false} duration={3000}>
<Subtitle>Our purpose defines our mission and our impact</Subtitle>
</Zoom>
</Header>

<Grid>

{/* LEFT TEXT */}

<TextPanel>

<p>
We exist to celebrate God's Presence This is the number one priority of our church because it is the number one priority for our lives. We were made to have a relationship with God. We were made to have fellowship with Him. If that's what we were made for, that should be the number one purpose for our lives. That's the number one purpose for our church.
</p>

<p>
We exist to communicate God's word
The definition of evangelism is "sharing the good news" Ephesians 3:10.
"His (God's) intent was that through the church, the manifold wisdom of God should be made known." In other words, the purpose of the church is to talk about God, talk about the incredible things He has done and the incredible person He is. To make known His wisdom to other people. That's our purpose.
</p>

<p>
We exist to educate God's people
The definition of that is discipleship. Discipleship means helping believers grow spiritually. Hebrews 6:1. "Let us leave the elementary teachings about Christ and go on to maturity." Evidential there is something more than just coming to Jesus Christ in a personal relation- ship. There is something more.
The Bible says it's maturity, becoming like Jesus Christ. One of our goals is to make FMC Church one of the most spiritually mature churches by educating God's people on how to read the Bible, how to study it, about prayer and about having a quiet time.
</p>

<p>
We exist to demonstrate God's Love A definition of ministry is meeting needs with love. The reality is everybody hurts. Everybody has a hurt. Everybody has a struggle. It doesn't matter how nicely put together you look. It doesn't matter whether your shoes match your purse. It doesn't matter whether you've got a great house and a great car and a great job. It doesn't really matter if all those things are in place because somewhere in your life is a hurt, a need, a struggle. Part of the reason this church exists is to meet those needs with love. And not even just the needs of you, but the community where we know people are aching and dying. So one of the purposes we exist is to show love, to meet needs.
</p>

<p>
John 13:35
"By this shall all men know that you are my disciples that you have love for one another."
Jesus could have taught of all kinds of reasons, all kinds of hallmarks for His disciples and He had the opportun- ity right here to tell them, "This is what I want you to be known for."
He didn't say to His disciples, "I want you to be known for your fabulous preaching. I want you to be known for the great clothes you wear. I want you to be known for the beautiful temples that you build." He said, "I want you to have a reputation in this world as people who love others."
</p>

</TextPanel>

{/* RIGHT */}

<Cards>

<Card>
<IconWrap><FaPray/></IconWrap>
<Zoom direction="right" triggerOnce={false} duration={3000}>
<CardTitle>We exist to celebrate God's Presence</CardTitle>
</Zoom>
<CardText>The number one priority of our lives is fellowship with God.</CardText>
</Card>

<Card>
<IconWrap><FaBible/></IconWrap>
<Zoom direction="right" triggerOnce={false} duration={3000}>
<CardTitle>We exist to communicate God's word</CardTitle>
</Zoom>
<CardText>Sharing the good news and making God's wisdom known.</CardText>
</Card>

<Card>
<IconWrap><FaChalkboardTeacher/></IconWrap>
<Zoom direction="right" triggerOnce={false} duration={3000}>
<CardTitle>We exist to educate God's people</CardTitle>
</Zoom>
<CardText>Growing believers into spiritual maturity through discipleship.</CardText>
</Card>

<Card>
<IconWrap><FaHeart/></IconWrap>
<Zoom direction="right" triggerOnce={false} duration={3000}>
<CardTitle>We exist to demonstrate God's Love</CardTitle>
</Zoom>
<CardText>Meeting needs with love in the church and community.</CardText>
</Card>

</Cards>

</Grid>

</Section>

)

}