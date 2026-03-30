import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  font-size: 3rem;
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

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 15px;
  animation: ${float} 4s ease-in-out infinite;
`;

const Name = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const Role = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

// Sample Data (Replace with real data or API)
const pastors = [
  {
    name: "Pastor John Doe",
    role: "Senior Pastor",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b0"
  },
  {
    name: "Pastor Mary Grace",
    role: "Associate Pastor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Pastor Samuel King",
    role: "Youth Pastor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Pastor Faith Hope",
    role: "Worship Leader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Pastor Daniel Light",
    role: "Prayer Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Pastor Ruth Blessing",
    role: "Children Ministry",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
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
      <Title>Meet Our Pastors</Title>
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
            <Name>{pastor.name}</Name>
            <Role>{pastor.role}</Role>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
}
