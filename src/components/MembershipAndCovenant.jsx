import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

/* =========================
ANIMATIONS
========================= */

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-10px)}
100%{transform:translateY(0)}
`;

/* =========================
CONTAINER
========================= */

const Container = styled.section`
display:flex;
flex-wrap:wrap;
gap:50px;
padding:80px 20px;
background: linear-gradient(180deg,#0f172a,#020617);
color:white;
justify-content:center;
`;

/* =========================
CARD STYLES
========================= */

const Card = styled.div`
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.1);
border-radius:20px;
flex:1 1 500px;
max-width:600px;
padding:40px;
position:relative;
overflow:auto;
max-height:700px; /* scroll if too long */
transition:.4s;
box-shadow:0 10px 30px rgba(0,0,0,.5);

&:hover{
transform:translateY(-10px);
border-color:#ffd700;
box-shadow:0 20px 50px rgba(255,215,0,.3);
}
`;

/* =========================
CARD HEADER
========================= */

const CardHeader = styled.div`
margin-bottom:25px;
text-align:center;
`;

const CardTitle = styled.h2`
font-size:2rem;
font-weight:800;
margin-bottom:8px;

span{
color:#ffd700;
}
`;

const CardSubtitle = styled.p`
color:#cbd5f5;
line-height:1.6;
font-weight:500;
`;

/* =========================
CARD BODY
========================= */

const List = styled.ol`
margin-top:20px;
padding-left:20px;
line-height:1.7;
`;

const ListItem = styled.li`
margin-bottom:20px;
`;

const Paragraph = styled.p`
margin-top:5px;
color:#cbd5e1;
`;

/* =========================
GLOW ELEMENTS
========================= */

const GlowCircle = styled.div`
position:absolute;
top:-50px;
right:-50px;
width:200px;
height:200px;
border-radius:50%;
background:radial-gradient(circle,rgba(255,215,0,.3),transparent);
filter:blur(100px);
animation:${float} 5s infinite;
z-index:0;
`;

/* =========================
COMPONENT
========================= */

export default function MembershipAndCovenant(){

  return (
    <Container>

      {/* FMC Membership Commitment */}
      <Fade direction="up" triggerOnce>
      <Card>
        <GlowCircle />
        <CardHeader>
          <CardTitle>FMC Membership <span>Commitment</span></CardTitle>
          <CardSubtitle>
            The Culture of Our Church
            <br />
            Members of Faith and Miracle Center Worldwide are encouraged to embrace the following commitments as part of their spiritual journey and participation in the life of the church.
          </CardSubtitle>
        </CardHeader>

        <List>
          <ListItem>
            Commitment to Christ
            <Paragraph>We pursue a personal and growing relationship with Jesus Christ through faith and obedience.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Prayer
            <Paragraph>We cultivate a disciplined prayer life, seeking God’s guidance and presence daily.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to God’s Word
            <Paragraph>We study and apply the Scriptures, allowing God’s Word to shape our decisions and conduct.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Worship
            <Paragraph>We faithfully gather with the church community to worship God and grow together spiritually.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Spiritual Growth
            <Paragraph>We pursue ongoing discipleship and spiritual development.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Service
            <Paragraph>We use our gifts and abilities to serve the church and support its mission.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Unity
            <Paragraph>We seek to maintain peace, respect, and love within the body of Christ.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Integrity
            <Paragraph>We strive to live lives that reflect honesty, humility, and Christian character.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Generosity
            <Paragraph>We support the ministry through faithful stewardship of our time, talents, and resources.</Paragraph>
          </ListItem>

          <ListItem>
            Commitment to Kingdom Impact
            <Paragraph>We seek to influence our families, communities, and the world with the message and love of Jesus Christ.</Paragraph>
          </ListItem>
        </List>
      </Card>
      </Fade>

      {/* FMC Church Covenant */}
      <Fade direction="up" triggerOnce>
      <Card>
        <GlowCircle />
        <CardHeader>
          <CardTitle>The FMC Church <span>Covenant</span></CardTitle>
          <CardSubtitle>
            Faith and Miracle Center Worldwide
          </CardSubtitle>
        </CardHeader>

        <Paragraph>
          As members of Faith and Miracle Center Worldwide, we affirm our commitment to follow Jesus Christ and to live according to the teachings of the Holy Scriptures.
        </Paragraph>

        <Paragraph>
          We covenant together to pursue a life of faith, prayer, and obedience to God’s Word. We will seek to grow in spiritual maturity through regular prayer, study of Scripture, and participation in the life of the church.
        </Paragraph>

        <Paragraph>
          We commit ourselves to living with integrity, humility, and love toward one another, recognizing that we are part of the body of Christ. We will strive to maintain unity within the church and demonstrate the character of Christ in our words, actions, and relationships.
        </Paragraph>

        <Paragraph>
          We pledge to support the mission and vision of Faith and Miracle Center Worldwide by faithfully participating in worship gatherings, contributing our time, gifts, and resources for the advancement of God’s kingdom.
        </Paragraph>

        <Paragraph>
          We commit to strengthening our families, encouraging fellow believers, and serving our communities with compassion and grace.
        </Paragraph>

        <Paragraph>
          By God’s help and the guidance of the Holy Spirit, we dedicate ourselves to living lives that honor Christ and reflect His love to the world.
        </Paragraph>
      </Card>
      </Fade>

    </Container>
  )
}