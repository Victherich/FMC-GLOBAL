import React from "react";
import styled, { keyframes } from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import Salvationimg from '../Images/Salvationimg.png'
import { useLocation } from "react-router-dom";

/* =========================
ANIMATIONS
========================= */

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-20px)}
100%{transform:translateY(0)}
`;

const fade = keyframes`
0%{opacity:0; transform:translateY(40px)}
100%{opacity:1; transform:translateY(0)}
`;

const glow = keyframes`
0%{opacity:.2}
50%{opacity:.6}
100%{opacity:.2}
`;

/* =========================
SECTION
========================= */

const Section = styled.section`
padding:120px 20px;
background:linear-gradient(180deg,#ffffff,#eef2ff);
position:relative;
overflow:hidden;
background-image:url(${Salvationimg});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`;

/* floating lights */

const Orb = styled.div`
position:absolute;
width:200px;
height:200px;
border-radius:50%;
background:radial-gradient(circle, rgba(255,65,179,0.25), transparent);
filter:blur(60px);
animation:${float} 10s infinite ease-in-out;

top:${props => props.top};
left:${props => props.left};
`;

/* =========================
HEADER
========================= */

const Header = styled.div`
text-align:center;
margin-bottom:80px;
animation:${fade} 1s ease;
`;

const Title = styled.h1`
font-size:3.8rem;
font-weight:900;

background:linear-gradient(135deg,#ff41b3,#433df8);
-webkit-background-clip:text;
color:transparent;
`;

const Subtitle = styled.p`
color:#555;
max-width:700px;
margin:15px auto 0;
`;

/* =========================
LAYOUT
========================= */

const Wrapper = styled.div`
max-width:1200px;
margin:auto;
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;

@media(max-width:900px){
grid-template-columns:1fr;
}
`;

/* =========================
LEFT SIDE (STORY)
========================= */

const Story = styled.div`
display:flex;
flex-direction:column;
gap:25px;
animation:${fade} 1s ease;
`;

const StoryBox = styled.div`
background:rgba(255,255,255,0.5);
padding:25px;
border-radius:20px;
box-shadow:0 15px 40px rgba(0,0,0,0.08);
line-height:1.9;
font-size:0.95rem;
`;

/* =========================
RIGHT SIDE (STEPS)
========================= */

const Steps = styled.div`
display:flex;
flex-direction:column;
gap:25px;
`;

const Step = styled.div`
padding:25px;
border-radius:20px;
// background:linear-gradient(135deg,#ffffff,#f9fafc);
box-shadow:0 15px 40px rgba(0,0,0,0.08);
animation:${fade} 1s ease;
background:rgba(255,255,255,0.5);
`;

const StepTitle = styled.h3`
font-weight:800;
margin-bottom:10px;
background:linear-gradient(135deg,#ff41b3,#433df8);
-webkit-background-clip:text;
color:transparent;
`;

const StepText = styled.p`
line-height:1.9;
font-size:0.95rem;
`;

/* =========================
PRAYER PANEL
========================= */

const PrayerPanel = styled.div`
margin-top:80px;
max-width:900px;
margin-left:auto;
margin-right:auto;

background:rgba(255,255,255,0.5);
backdrop-filter:blur(20px);
padding:50px;
border-radius:30px;
box-shadow:0 30px 80px rgba(0,0,0,0.15);
animation:${fade} 1s ease;
`;

const PrayerTitle = styled.h2`
text-align:center;
margin-bottom:20px;
font-weight:900;

background:linear-gradient(135deg,#ff41b3,#433df8);
-webkit-background-clip:text;
color:transparent;
`;

const PrayerText = styled.p`
line-height:2;
font-size:1rem;
`;

/* =========================
CELEBRATION
========================= */

const Celebration = styled.div`
text-align:center;
margin-top:40px;
font-size:1.4rem;
font-weight:800;
color:#111;
animation:${fade} 1s ease;
`;

/* =========================
FOOTER TEXT
========================= */

const Footer = styled.div`
max-width:900px;
margin:40px auto 0;
background:rgba(255,255,255,0.5);
padding:30px;
border-radius:20px;
box-shadow:0 15px 40px rgba(0,0,0,0.08);
line-height:1.9;
font-size:0.95rem;
`;

/* =========================
COMPONENT
========================= */

export default function SalvationExperience(){


    const location = useLocation();
    
  if(location.pathname==='/dashboard'|| location.pathname==='/login' || location.pathname==='/signup'){
    return;
}

return(

<Section>

<Orb top="10%" left="5%" />
<Orb top="60%" left="80%" />

<Header>
    <Zoom triggerOnce={false} duration={4000}>
<Title>Receive Salvation</Title>
</Zoom>

<Slide direction="left" duration={4000} triggerOnce={false}>
<Subtitle>

Take the time for just a moment to consider your eternity.
</Subtitle>
</Slide>
</Header>

<Wrapper>

<Story>
<StoryBox>
Take the time for just a moment to consider your eternity. Where will you go when this life is over? If there is a heaven, will you find the right way there? Open your mind and consider the truths in the bible. I know the bible was written by imperfect men, so logically that means the Bible is also imperfect, right?
Men have discovered many truths (ex. Gravity, the make up of oxygen, cellular and molecular structure, how to electronically put money in an account, etc...). Many of these truths cannot be seen, throughly explained or un- derstood by the population at large, yet we still accept them. The process we use to accept/believe things we cannot see or fully understand is called faith. The Bible states in Romans 12:3 that every person has been given some faith. Since God is seeking relationship, He has given us the choice to have Faith in all that the Holy Bible says about Him, in what every- one else about Him or none at all.
</StoryBox>
</Story>

<Steps>

<Step>
    <Slide direction="right" duration={4000} triggerOnce={false}>
<StepTitle>WHAT IS SALVATION?</StepTitle>
</Slide>
<StepText>
Salvation is a free gift from God. It means to be made whole and includes deliverance, prosperity, healing and victory.
</StepText>
</Step>

<Step>
    <Slide direction="right" duration={4000} triggerOnce={false}>
<StepTitle>WHAT DOES IT MEAN TO BE BORN-AGAIN?</StepTitle>
</Slide>
<StepText>
Being Born-Again or Saved means to accept Jesus Christ as Lord and Savior of your life.
According to 2 Corinthians 5:17, when you b become Born-Again you are saved and become a new creature in Christ.
</StepText>
</Step>

<Step>
    <Slide direction="right" duration={4000} triggerOnce={false}>
<StepTitle>HOW DO I BECOME BORN-AGAIN?</StepTitle>
</Slide>
<StepText>
You become Born-Again by believing and confessing. Romans 10.9 says, "That if thou shalt confess with thy mouth the Lord Jesus and shalt believe in thine heart that God has raised Him from the dead thou shalt be saved."
</StepText>
</Step>

</Steps>

</Wrapper>

<PrayerPanel>
<Zoom triggerOnce={false} duration={4000}>
<PrayerTitle>Prayer of Salvation</PrayerTitle>
</Zoom>

<PrayerText>
Dear God in Heaven,
I come to you in the name of Jesus. Your Word says, he that cometh to You, You would no wise cast out, but that You would take me in and I Thank You for it. You also said, that if I CONFESS with my mouth the Lord Jesus, and shall BELIEVE in my heart that God has raised Him (Jesus) from the dead, I shall be SAVED. Therefore, according to Your Word I believe in my heart that Jesus Christ is the Son of God. I believe that He (Jesus) was raised from the dead for my justification, and I confess Him now as my Lord and Savior.
I have now become the righteousness of God in Christ and I thank You for saving me in Jesus' name. Amen.
</PrayerText>

</PrayerPanel>

<Zoom triggerOnce={false} duration={4000}>
<Celebration>
CONGRATULATIONS! YOU ARE NOW BORN AGAIN! <br/>
Welcome to the Family of God!
</Celebration>
</Zoom>

<Footer>
Your next step is to let one of the pastors know about your decision today. A Baptism will be arranged for you. Then you start to attend church regularly. You must read the Bible so that you can grow in your love for God and the knowledge of His ways.

SCRIPTURE REFERENCES: Romans 10:9
"That if you confess with your mouth the Lord Jesus, and believe in your heart that God has raised Him from the dead, you shall be saved."

Romans 10:13
"For whoever call on the name of the Lord shall be saved."

Romans 5:10-12
"For if, when we were enemies, we were reconciled to God by the death of His Son, in whom we all have sinned."

2 Corinthians 5:17
"Therefore if any man be in Christ, he is a new creature: old things are passed away, behold all things are become new."
</Footer>

</Section>

)

}