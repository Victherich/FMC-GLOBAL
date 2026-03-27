import React from "react";
import styled, { keyframes } from "styled-components";
import { Zoom, } from "react-awesome-reveal";

/* =========================
ANIMATIONS
========================= */

const fadeUp = keyframes`
0%{opacity:0; transform:translateY(50px)}
100%{opacity:1; transform:translateY(0)}
`;

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-12px)}
100%{transform:translateY(0)}
`;

const glow = keyframes`
0%{opacity:0.4}
50%{opacity:0.8}
100%{opacity:0.4}
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

/* Glow background */

const Glow = styled.div`
position:absolute;
width:500px;
height:500px;
background:radial-gradient(circle, rgba(255,65,179,0.15), transparent);
top:-150px;
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

const Title = styled.h1`
font-size:3.5rem;
font-weight:900;

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
margin-top:15px;
color:#666;
font-size:1.1rem;
`;

/* =========================
GRID
========================= */

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:30px;
max-width:1200px;
margin:auto;
`;

/* =========================
CARD
========================= */

const Card = styled.div`
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 15px 40px rgba(0,0,0,0.08);
transition:0.4s;
position:relative;
overflow:hidden;
animation:${fadeUp} 1s ease;

&:hover{
transform:translateY(-10px);
box-shadow:0 25px 60px rgba(0,0,0,0.15);
}

&::before{
content:"";
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
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

const CardTitle = styled.h3`
font-size:1.3rem;
margin-bottom:15px;
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

const Text = styled.p`
font-size:0.95rem;
line-height:1.8;
color:#333;
white-space:pre-line;
`;

const Scripture = styled.div`
margin-top:15px;
font-size:0.85rem;
color:#777;
font-style:italic;
`;

/* =========================
COMPONENT
========================= */

export default function WhatWeBelieve(){

return(

<Section>

<Glow/>

<Header>
    <Zoom triggerOnce={false} duration={4000}>
<Title>What We Believe</Title>
</Zoom>
<Zoom direction="left" triggerOnce={false} duration={4000}>
<Subtitle>Our foundation is built on the truth of God's Word</Subtitle>
</Zoom>
</Header>

<Grid>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT GOD</CardTitle>
</Zoom>
<Text>
God is the creator and ruler of the universe. He has eternally existed in three persons - the Father, the Son, and the Holy Spirit These three are co-equal and are one God.
</Text>
<Scripture>
Genesis 1:1, 26, 27; 3:22 | Peter 1:2
Psalm 90:2 2 Corinthians 13:14 Matthew 28:19
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT MAN</CardTitle>
</Zoom>
<Text>
Man is made in the spiritual image of God, to be like him in character. He is the supreme object of God's creation. Although man has tremendous potential for good, he is marred by an attitude of disobedience toward God called "sin." This attitude separates man from God.
</Text>
<Scripture>
Genesis 1:27 Romans 3:23
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT ETERNITY</CardTitle>
</Zoom>
<Text>
Man was created to exist forever. He will either exist eternally separated from God by sin or in union with God through forgive- ness and salvation. To be eternally separated from God is hell. To be eternally in union with Him is eternal life. Heaven and hell are places of eternal existence.
</Text>
<Scripture>
John 3:16 Romans 6:23 Revelation 20:15 Matthew 25:31-46 John 5:11-13
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT JESUS CHRIST</CardTitle>
</Zoom>
<Text>
Jesus Christ is the Son of God. He is co-equal with the Father. Jesus lived a sinless human life and offered himself as the perfect sacrifice for the sins of all men by dying on a cross. He arose from the dead after three days to demonstrate His power over sin and death. He ascended to heaven's glory and will return again to earth to reign as King of Kings and Lord of Lords.
</Text>
<Scripture>
Matthew 1:22, 23 Hebrews 4:14, 15 I Corinthians 15:3,4 Acts 1:9-11
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT SALVATION</CardTitle>
</Zoom>
<Text>
Salvation is a gift from God to man. Man can never make up for his sin by self-improvment or good works-only by trusting in Jesus Christ as God's offer of forgiveness can man be saved from sin's penalty. Eternal life begins the moment one receives Jesus Christ into his life by faith.
</Text>
<Scripture>
Romans 6:23 Ephesians 2:8, 9 John 14:6
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT ETERNAL SECURITY</CardTitle>
</Zoom>
<Text>
Because God gives man eternal life through Jesus Christ, the believer is secure in salvation for eternity. Salvation is maintained by the grace and power of God, not by the self-effort of the Christian.
</Text>
<Scripture>
John 10:29 2 Timothy 1:12 Hebrews 7:25
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT THE HOLY SPIRIT</CardTitle>
</Zoom>
<Text>
The Holy Spirit is equal with the Father and the Son as God. He is present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with power for living, understanding of spiritual truth, and guidance in doing what is right.
</Text>
<Scripture>
Acts 1:8 Galatians 5:25 John 16:7-13
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT THE BIBLE</CardTitle>
</Zoom>
<Text>
The Bible is God's word to all men. It was written by human authors, under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is truth without any mixture of error.
</Text>
<Scripture>
2 Timothy 3:16 Psalm 119:105
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT BAPTISM</CardTitle>
</Zoom>
<Text>
Baptism by immersion symbolizes the death, burial, and resurrect- ion of Jesus and is your public declaration that you have accepted Jesus Christ as your personal Savior. Baptism does not save you, but shows the world that you have already been saved.
</Text>
<Scripture>
Colossians 2:12 Acts 2:41 Matthew 28:19-20
</Scripture>
</Card>

<Card>
    <Zoom direction="right" triggerOnce={false} duration={4000}>
<CardTitle>ABOUT COMMUNION</CardTitle>
</Zoom>
<Text>
Communion, or the Lord's Supper, is an ordinance given to all believers by Jesus Christ to remember His sacrifice for us and to symbolize the new covenant. The elements of bread and wine or juice are symbols of Christ's broken body and shed blood.
</Text>
<Scripture>
Matthew 26:26-30 I Corinthians 11:23-29 Luke 22:19-20
</Scripture>
</Card>

</Grid>

</Section>

)

}