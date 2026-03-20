// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaPlay, FaChurch } from "react-icons/fa";
// import RotatingCube from "./RotatingCube";

// const gradientMove = keyframes`
// 0%{background-position:0% 50%}
// 50%{background-position:100% 50%}
// 100%{background-position:0% 50%}
// `;

// const float = keyframes`
// 0%{transform:translateY(0px)}
// 50%{transform:translateY(-15px)}
// 100%{transform:translateY(0px)}
// `;

// const glow = keyframes`
// 0%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
// 50%{box-shadow:0 0 30px rgba(255,215,0,0.9)}
// 100%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
// `;

// const HeroContainer = styled.section`
// height:90vh;
// display:flex;
// align-items:center;
// justify-content:center;
// position:relative;
// overflow:hidden;

// background:linear-gradient(
// -45deg,
// #0f2027,
// #203a43,
// #2c5364,
// #ffb347,
// #ffcc33
// );

// background-size:400% 400%;
// animation:${gradientMove} 18s ease infinite;
// `;

// const Light = styled.div`
// position:absolute;
// top:50%;
// left:50%;
// transform:translate(-50%,-50%);

// width:500px;
// height:500px;

// background:radial-gradient(circle, rgba(255,255,255,0.35), transparent);
// filter:blur(80px);

// animation:${float} 6s ease-in-out infinite;
// `;

// const Content = styled.div`
// text-align:center;
// color:white;
// z-index:2;
// max-width:900px;
// padding:20px;
// `;

// const Title = styled.h1`
// font-size:3.5rem;
// font-weight:800;
// line-height:1.2;

// text-shadow:
// 0 5px 15px rgba(0,0,0,0.4),
// 0 0 25px rgba(255,215,0,0.6);

// span{
// color:#ffd700;
// }

// @media(max-width:768px){
// font-size:2.5rem;
// }
// `;

// const Subtitle = styled.p`
// margin-top:20px;
// font-size:1.2rem;
// color:#eee;
// line-height:1.7;

// @media(max-width:768px){
// font-size:1rem;
// }
// `;

// const Buttons = styled.div`
// margin-top:35px;
// display:flex;
// gap:20px;
// justify-content:center;
// flex-wrap:wrap;
// `;

// const PrimaryButton = styled.button`
// display:flex;
// align-items:center;
// gap:10px;

// padding:14px 26px;
// border:none;
// border-radius:40px;

// font-size:16px;
// font-weight:600;

// cursor:pointer;

// background:linear-gradient(135deg,#ffd700,#ff9a00);
// color:black;

// animation:${glow} 4s infinite;

// transition:0.3s;

// &:hover{
// transform:scale(1.08);
// }
// `;

// const SecondaryButton = styled.button`
// display:flex;
// align-items:center;
// gap:10px;

// padding:14px 26px;
// border-radius:40px;

// border:2px solid #ffd700;
// background:transparent;

// color:#ffd700;
// font-weight:600;

// cursor:pointer;
// transition:0.3s;

// &:hover{
// background:#ffd700;
// color:black;
// transform:scale(1.08);
// }
// `;

// const Scripture = styled.div`
// margin-top:50px;
// font-style:italic;
// color:#ddd;
// font-size:15px;
// opacity:0.9;
// `;

// export default function HeroSection(){

// return(

// <HeroContainer>

//     <RotatingCube/>

// <Light/>

// <Content>

// <Title>
// Welcome to <span>Faith & Miracle Center</span>
// <br/>
// Where Faith Creates Miracles
// </Title>

// <Subtitle>
// Experience powerful worship, life-changing sermons,
// and a loving church family. Join us as we grow in faith,
// discover purpose, and walk in God's miracles together.
// </Subtitle>

// <Buttons>

// <PrimaryButton>
// <FaPlay/>
// Watch Sermons
// </PrimaryButton>

// <SecondaryButton>
// <FaChurch/>
// Visit Church
// </SecondaryButton>

// </Buttons>

// <Scripture>
// “For where two or three gather in my name, there am I with them.”
// — Matthew 18:20
// </Scripture>

// </Content>

// </HeroContainer>

// )

// }































import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlay, FaChurch } from "react-icons/fa";
import RotatingCube from "./RotatingCube";
import "animate.css";
import h1 from '../Images/h1.jpeg'
import h2 from '../Images/h2.jpeg'
import h3 from '../Images/h3.jpeg'
// import h4 from '../Images/h4.jpeg'
import h5 from '../Images/h5.jpeg'
import h6 from '../Images/h6.jpeg'
import h7 from '../Images/h7.jpeg'
import h8 from '../Images/h8.jpeg'
import h9 from '../Images/h9.jpeg'
import h10 from '../Images/h10.jpeg'
import h11 from '../Images/h11.jpeg'
import h12 from '../Images/h12.jpeg'
import { useNavigate } from "react-router-dom";
const gradientMove = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
`;

const float = keyframes`
0%{transform:translateY(0px)}
50%{transform:translateY(-15px)}
100%{transform:translateY(0px)}
`;

const glow = keyframes`
0%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
50%{box-shadow:0 0 30px rgba(255,215,0,0.9)}
100%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
`;

const HeroContainer = styled.section`
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
position:relative;
overflow:hidden;
background:black;

// background:linear-gradient(
// -45deg,
// #0f2027,
// #203a43,
// #2c5364,
// #0f2027,
// #0f2027,
// // #ffb347,
// // #ffcc33
// );

background-size:400% 400%;
animation:${gradientMove} 18s ease infinite;

@media(max-width:768px){
flex-direction:column;
}


`;


const BackgroundImage = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

background-size:cover;
background-position:center;

z-index:0;

opacity:${props => props.active ? 1 : 0};
transition:opacity 1.5s ease;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); // 50% dark shade
  z-index: 1; // sits above the background image but below content
`;

const Light = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);

width:500px;
height:500px;

background:radial-gradient(circle, rgba(255,255,255,0.35), transparent);
filter:blur(80px);

animation:${float} 6s ease-in-out infinite;
`;

const Content = styled.div`
text-align:center;
color:white;
z-index:2;
max-width:900px;
padding:20px;

`;



const Title = styled.h1`
  font-size:3.5rem;
  font-weight:800;
  line-height:1.2;

  text-shadow: 0 5px 15px rgba(0,0,0,1);

  span{
    color:#ffd700;
  }

  @media(max-width:768px){
    font-size:2.5rem;
  }
`;

const Subtitle = styled.p`
margin-top:20px;
font-size:1.2rem;
color:#eee;
line-height:1.7;
text-shadow: 0 5px 15px rgba(0,0,0,1);

@media(max-width:768px){
font-size:1rem;
}
`;

const Buttons = styled.div`
margin-top:35px;
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
`;

const PrimaryButton = styled.button`
display:flex;
align-items:center;
gap:10px;

padding:14px 26px;
border:none;
border-radius:40px;

font-size:16px;
font-weight:600;

cursor:pointer;

background:linear-gradient(135deg,#ffd700,#ff9a00);
color:black;

animation:${glow} 4s infinite;

transition:0.3s;

&:hover{
transform:scale(1.08);
}
`;

const SecondaryButton = styled.button`
display:flex;
align-items:center;
gap:10px;

padding:14px 26px;
border-radius:40px;

border:2px solid #ffd700;
background:transparent;

color:#ffd700;
font-weight:600;

cursor:pointer;
transition:0.3s;

&:hover{
background:#ffd700;
color:black;
transform:scale(1.08);
}
`;

const Scripture = styled.div`
margin-top:50px;
font-style:italic;
color:#ddd;
font-size:15px;
opacity:0.9;
  text-shadow: 0 5px 15px rgba(0,0,0,1);
`;

export default function HeroSection(){

  const navigate = useNavigate();

const images = [
h1,h2,h3,h5,h6,h7,h8,h9,h10,h11,h12
];

const animations = [
"animate__fadeIn",
"animate__zoomIn",
"animate__fadeInDown",
"animate__fadeInUp",
"animate__fadeInLeft",
"animate__fadeInRight",
"animate__zoomInDown",
"animate__zoomInUp",
"animate__fadeInTopLeft",
"animate__fadeInBottomRight"
];

const [index,setIndex] = useState(0);

useEffect(()=>{
const interval = setInterval(()=>{
setIndex((prev)=>(prev+1)%images.length);
},3000);

return ()=>clearInterval(interval);

},[]);



return(

<HeroContainer>

{images.map((img,i)=>(
<BackgroundImage
key={i}
active={i===index}
className={i===index ? `animate__animated ${animations[index % animations.length]}` : ""}
style={{backgroundImage:`url(${img})`}}
/>
))}

<DarkOverlay />
<RotatingCube/>

<Light/>

<Content>

<Title>
Welcome to <span>Faith & Miracle Center</span>
{/* <br/>
Where Faith Creates Miracles */}
</Title>

<Subtitle>
Experience powerful worship, life-changing sermons,
and a loving church family.
</Subtitle>

<Buttons>

{/* <PrimaryButton>
<FaPlay/>
Watch Sermons
</PrimaryButton> */}

<SecondaryButton onClick={()=>navigate('/contact')}>
<FaChurch/>
Visit Church
</SecondaryButton>

</Buttons>

<Scripture>
“For where two or three gather in my name, there am I with them.”
— Matthew 18:20
</Scripture>

</Content>

</HeroContainer>

)

}











// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaPlay, FaChurch } from "react-icons/fa";
// import heroVideo from "../videos/church-worship.mp4"; // place your video here

// const float = keyframes`
// 0%{transform:translateY(0px)}
// 50%{transform:translateY(-20px)}
// 100%{transform:translateY(0px)}
// `;

// const glow = keyframes`
// 0%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
// 50%{box-shadow:0 0 35px rgba(255,215,0,0.9)}
// 100%{box-shadow:0 0 10px rgba(255,215,0,0.3)}
// `;

// const HeroContainer = styled.section`
// height:90vh;
// width:100%;
// position:relative;
// display:flex;
// align-items:center;
// justify-content:center;
// overflow:hidden;
// color:white;
// `;

// const BackgroundVideo = styled.video`
// position:absolute;
// top:0;
// left:0;
// width:100%;
// height:100%;
// object-fit:cover;
// z-index:0;
// `;

// const Overlay = styled.div`
// position:absolute;
// top:0;
// left:0;
// width:100%;
// height:100%;
// background:rgba(0,0,0,0.55);
// z-index:1;
// `;

// const Light = styled.div`
// position:absolute;
// top:50%;
// left:50%;
// transform:translate(-50%,-50%);

// width:500px;
// height:500px;

// background:radial-gradient(circle, rgba(255,255,255,0.25), transparent);
// filter:blur(90px);

// animation:${float} 6s ease-in-out infinite;
// z-index:1;
// `;

// const Content = styled.div`
// position:relative;
// z-index:2;
// text-align:center;
// max-width:900px;
// padding:20px;
// `;

// const Title = styled.h1`
// font-size:3.5rem;
// font-weight:800;
// line-height:1.2;

// text-shadow:
// 0 5px 20px rgba(0,0,0,0.6),
// 0 0 25px rgba(255,215,0,0.7);

// span{
// color:#ffd700;
// }

// @media(max-width:768px){
// font-size:2.4rem;
// }
// `;

// const Subtitle = styled.p`
// margin-top:20px;
// font-size:1.2rem;
// line-height:1.7;
// color:#eee;

// @media(max-width:768px){
// font-size:1rem;
// }
// `;

// const Buttons = styled.div`
// margin-top:35px;
// display:flex;
// justify-content:center;
// gap:20px;
// flex-wrap:wrap;
// `;

// const PrimaryButton = styled.button`
// display:flex;
// align-items:center;
// gap:10px;

// padding:14px 28px;
// border:none;
// border-radius:40px;

// font-size:16px;
// font-weight:600;

// cursor:pointer;

// background:linear-gradient(135deg,#ffd700,#ff9a00);
// color:black;

// animation:${glow} 4s infinite;

// transition:0.3s;

// &:hover{
// transform:scale(1.1);
// }
// `;

// const SecondaryButton = styled.button`
// display:flex;
// align-items:center;
// gap:10px;

// padding:14px 28px;
// border-radius:40px;

// border:2px solid #ffd700;
// background:transparent;

// color:#ffd700;
// font-weight:600;

// cursor:pointer;
// transition:0.3s;

// &:hover{
// background:#ffd700;
// color:black;
// transform:scale(1.1);
// }
// `;

// const Scripture = styled.div`
// margin-top:45px;
// font-style:italic;
// font-size:15px;
// color:#ddd;
// opacity:0.9;
// `;

// export default function HeroSection(){

// return(

// <HeroContainer>

// <BackgroundVideo autoPlay loop muted playsInline>
// <source src={heroVideo} type="video/mp4" />
// </BackgroundVideo>

// <Overlay/>

// <Light/>

// <Content>

// <Title>
// Welcome to <span>Faith & Miracle Center</span>
// <br/>
// Where Faith Creates Miracles
// </Title>

// <Subtitle>
// Experience powerful worship, life-changing sermons,
// and a loving church family. Join us as we grow in faith,
// discover purpose, and walk in God's miracles together.
// </Subtitle>

// <Buttons>

// <PrimaryButton>
// <FaPlay/>
// Watch Sermons
// </PrimaryButton>

// <SecondaryButton>
// <FaChurch/>
// Visit Church
// </SecondaryButton>

// </Buttons>

// <Scripture>
// “Now faith is the substance of things hoped for, the evidence of things not seen.”
// — Hebrews 11:1
// </Scripture>

// </Content>

// </HeroContainer>

// )

// }