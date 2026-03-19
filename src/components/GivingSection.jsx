import React from "react";
import styled, { keyframes } from "styled-components";
import { Flip, Slide, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import givewithjoy from '../Images/givewithjoy.png'

/* ---------- ANIMATIONS ---------- */

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-10px)}
100%{transform:translateY(0)}
`;

/* ---------- HERO ---------- */
const Hero = styled.section`
  padding: 120px 20px;
  text-align: center;
  color: white;
  background-image: url(${givewithjoy});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  // Overlay
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); // adjust opacity to make text more visible
    z-index: 1;
  }

  // Ensure text is above overlay
  > * {
    position: relative;
    z-index: 2;
  }
`;

const Glow = styled.div`
  position:absolute;
  width:300px;
  height:300px;
  background:radial-gradient(circle,rgba(212,175,55,0.3),transparent);
  top:-50px;
  left:50%;
  transform:translateX(-50%);
  filter:blur(60px);
`;

const HeroTitle = styled.h1`
  font-size:3rem;

  span{
    color:#d4af37;
  }
`;

const HeroText = styled.p`
  margin-top:15px;
  color:#cbd5e1;
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
`;

const Button = styled.button`
  margin-top:25px;
  padding:14px 30px;
  border:none;
  border-radius:30px;

  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  font-weight:600;
  cursor:pointer;

  &:hover{
    transform:scale(1.05);
  }
`;

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding:80px 20px;
  background:#f8fafc;
`;

const Container = styled.div`
  max-width:1200px;
  margin:auto;
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
  padding:30px;
  border-radius:18px;
  text-align:center;

  box-shadow:0 10px 30px rgba(0,0,0,0.08);

  transition:.3s;

  &:hover{
    transform:translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size:2.5rem;
  margin-bottom:15px;
  animation:${float} 4s ease-in-out infinite;
`;

const Title = styled.h3`
  color:#001233;
  margin-bottom:10px;
`;

const Text = styled.p`
  color:#475569;
  font-size:0.95rem;
  line-height:1.6;
`;

/* ---------- SCRIPTURE ---------- */

const Scripture = styled.div`
  margin-top:60px;
  padding:40px;
  text-align:center;
  background:white;
  border-radius:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  font-style:italic;
  color:#334155;
`;

/* ---------- FINAL CTA ---------- */

const CTA = styled.div`
  margin-top:70px;
  padding:60px 20px;
  text-align:center;
  background:linear-gradient(135deg,#001233,#003566);
  color:white;
  border-radius:20px;
`;

const CTATitle = styled.h2`
  span{
    color:#d4af37;
  }
`;

const CTAText = styled.p`
  margin:15px 0;
  color:#cbd5e1;
`;

/* ---------- COMPONENT ---------- */

export default function GivingSection(){




// const scrollToGive = () => {
//   const section = document.getElementById("give");
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

const scrollToGive = () => {
  const section = document.getElementById("give");

  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.pageYOffset;
  const startY = window.pageYOffset;
  const distance = targetY - startY;

  const duration = 2000; // ⬅️ increase this for slower scroll (e.g. 1500, 2000)

  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easeInOut (smooth acceleration + deceleration)
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

return(

<div>

{/* ---------- HERO ---------- */}

<Hero>

<Glow/>

<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
Give with <span>Joy</span>
</HeroTitle>
</Flip>

<Slide direction="right" triggerOnce={false} duration={4000}>
<HeroText>
Giving is an act of worship, faith, and love.
Through your generosity, lives are touched and God's work advances.
</HeroText>
</Slide>

<Button onClick={scrollToGive}>
Start Giving
</Button>

</Hero>


{/* ---------- TYPES OF GIVING ---------- */}

<Section>

<Container>



<Grid>

<Card>
<Icon>🙏</Icon>
<Slide direction="right" triggerOnce={false} duration={4000}>
<Title>Tithes</Title>
</Slide>
<Text>
Honor God with your substance. Tithing is a covenant practice
that opens the door to divine provision and blessings.
</Text>
</Card>

<Card>
<Icon>🎁</Icon>
<Slide direction="right" triggerOnce={false} duration={4000}>
<Title>Offerings</Title>
</Slide>
<Text>
Give freely from your heart as an expression of gratitude
and worship to God.
</Text>
</Card>

<Card>
<Icon>🌱</Icon>
<Slide direction="right" triggerOnce={false} duration={4000}>
<Title>Special Seeds</Title>
</Slide>
<Text>
Sow into specific needs and believe God for a harvest
in every area of your life.
</Text>
</Card>

</Grid>



{/* ---------- SCRIPTURE ---------- */}

<Zoom triggerOnce>

<Scripture>
“Give, and it will be given to you: good measure, pressed down,
shaken together, and running over…” — Luke 6:38
</Scripture>

</Zoom>


{/* ---------- FINAL CTA ---------- */}

<Zoom triggerOnce ={false} duration={4000}>

<CTA>

<CTATitle>
Be a Blessing <span>Today</span>
</CTATitle>

<CTAText>
Your giving makes a difference. Partner with us in spreading
faith, hope, and love.
</CTAText>

<Button onClick={scrollToGive}>
Give Now
</Button>

</CTA>

</Zoom>

</Container>

</Section>

</div>

)

}