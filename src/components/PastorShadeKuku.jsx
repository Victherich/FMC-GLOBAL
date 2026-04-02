import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";
import insp from '../Images/p5.jpeg'
import p10a from '../Images/p10a.jpeg'
import sadeImg from '../Images/p9.jpeg'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255,77,166,0.3); }
  50% { box-shadow: 0 0 25px rgba(255,77,166,0.6); }
  100% { box-shadow: 0 0 10px rgba(255,77,166,0.3); }
`;

const Page = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
`;

const Hero = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: url(${insp}) center/cover no-repeat;
  background-position:top;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.75);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
  color: #ff4da6;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
`;

const FemaleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin: 20px 0;
  object-fit: cover;
  border: 4px solid #ff4da6;
  animation: ${float} 4s ease-in-out infinite;
`;

const Section = styled.section`
  padding: 20px 20px;
  max-width: 1100px;
  margin: auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ff4da6;
`;

const DetailText = styled.div`
  font-size: 0.98rem;
  line-height: 2;
  white-space: pre-line;
  background: rgba(255,255,255,0.05);
  padding: 40px;
  border-radius: 25px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 50px rgba(255,77,166,0.15);
  animation: ${glow} 5s infinite ease-in-out;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.06);
  padding: 25px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 20px rgba(255,77,166,0.4);
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Icon = styled.p`
  color: #ff4da6;
  font-size: 1.5rem;
  transition: 0.3s;
  cursor:pointer;

  &:hover {
    transform: scale(1.3);
    color: #fff;
  }
`;

const Quote = styled.div`
  margin-top: 40px;
  font-style: italic;
  text-align: center;
  font-size: 1.2rem;
  color: #ffd1e8;
`;

export default function FounderPage() {
  return (
    <Page>

      {/* HERO */}
      <Hero>
        <HeroContent>
          <Zoom triggerOnce>
            <FemaleImage src={sadeImg} alt="Pastor Sade Kuku" />
          </Zoom>

          <Fade direction="up" triggerOnce>
            <Title>Pastor Sade Kuku</Title>
            <Subtitle>Co-Pastor & Co-Founder, Faith and Miracle Center Global</Subtitle>
          </Fade>

          <Socials>
            <Icon  onClick={()=>window.open( "https://www.facebook.com/sade.kuku?mibextid=ZbWKwL", "_blank")}><FaFacebook /></Icon>
            <Icon onClick={()=>window.open( "https://www.instagram.com/pastorsadekuku?igsh=dnlieXI1Z2J5eDRh", "_blank")}><FaInstagram /></Icon>
            <Icon onClick={()=>window.open( "https://www.youtube.com/@sadek4001", "_blank")}><FaYoutube /></Icon>
            <Icon onClick={()=>window.open( "https://www.tiktok.com/@pastorsadekuku?_r=1&_t=ZS-95BPbaHyJgj", "_blank")}><FaTiktok /></Icon>
          </Socials>
        </HeroContent>
      </Hero>

      {/* BIO */}
      <Section>
        <Heading style={{marginTop:"20px"}}>Biography</Heading>
        <Slide direction="up" triggerOnce>
          <DetailText>
Pastor Sade Kuku is a woman of faith, wisdom, and divine purpose. She serves as the Co-Pastor and Co-Founder of Faith and Miracle Center Global, headquartered in Atlanta, Georgia, USA, alongside her husband, Bishop Taiwo Kuku.

Pastor Sade is a Certified Women’s Biblical Counselor, Certified Life Coach, Registered Nurse, and Midwife with a Master of Science in Nursing and Public Health (MSNPH). She is also trained at the Moody Bible Institute, strengthening her biblical foundation.

She is the President and Founder of Women of Faith Global and Billion Women Global, movements dedicated to empowering women to fulfill their divine purpose. Through conferences, mentorship, and prayer fellowships, she impacts women globally.

Known for her sweet spirit, she is a speaker, teacher, and counselor, guiding women into spiritual growth and purposeful living. She is also a prolific writer and prophetic voice, bringing healing, clarity, and transformation.

Above all, she is a woman of prayer, a prophetess called by God to bring hope, restoration, and deliverance to many.
          </DetailText>
        </Slide>

        <Quote>
          “Give her of the fruit of her hands; and let her own works praise her in the gates.” — Proverbs 31
        </Quote>
      </Section>

      {/* MINISTRY IMPACT */}
      <Section>
        <Heading>Ministry Impact</Heading>
        <Grid>
          <Fade cascade>
            <Card>Women of Faith Global</Card>
            <Card>Billion Women Global</Card>
            <Card>Global Conferences & Mentorship</Card>
            <Card>Prayer & Spiritual Counseling</Card>
            <Card>Prophetic Ministry & Teaching</Card>
            <Card>Books & Devotionals</Card>
          </Fade>
        </Grid>
      </Section>

      {/* FAMILY */}
      <Section>
        <Heading>Family</Heading>
        <Fade>
          <DetailText>
Pastor Sade Kuku is joyfully married to Bishop Taiwo Kuku. Together they are blessed with two children, Joshua and Esther. Their family stands as a testimony of faith, unity, and service to God.
          </DetailText>
        </Fade>
      </Section>

    </Page>
  );
}
