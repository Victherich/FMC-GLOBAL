import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import insp from '../Images/insp.png'
import p10a from '../Images/p10a.jpeg'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
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
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.7);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.85;
`;

const Image = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin: 20px 0;
  object-fit: cover;
  border: 4px solid gold;
  animation: ${float} 4s ease-in-out infinite;
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: gold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
`;

const DetailText = styled.div`
  font-size: 0.8rem;
  line-height: 2;
  white-space: pre-line;
  background: rgba(255,255,255,0.05);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Icon = styled.a`
  color: gold;
  font-size: 1.5rem;
  transition: 0.3s;
  cursor:pointer;

  &:hover {
    transform: scale(1.2);
    color: #fff;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  background: #000;
  font-size: 0.9rem;
`;

export default function Bishop() {
  return (
    <Page>
      <Hero>
        <HeroContent>
          <Zoom triggerOnce>
            <Image src={p10a} alt="Bishop Taiwo Kuku" />
          </Zoom>

          <Fade direction="up" triggerOnce>
            <Title>Bishop Taiwo Kuku</Title>
            <Subtitle>Founder & General Overseer, FMC Worldwide</Subtitle>
          </Fade>

          <Socials>
            <Icon onClick={()=>window.open("https://www.facebook.com/bishoptai?mibextid=ZbWKwL", "_blank")}><FaFacebook /></Icon>
            {/* <Icon onClick={()=>window.open('', "_blank")}><FaInstagram /></Icon> */}
            {/* <Icon onClick={()=>window.open('', "_blank")}><FaYoutube /></Icon> */}
            {/* <Icon onClick={()=>window.open('', "_blank")}><FaTwitter /></Icon> */}
          </Socials>
        </HeroContent>
      </Hero>

      <Section>
        <Slide direction="up" triggerOnce>
          <Heading>About the Founder</Heading>
          <Text>
            Bishop Taiwo Kuku is the Founder and General Overseer of The Faith and Miracle Center (FMC) Worldwide, an apostolic ministry with a growing global presence. He is a dynamic preacher, prayer leader, and apostolic–prophetic voice called to equip believers through God’s Word and prayer.
          </Text>
        </Slide>
      </Section>

      <Section>
        <Heading>Ministry Impact</Heading>
        <Grid>
          <Fade cascade>
            <Card>Healing & Deliverance Ministry</Card>
            <Card>Global Conferences & Teachings</Card>
            <Card>Leadership Development</Card>
            <Card>Prayer & Apostolic Training</Card>
          </Fade>
        </Grid>
      </Section>

      <Section>
        <Slide direction="up" triggerOnce>
          <Heading>Global Reach</Heading>
          <Text>
            Bishop Kuku has ministered across Africa, Europe, and the United States, equipping leaders and transforming lives through powerful teachings and prophetic ministry.
          </Text>
        </Slide>
      </Section>

      <Section>
        <Heading>Full Biography</Heading>
        <Slide direction="up" triggerOnce>
          <DetailText>
Bishop Taiwo Kuku is the Founder and General Overseer of The Faith and Miracle Center (FMC) Worldwide, an apostolic ministry with a growing global presence and church expressions in the United States and Nigeria. He is widely regarded as a dynamic preacher, prayer leader, and apostolic–prophetic voice called to equip believers and strengthen the global Church through the uncompromised teaching of God’s Word and the power of strategic prayer.
With a divine mandate to minister to the whole person—spirit, soul, and body, Bishop Kuku’s ministry emphasizes prayer, faith, family, and spiritual maturity. His teaching is deeply rooted in Scripture and marked by clarity, prophetic insight, and practical application, empowering believers to live disciplined, purpose-driven lives and walk in sustained spiritual victory.
Bishop Kuku carries a strong anointing in the ministry gifts of healing, deliverance, prophecy, preaching, and teaching. Through his apostolic leadership, many have experienced spiritual transformation, deliverance, and renewed alignment with their God-given destiny.
As a passionate advocate for spiritual formation and leadership development, Bishop Kuku is committed to raising a generation of believers who pray strategically, lead with integrity, and engage life’s battles with biblical authority. His message calls the Church beyond emotional Christianity into intentional discipleship, covenant living, and consistent spiritual growth.
Bishop Taiwo Kuku has ministered extensively across Africa, Europe, and the United States, speaking at international conferences, apostolic gatherings, leadership intensives, and prayer convocations. His ministry equips churches and leaders to confront real-life challenges with faith, wisdom, and scriptural authority.
His television broadcast, “Miracle Moments,” airs on Christian television networks in Atlanta, Georgia, reaching audiences with life-transforming messages of prayer, faith, healing, and supernatural breakthrough.
Bishop Taiwo Kuku resides in Atlanta, Georgia, with his wife, Pastor Sade Kuku, and their two children. Together, they are devoted to advancing the Kingdom of God and building a global community of believers committed to prayer, spiritual discipline, and fulfilling their divine purpose.
          </DetailText>
        </Slide>
      </Section>

      <Section>
        <Heading>Family & Life</Heading>
        <Text>
          He resides in Atlanta, Georgia, with his wife, Pastor Sade Kuku, and their children. Together, they are devoted to advancing God’s Kingdom globally.
        </Text>
      </Section>

      <Section>
        <Heading>Contact & Connect</Heading>
        <Text>Email: info@fmcworldwide.org</Text>
        <Text>Phone: +1 (000) 000-0000</Text>
        <Socials>
          <Icon href="#"><FaFacebook /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
          <Icon href="#"><FaYoutube /></Icon>
          <Icon href="#"><FaTwitter /></Icon>
        </Socials>
      </Section>

    </Page>
  );
}
