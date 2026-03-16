import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import f1 from "../Images/h1.jpeg";
import f2 from "../Images/h2.jpeg";
import f3 from "../Images/h3.jpeg";
import f4 from "../Images/h5.jpeg";
import f5 from "../Images/h5.jpeg";
import f6 from "../Images/h6.jpeg";
import f7 from "../Images/h7.jpeg";
import f8 from "../Images/h8.jpeg";
import f9 from "../Images/h9.jpeg";

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
    images: [f1, f2, f3], // repeated images
  },
  {
    title: "Act 2 Ministry",
    description: "Exists to utilize prayer as a vehicle to manifest signs and wonders in the earth, while inspiring spiritual, corporate, and personal growth. Prayers released will transform, heal, encourage, restore, as well as guide individuals to walk in power and authority for the prosperity of their lives.",
    images: [f1, f2, f3], // repeated images
  },
  {
    title: "Youth & Young Adults Ministry",
    description: "Exists to raise up a generation of leaders that will know their calling and destiny. This generation will be empower- ed to impact their world as leaders with a biblical word view.",
    images: [f4, f5, f6],
  },
  {
    title: "Praise and Worship Ministry",
    description: "Exists to usher God's people into his presence allowing individuals an opportunity to experience his manifestation. Our goal is to create a powerful life changing experience that breaks yokes, destroys chains and binds the hand of the enemy, so that victory is declared.",
    images: [f7, f8, f9],
  },
  {
    title: "Special Events Ministry",
    description: "Exists to plan and coordinate all events on church grounds. This includes food preparation, organize the membership in the preparation of the events. Events could include Christmas, Thanksgiving, Easter Lunch, Picnics, Ice Cream Socials, Church Family Social Events.",
    images: [f7, f8, f9], // repeated images
  },
  {
    title: "Tech Teams",
    description: "Our purpose is to take the FMC experience beyond the doors of our physical church. We aim to minister using different types of media to produce and capture a live event that will last a life time. Our commitment to produce a quality service will usher people into spiritual growth and a perpetual praise ans worship of Jesus Christ.",
    images: [f4, f5, f6], // repeated images
  },
  {
    title: "Evangelism Ministry",
    description: "Exists to oversee and implement the church evangelism program, training volunteers and actively participating in the evangelism ministry to influence saints for Christ and bring them into the church.",
    images: [f1, f2, f3], // repeated images
  },
  {
    title: "Outreach/In Reach Ministry",
    description: "Exists to organize the outreach ministries of The Faith and Miracle Center. The team researches, survey and evaluate the church and community to determine what outreach programs, ministries are most needed. Reaching people at their point of need and leading them to a personal relationship with Christ. This team also exits to oversee the process of new members transitioning into the family of FMC. This process includes understanding the vision of FMC, membership assimilation, and spiritual growth.",
    images: [f4, f5, f6], // repeated images
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
          <MainTitle>OUR CHURCH MINISTRIES</MainTitle>
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


  color:transparent;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
// rgb(47,161,104)
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
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
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