import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";
import f1 from "../Images/children1.png";
import f2 from "../Images/children2.png";
import f3 from "../Images/children3.png";
import f4 from "../Images/ushers1.png";
import f5 from "../Images/ushers2.png";
import f6 from "../Images/ushers3.png";
import f7 from "../Images/prayer1.png";
import f8 from "../Images/prayer2.png";
import f9 from "../Images/prayer3.png";
import f10 from "../Images/youth1.png";
import f11 from "../Images/youth2.png";
import f12 from "../Images/youth3.png";
import f13 from "../Images/music1.png";
import f14 from "../Images/music2.png";
import f15 from "../Images/music3.png";
import f16 from "../Images/event1.png";
import f17 from "../Images/event2.png";
import f18 from "../Images/event3.png";
import f19 from "../Images/tech1.png";
import f20 from "../Images/tech2.png";
import f21 from "../Images/tech3.png";
import f22 from "../Images/evang1.png";
import f23 from "../Images/evang2.png";
import f24 from "../Images/evang3.png";
import f25 from "../Images/outreach1.png";
import f26 from "../Images/outreach2.png";
import f27 from "../Images/outreach3.png";


// Define ministries: each has 3 images
const ministries = [
  {
    title: "Kids of Faith Ministry",
    description: "Exists to challenge the children to grow in their relationship with God through worship, teaching, and a variety of fun activities along with careful and loving attention shared through bible based lessons and a hands-on approach.",
    images: [f1, f2, f3],
  },
  {
    title: "Ist Impression Ministry",
    description: "With a warm heart and encouraging spirit, the ushers welcome visitors, friends and members into the sanctuary of The Faith and Miracle Center. Their main focus is to serve in any capacity allowing worshipers to freely ex- perience the presence of God and leave with a new sense of purpose.",
    images: [f4, f5, f6], // repeated images
  },
  {
    title: "Act 2 Ministry",
    description: "Exists to utilize prayer as a vehicle to manifest signs and wonders in the earth, while inspiring spiritual, corporate, and personal growth. Prayers released will transform, heal, encourage, restore, as well as guide individuals to walk in power and authority for the prosperity of their lives.",
    images: [f7, f8, f9], // repeated images
  },
  {
    title: "Youth & Young Adults Ministry",
    description: "Exists to raise up a generation of leaders that will know their calling and destiny. This generation will be empower- ed to impact their world as leaders with a biblical word view.",
    images: [f10, f11, f12],
  },
  {
    title: "Praise and Worship Ministry",
    description: "Exists to usher God's people into his presence allowing individuals an opportunity to experience his manifestation. Our goal is to create a powerful life changing experience that breaks yokes, destroys chains and binds the hand of the enemy, so that victory is declared.",
    images: [f13, f14, f15],
  },
  {
    title: "Special Events Ministry",
    description: "Exists to plan and coordinate all events on church grounds. This includes food preparation, organize the membership in the preparation of the events. Events could include Christmas, Thanksgiving, Easter Lunch, Picnics, Ice Cream Socials, Church Family Social Events.",
    images: [f16, f17, f18], // repeated images
  },
  {
    title: "Tech Teams",
    description: "Our purpose is to take the FMC experience beyond the doors of our physical church. We aim to minister using different types of media to produce and capture a live event that will last a life time. Our commitment to produce a quality service will usher people into spiritual growth and a perpetual praise ans worship of Jesus Christ.",
    images: [f19, f20, f21], // repeated images
  },
  {
    title: "Evangelism Ministry",
    description: "Exists to oversee and implement the church evangelism program, training volunteers and actively participating in the evangelism ministry to influence saints for Christ and bring them into the church.",
    images: [f22, f23, f24], // repeated images
  },
  {
    title: "Outreach/In Reach Ministry",
    description: "Exists to organize the outreach ministries of FMC. The team researches, survey and evaluate the church and community to determine what outreach programs, ministries are most needed. Reaching people at their point of need and leading them to a personal relationship with Christ. This team also exits to oversee the process of new members transitioning into the family of FMC. This process includes understanding the vision of FMC, membership assimilation, and spiritual growth.",
    images: [f25, f26, f27], // repeated images
  }
];


export default function ChurchMinistries() {
  // Track current image index for each ministry
  const [currentImages, setCurrentImages] = useState(
    ministries.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((idx, i) => (idx + 1) % ministries[i].images.length)
      );
    }, 2000); // rotate every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <SmallTitle>Explore</SmallTitle>
          <Zoom triggerOnce={false} duration={4000}>
          <MainTitle>OUR CHURCH MINISTRIES</MainTitle>
          </Zoom>
        </Header>

        <Grid>
          {ministries.map((ministry, i) => (
            <Tile
              key={i}
              style={{
                backgroundImage: `url(${ministry.images[currentImages[i]]})`,
              }}
            >
              <Overlay />
              <Content>
                <Fade direction="right" triggerOnce={false} duration={4000}>
                  <TileTitle>{ministry.title}</TileTitle>
                  <TileDesc>{ministry.description}</TileDesc>
                </Fade>
              </Content>
            </Tile>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 100px 20px;
  background: #f9fbfd;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color: #1b67a8;
  margin-bottom: 10px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
font-style:italic;

  color:transparent;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)

);

-webkit-background-clip:text;
background-clip:text;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  gap: 30px;
`;

const Tile = styled.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.0);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: white;
 
`;

const TileTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
   background:rgba(0,0,0,0.4);
   padding:5px;
   border-radius:5px
`;

const TileDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
   background:rgba(0,0,0,0.4);
   padding:5px;
   border-radius:5px;
`;