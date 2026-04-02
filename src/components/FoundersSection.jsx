
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Zoom,Slide } from "react-awesome-reveal";
import p10a from '../Images/p10a.jpeg'
import p6 from '../Images/p6.jpeg'
import { useNavigate } from "react-router-dom";

/* =========================
ANIMATIONS
========================= */

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-10px)}
100%{transform:translateY(0)}
`;

const float2 = keyframes`
0%{transform:scale(1)}
50%{transform:scale(1.1)}
100%{transform:scale(1)}
`;

/* =========================
STYLED COMPONENTS
========================= */

const SectionWrapper = styled.div`
padding:80px 20px;
background:#f9f9f9;
`;

const SectionHeading = styled.h1`
text-align:center;
font-size:3rem;
font-weight:800;
margin-bottom:60px;

background-image: linear-gradient(135deg, rgb(255,65,179), rgb(67,61,248));
-webkit-background-clip: text;
background-clip: text;
color: transparent;
position: relative;

&::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: #ffd700;
  margin: 12px auto 0;
  border-radius: 2px;
}
`;

const Section = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:50px;
color:#1f2937;
position:relative;
z-index:1;
`;

/* =========================
CARD
========================= */

const Card = styled.div`
background:white;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.1);
flex:1 1 300px;
max-width:350px;
padding:30px;
text-align:center;
position:relative;
transition:0.4s;
&:hover{
transform:translateY(-10px);
box-shadow:0 20px 40px rgba(0,0,0,0.15);
}
`;

const Portrait = styled.img`
width:160px;
height:160px;
border-radius:50%;
object-fit:cover;
margin-bottom:20px;
border:4px solid #ffd700;
`;

const Name = styled.h3`
font-size:1.5rem;
font-weight:700;
margin-bottom:5px;
background-image: linear-gradient(135deg, rgb(255,65,179), rgb(67,61,248));
-webkit-background-clip: text;
background-clip: text;
color: transparent;
`;

const Position = styled.p`
font-weight:500;
color:#4b5563;
margin-bottom:20px;
`;

const BioButton = styled.button`
padding:10px 20px;
border:none;
border-radius:10px;
background:#ffd700;
color:#1f2937;
font-weight:600;
cursor:pointer;
transition:0.3s;
/* ✅ Correct animation usage */
animation: ${float2} 3s ease-in-out infinite;
&:hover{
background:#fbbf24;
}
`;

/* =========================
MODAL
========================= */

const ModalOverlay = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
z-index:10000;
opacity: ${(props) => (props.show ? 1 : 0)};
pointer-events: ${(props) => (props.show ? "auto" : "none")};
transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
background:white;
padding:40px;
border-radius:20px;
max-width:800px;
max-height:80vh;
overflow-y:auto;
position:relative;
box-shadow:0 20px 50px rgba(0,0,0,0.2);
transform: translateY(${(props) => (props.show ? "0" : "-50px")});
transition: transform 0.3s ease;

h2{
background-image: linear-gradient(135deg, rgb(255,65,179), rgb(67,61,248));
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
`;

const CloseButton = styled.button`
position:absolute;
top:20px;
right:20px;
background:transparent;
border:none;
font-size:1.5rem;
cursor:pointer;
color:#1f2937;
`;

/* =========================
FOUNDERS DATA
========================= */

const founders = [
  {
    name: "Bishop Taiwo Kuku",
    route:"/bishop",
    position: "Founder & General Overseer, Faith and Miracle Center Worldwide",
    image: p10a,
    bio: `Bishop Taiwo Kuku is the Founder and General Overseer of  The Faith and Miracle Center (FMC) Worldwide, an apostolic ministry with a growing global presence and church expressions in the United States and Nigeria. He is widely regarded as a dynamic preacher, prayer leader, and apostolic–prophetic voice called to equip believers and strengthen the global Church through the uncompromised teaching of God’s Word and the power of strategic prayer.
With a divine mandate to minister to the whole person—spirit, soul, and body, Bishop Kuku’s ministry emphasizes prayer, faith, family, and spiritual maturity. His teaching is deeply rooted in Scripture and marked by clarity, prophetic insight, and practical application, empowering believers to live disciplined, purpose-driven lives and walk in sustained spiritual victory.
Bishop Kuku carries a strong anointing in the ministry gifts of healing, deliverance, prophecy, preaching, and teaching. Through his apostolic leadership, many have experienced spiritual transformation, deliverance, and renewed alignment with their God-given destiny.
As a passionate advocate for spiritual formation and leadership development, Bishop Kuku is committed to raising a generation of believers who pray strategically, lead with integrity, and engage life’s battles with biblical authority. His message calls the Church beyond emotional Christianity into intentional discipleship, covenant living, and consistent spiritual growth.
Bishop Taiwo Kuku has ministered extensively across Africa, Europe, and the United States, speaking at international conferences, apostolic gatherings, leadership intensives, and prayer convocations. His ministry equips churches and leaders to confront real-life challenges with faith, wisdom, and scriptural authority.
His television broadcast, “Miracle Moments,” airs on Christian television networks in Atlanta, Georgia, reaching audiences with life-transforming messages of prayer, faith, healing, and supernatural breakthrough.
Bishop Taiwo Kuku resides in Atlanta, Georgia, with his wife, Pastor Sade Kuku, and their two children. Together, they are devoted to advancing the Kingdom of God and building a global community of believers committed to prayer, spiritual discipline, and fulfilling their divine purpose.`
  },
  {
    name: "Pastor Sade Kuku",
    route:"/pastor_sade_kuku",
    position: "Co-Pastor & Co-Founder, Faith and Miracle Center Worldwide",
    image: p6,
    bio: `Pastor Sade Kuku is a woman of faith, wisdom, and divine purpose. She serves as the Co-Pastor and Co-Founder of Faith and Miracle Center Global, headquartered in Atlanta, Georgia, USA, alongside her husband, Bishop Taiwo Kuku, Founder and General Overseer of Faith and Miracle Center Global. Together, they bring healing, hope, and transformation to lives through the preaching of the Word and the demonstration of God’s power.
Pastor Sade is a Certified Women’s Biblical Counselor and Certified Life Coach, blending spiritual insight with practical guidance to help believers walk in wholeness. She is also a Registered Nurse and a Midwife with a Master of Science in Nursing and Public Health (MSNPH)—credentials that reveal her compassion for both physical and spiritual healing. Her education includes training from several theological institutions, including the Moody Bible Institute, where she deepened her foundation in ministry and biblical leadership.
A visionary leader, Pastor Sade is the President and Founder of Women of Faith Global and the Billion Women Global, global movements designed to empower, equip, and unite women to fulfill their divine purpose. Through conferences, mentorship programs, and prayer fellowships, she has inspired countless women to rise as vessels of excellence, virtue, and influence in their homes, churches, and communities.
Known for her sweet spirit, Pastor Sade is a conference speaker, teacher, and counselor. She is widely sought after to conduct seminars on the spiritual growth and development of godly, purposeful women. Her message is rooted in Scripture and delivered with grace , encourage believers to walk in faith, integrity, and confidence in God’s promises.
A prolific writer and biblical researcher, Pastor Sade has authored several inspiring books and devotionals that reveal her depth in the Word of God. As an empowerment specialist and agent of change, she continues to mentor emerging leaders and guide those seeking transformation and clarity in their spiritual journey. Her prophetic ministry is marked by compassion, discernment, and accuracy, bringing healing and deliverance to many.
Pastor Sade Kuku is joyfully married to her favorite pastor, teacher, mentor and best friend, Bishop Taiwo Kuku. They are blessed with two wonderful children, Joshua and Esther.
Above all, Pastor Sade is a woman of prayer and a prophetess called by God to minister hope, encouragement, and restoration. Her passion is to see hurting people delivered and transformed by the power of the Holy Spirit. She lives by the truth of Isaiah 61:1, bringing good news to the brokenhearted and liberty to the captives.
Her life is a radiant testimony of faith in action—proof that when a woman surrenders fully to God, she becomes an instrument of healing and change in her generation.
“Give her of the fruit of her hands; and let her own works praise her in the gates.” — Proverbs 31`
  }
];

/* =========================
COMPONENT
========================= */

export default function FoundersSection() {
  const [activeBio, setActiveBio] = React.useState(null);
const navigate = useNavigate();


  return (
    <SectionWrapper>
        <Zoom duration={4000} triggerOnce={false}>
      <SectionHeading>Meet the Founders</SectionHeading>
      </Zoom>
      <Section>
        {founders.map((founder, idx) => (
          <Card key={idx}>
            <Portrait src={founder.image} alt={founder.name} />
            <Zoom duration={4000} triggerOnce={false}>
            <Name>{founder.name}</Name>
            </Zoom>
            <Position>{founder.position}</Position>
            <BioButton onClick={() => navigate(`${founder.route}`)}>
              {founder.name}'s Biography
            </BioButton>
          </Card>
        ))}
      </Section>

      {activeBio !== null && (
        <ModalOverlay show={activeBio !== null} onClick={() => setActiveBio(null)}>
          <ModalContent show={activeBio !== null} onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setActiveBio(null)}>&times;</CloseButton>
            <h2>{founders[activeBio].name}</h2>
            <p style={{whiteSpace:"pre-line"}}>{founders[activeBio].bio}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </SectionWrapper>
  );
}