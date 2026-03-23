import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaPlay } from "react-icons/fa";

const Section = styled.div`
  padding: 80px 20px;
  background: #f5f7fb;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0A3CFF;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: auto;
`;

const Card = styled.div`
  position: relative;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(135deg, #1877f2, #0a3cff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  color: #1877f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-size: 1.5rem;
`;

const Label = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;

const SocialMediaSection = () => {

  const links = [
    {
      url: "https://www.facebook.com/share/v/18ZD2KF5sd/",
      label: "Watch Video"
    },
    {
      url: "https://www.facebook.com/share/18Logs2BtD/",
      label: "View Post"
    },
    {
      url: "https://www.facebook.com/sade.kuku?mibextid=ZbWKwL",
      label: "Visit Profile"
    },
    {
      url: "https://www.facebook.com/bishoptai?mibextid=ZbWKwL",
      label: "Visit Page"
    }
  ];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Section>
      <Title>Connect With Us on Facebook</Title>

      <Grid>
        {links.map((item, index) => (
          <Card key={index} onClick={() => handleClick(item.url)}>
            <Overlay />

            <Content>
              <IconCircle>
                {item.label.includes("Video") ? <FaPlay /> : <FaFacebookF />}
              </IconCircle>

              <Label>{item.label}</Label>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default SocialMediaSection;