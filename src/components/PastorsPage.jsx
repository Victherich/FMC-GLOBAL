import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import M1 from '../Images/M1.jpeg'
import M2 from '../Images/M2.jpeg'
import M3 from '../Images/M3.jpeg'
import M4 from '../Images/M4.jpeg'
import M5 from '../Images/M5.jpeg'
import M6 from '../Images/M6.jpeg'

import M7 from '../Images/M7.jpeg'
import M8 from '../Images/M8.jpeg'
import M9 from '../Images/M9.jpeg'
import M10 from '../Images/M10.jpeg'
import M11 from '../Images/M11.jpeg'
import M12 from '../Images/M12.jpeg'

import M13 from '../Images/M13.jpeg'
import M14 from '../Images/M14.jpeg'
import M15 from '../Images/M15.jpeg'


// Animations
const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #42e695);
  background-size: 600% 600%;
  animation: ${gradientBG} 12s ease infinite;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size:2rem;
  margin-bottom: 40px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 per row on mobile
  }
`;

// const Card = styled(motion.div)`
//   background: rgba(255,255,255,0.15);
//   backdrop-filter: blur(10px);
//   border-radius: 20px;
//   padding: 20px;
//   text-align: center;
//   color: white;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 250px;
//   object-fit: cover;
//   object-position:top;
//   border-radius: 15px;
//   margin-bottom: 15px;
//   animation: ${float} 4s ease-in-out infinite;
// `;

// const Name = styled.h2`
//   font-size: 1.4rem;
//   margin-bottom: 5px;
// `;

// const Role = styled.p`
//   font-size: 1rem;
//   opacity: 0.9;
// `;


const Card = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  &:hover img {
    transform: scale(1.08);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
`;

// 🔥 Overlay
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,1),
    rgba(0,0,0,0.6),
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.0),
    rgba(0,0,0,0.0)

  );
`;

// 🔥 Text container (bottom)
const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
  z-index: 2;
`;

const Name = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Role = styled.p`
  font-size: 0.8rem;
  opacity: 0.9;
`;

// Sample Data (Replace with real data or API)
const pastors = [
  {
    name: "Pastor Dexter Williams",
    role: "Pastor, Fmc Atlanta GA",
    image: M1
  },
  {
    name: "Pastor Johnny Andrew ",
    role: "Pastor Of Evangelism, Atlanta GA",
    image: M2
  },
  {
    name: "Deacon Amos Omobude",
    role: "Head, Prayer Team",
    image: M3
  },
  {
    name: "Min Paddy Williams ",
    role: "Head, Food Ministry",
    image: M4
  },
  {
    name: "Deacon Morris William",
    role: "Head Church Maintainance And Asst. Head Food Ministry",
    image: M5
  },
  {
    name: "Min Adesuwa Oduntan ",
    role: "Minister Of Music",
    image: M6
  }
];

// Sample Data (Replace with real data or API)
const pastors2 = [
  {
    name: "Pastor Israel Craig ",
    role: "Coordinating Pastor All Locations Lagos",
    image: M7
  },
  {
    name: "Pastor Feyikemi Emmanuel  ",
    role: "Assistant Pastor, Headquarters Lagos",
    image: M8
  },
  {
    name: "Pastor Kayode Obembe ",
    role: "Resident Pastor, Miracle House",
    image: M9
  },
  {
    name: "Evangelist Happiness Ikeh ",
    role: "Assistant Pastor, Miracle House.",
    image: M10
  },
  {
    name: "Pastor Joshua Adewoye ",
    role: "Head Evangelism Team, Miracle House",
    image: M11
  },
  {
    name: "Min David Cosmos  ",
    role: "Min Of Music, Solution House",
    image: M12
  },
    {
    name: "Bro Akin Fowler  ",
    role: "Head, Church Maintainance All Lagos Locations",
    image: M13
  },
  {
    name: "Pastor James Adewoye",
    role: "Head Evangelism Team, Solution House",
    image: M14
  },
  {
    name: "Sister Geraldine Fowler",
    role: "Head, Children Ministry, Solution House",
    image: M15
  }
];



const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function PastorsPage() {
  return (
    <PageWrapper>
      <Title>FMC LEADERSHIP USA</Title>
      <Grid>
        {pastors.map((pastor, index) => (
          <Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ rotate: 1 }}
          >
           <Image src={pastor.image} alt={pastor.name} />
<Overlay />
<Content>
  <Name>{pastor.name}</Name>
  <Role>{pastor.role}</Role>
</Content>
          </Card>
        ))}
      </Grid>

         <Title style={{marginTop:"100px"}}>FMC LEADERSHIP LAGOS NIGERIA</Title>
      <Grid>
        {pastors2.map((pastor, index) => (
          <Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ rotate: 1 }}
          >
          <Image src={pastor.image} alt={pastor.name} />
<Overlay />
<Content>
  <Name>{pastor.name}</Name>
  <Role>{pastor.role}</Role>
</Content>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
}
