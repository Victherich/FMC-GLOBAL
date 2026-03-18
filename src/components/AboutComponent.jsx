// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import 'animate.css/animate.min.css'; // Import animate.css
// import logo from '../Images/logo.png';

// import car10 from "../Images/logo.png";
// import car11 from "../Images/logo.png";
// import car12 from "../Images/logo.png";
// import car13 from "../Images/logo.png";
// import car14 from "../Images/logo.png";
// import car15 from "../Images/logo.png";
// import { NavLink } from 'react-router-dom';



// const cubeRotate = keyframes`
//   from {
//     transform: rotateY(0deg);
//   }
//   to {
//     transform: rotateY(360deg);
//   }
// `;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   // padding: 80px 10px;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   border-radius: 500px 0px 0px 0px;
//   padding-top:80px;
//   padding-bottom:30px;
// `;

// const CubeContainer = styled.div`
//   perspective: 1000px;
//   width: 300px;
//   height: 300px;
//   margin-bottom: 2rem;
// `;

// const Cube = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   transform-style: preserve-3d;
//   animation: ${cubeRotate} 10s infinite linear;
// `;

// const Face = styled.div`
//   position: absolute;
//   width: 300px;
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   opacity: 0.95;
//   border-radius: 12px;
//   box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
// `;

// const ContentSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
//   margin-bottom: 2rem;
// `;

// const Column = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   padding: 1rem;
//   background: ${({ theme }) => (theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')};
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.15);
// `;


// const Text = styled.p`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   font-weight: 500;
//   text-align: justify;
//   padding: 1.5rem;
//   border-radius: 16px;
//   background: rgba(255, 255, 255, 0.07);
//   backdrop-filter: blur(8px);
//   color: transparent;
//   background-image: linear-gradient(135deg,rgb(255, 65, 179),rgb(67, 61, 248),rgb(47, 161, 104));
//   -webkit-background-clip: text;
//   background-clip: text;
//   text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
//   letter-spacing: 0.03em;
//   transition: all 0.4s ease;

//   &:hover {
//     transform: scale(1.015);
//     box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
//   }

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//     padding: 1rem;
//   }
// `;



// const Div = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   gap: 100px;

//   @media(max-width:884px){
//     flex-direction: column;
//     gap: 50px;
//   }
// `;


// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Optional: only trigger once, or allow retrigger
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         // Wait until at least 50% of the element is visible
//         threshold: 0.5,
//         // Pushes the "activation zone" up, so animation doesn't trigger too early at bottom of screen
//         rootMargin: '0px 0px -50px 0px',
//       }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : '',
//   };
// };


// // Cube face config
// const faces = [
//   { img: car10, transform: 'rotateY(0deg) translateZ(150px)' },
//   { img: car11, transform: 'rotateY(90deg) translateZ(150px)' },
//   { img: car12, transform: 'rotateY(180deg) translateZ(150px)' },
//   { img: car13, transform: 'rotateY(-90deg) translateZ(150px)' },
//   { img: car14, transform: 'rotateX(90deg) translateZ(150px)' },
//   { img: car15, transform: 'rotateX(-90deg) translateZ(150px)' },
// ];

// // Main Component
// const AboutComponent = () => {
//   const textAnim = useAnimateOnScroll('animate__jackInTheBox animate__slower');
//   const cubeAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

//   return (
//     <Container>
//       <Div>
//         <CubeContainer ref={cubeAnim.ref} className={cubeAnim.className}>
//           <Cube>
//             {faces.map((face, idx) => (
//               <Face key={idx} style={{ backgroundImage: `url(${face.img})`, transform: face.transform }} />
//             ))}
//           </Cube>
//         </CubeContainer>

//         <ContentSection>
//           <Column>
//           <Text ref={textAnim.ref} className={textAnim.className}>
//   ELEXDON HOST is more than just web hosting — it’s a catalyst for creators, innovators, and businesses worldwide. With rock-solid security, seamless scalability, and lightning-fast performance, we turn bold ideas into powerful digital experiences.
// </Text>

      
          
//           </Column>
//         </ContentSection>
//       </Div>

//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
//         <p>Learn More About</p>
//         <NavLink to='/aboutus'>
//           <img src={logo} alt='logo' style={{ width: "150px", cursor: "pointer" }} />
//         </NavLink>
//       </div>
//     </Container>
//   );
// };

// export default AboutComponent;










// import React, { useEffect, useRef, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import "animate.css/animate.min.css";
// import logo from "../Images/logo.png";

// import car10 from "../Images/logo.png";
// import car11 from "../Images/logo.png";
// import car12 from "../Images/logo.png";
// import car13 from "../Images/logo.png";
// import car14 from "../Images/logo.png";
// import car15 from "../Images/logo.png";

// import { NavLink } from "react-router-dom";



// /* =========================
// ANIMATIONS
// ========================= */

// const orbit = keyframes`
// from {
// transform: rotateY(0deg) translateZ(220px) rotateY(0deg);
// }
// to {
// transform: rotateY(360deg) translateZ(220px) rotateY(-360deg);
// }
// `;

// const float = keyframes`
// 0%{ transform:translateY(0px); }
// 50%{ transform:translateY(-20px); }
// 100%{ transform:translateY(0px); }
// `;

// const glow = keyframes`
// 0%{ box-shadow:0 0 10px rgba(255,215,0,0.4); }
// 50%{ box-shadow:0 0 30px rgba(255,215,0,1); }
// 100%{ box-shadow:0 0 10px rgba(255,215,0,0.4); }
// `;


// /* =========================
// STYLED COMPONENTS
// ========================= */

// const Container = styled.div`
// display:flex;
// flex-direction:column;
// align-items:center;

// background: ${({ theme }) =>
//   theme === "dark"
//     ? "linear-gradient(90deg,#0f172a,#1e293b)"
//     : "linear-gradient(90deg,#f8fafc,#e2e8f0)"};

// color:${({ theme }) => (theme === "dark" ? "#fff" : "#1e293b")};

// border-radius:500px 500px 0 0;

// padding-top:80px;
// padding-bottom:30px;
// `;

// const Div = styled.div`
// display:flex;
// width:100%;
// justify-content:center;
// align-items:center;
// gap:10px;
// flex-direction:column;

// @media(max-width:884px){
// flex-direction:column;
// gap:50px;
// }
// `;


// /* =========================
// HALO ORBIT ANIMATION
// ========================= */

// const HaloContainer = styled.div`
// perspective:1200px;

// width:400px;
// // height:400px;

// position:relative;

// display:flex;
// align-items:center;
// justify-content:center;

// animation:${float} 60s ease-in-out infinite;
// `;

// const CenterLogo = styled.img`
// width:130px;
// height:130px;

// border-radius:50%;
// object-fit:cover;

// border:3px solid gold;

// animation:${glow} 4s infinite;

// z-index:5;
// `;

// const OrbitRing = styled.div`
// position:absolute;

// width:100%;
// height:100%;

// transform-style:preserve-3d;
// `;

// const OrbitItem = styled.div`
// position:absolute;

// top:50%;
// left:50%;

// width:90px;
// height:90px;

// margin:-45px;

// background-size:cover;
// background-position:center;

// border-radius:14px;

// border:2px solid rgba(255,255,255,0.7);

// animation:${orbit} 14s linear infinite;
// animation-delay:${props => props.delay}s;

// box-shadow:0 10px 25px rgba(0,0,0,0.4);

// transition:0.4s;

// &:hover{
// transform:scale(1.25);
// box-shadow:0 0 25px gold;
// }
// `;


// /* =========================
// TEXT SECTION
// ========================= */

// const ContentSection = styled.div`
// display:flex;
// flex-wrap:wrap;
// gap:1rem;
// justify-content:center;
// margin-bottom:2rem;
// `;

// const Column = styled.div`
// flex:1;

// max-width:1200px;




// border-radius:8px;


// `;

// const Text = styled.p`
// font-size:0.8rem;
// line-height:1.8;
// font-weight:500;

// text-align:center;

// border-radius:16px;


// color:transparent;

// background-image:linear-gradient(
// 135deg,
// rgb(255,65,179),
// rgb(67,61,248),
// rgb(47,161,104)
// );

// -webkit-background-clip:text;
// background-clip:text;

// text-shadow:1px 1px 3px rgba(0,0,0,0.1);

// letter-spacing:0.03em;

// transition:all 0.4s ease;



// @media(max-width:768px){
// font-size:1.1rem;
// padding:1rem;
// }
// `;


// /* =========================
// SCROLL ANIMATION HOOK
// ========================= */

// const useAnimateOnScroll = (animationClass) => {

// const ref = useRef(null);
// const [visible,setVisible] = useState(false);

// useEffect(()=>{

// const el = ref.current;
// if(!el) return;

// const observer = new IntersectionObserver(
// ([entry])=>{
// if(entry.isIntersecting){
// setVisible(true);
// }
// },
// {threshold:0.5, rootMargin:"0px 0px -50px 0px"}
// );

// observer.observe(el);

// return ()=>observer.disconnect();

// },[]);

// return{
// ref,
// className: visible ? `animate__animated ${animationClass}` : ""
// };

// };


// /* =========================
// MAIN COMPONENT
// ========================= */

// const AboutComponent = () => {

// const textAnim = useAnimateOnScroll("animate__jackInTheBox animate__slower");
// const haloAnim = useAnimateOnScroll("animate__zoomIn animate__slower");

// const orbitImages = [car10,car11,car12,car13,car14,car15];

// return (

// <Container>

// <Div>

// {/* HALO ANIMATION */}

// <HaloContainer ref={haloAnim.ref} className={haloAnim.className}>

// <CenterLogo src={logo} />

// <OrbitRing>

// {orbitImages.map((img,i)=>(
// <OrbitItem
// key={i}
// delay={i*2}
// style={{backgroundImage:`url(${img})`}}
// />
// ))}

// </OrbitRing>

// </HaloContainer>



// {/* TEXT SECTION */}

// <ContentSection>

// <Column>

// <Text ref={textAnim.ref} className={textAnim.className}>

// Welcome to Faith and Miracle Center Worldwide. We are honored that you have chosen to worship with us.<br/>
// At Faith and Miracle Center, we believe that church is more than a gathering—it is a community where people grow in faith, discover their purpose, and experience the transforming love of God.<br/>
// Our desire is to create an environment where individuals and families can deepen their relationship with God through prayer, biblical teaching, and meaningful fellowship. Whether you are exploring faith for the first time or seeking a church home, you are welcome here.<br/>
// We encourage you to participate in our services, connect with our community, and discover the opportunities available for spiritual growth and service.<br/>
// Our prayer is that your time with us will strengthen your faith, encourage your heart, and inspire you to walk confidently in the purpose God has for your life.<br/>
// Thank you for joining us. We look forward to growing together in faith.<br/>


// </Text>

// </Column>

// </ContentSection>

// </Div>


// {/* FOOTER LINK */}

// <div style={{
// display:"flex",
// justifyContent:"center",
// alignItems:"center",
// gap:"20px"
// }}>

// <p>Learn More About</p>

// <NavLink to="/aboutus">

// <img
// src={logo}
// alt="logo"
// style={{width:"150px",cursor:"pointer"}}
// />

// </NavLink>

// </div>

// </Container>

// );

// };

// export default AboutComponent;





import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import "animate.css/animate.min.css";
import logo from "../Images/logo.png";

import car10 from "../Images/logo.png";
import car11 from "../Images/logo.png";
import car12 from "../Images/logo.png";
import car13 from "../Images/logo.png";
import car14 from "../Images/logo.png";
import car15 from "../Images/logo.png";

import { NavLink, useNavigate } from "react-router-dom";


/* =========================
ANIMATIONS
========================= */

const orbit = keyframes`
from {
transform: rotateY(0deg) translateZ(220px) rotateY(0deg);
}
to {
transform: rotateY(360deg) translateZ(220px) rotateY(-360deg);
}
`;

const float = keyframes`
0%{ transform:translateY(0px); }
50%{ transform:translateY(-20px); }
100%{ transform:translateY(0px); }
`;

const glow = keyframes`
0%{ box-shadow:0 0 10px rgba(255,215,0,0.4); }
50%{ box-shadow:0 0 30px rgba(255,215,0,1); }
100%{ box-shadow:0 0 10px rgba(255,215,0,0.4); }
`;


/* =========================
STYLED COMPONENTS
========================= */

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

background: ${({ theme }) =>
  theme === "dark"
    ? "linear-gradient(90deg,#0f172a,#1e293b)"
    : "linear-gradient(90deg,#f8fafc,#e2e8f0)"};

border-radius:500px 500px 0 0;

padding-top:80px;
padding-bottom:30px;
`;

const Div = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
gap:10px;
flex-direction:column;
`;



/* =========================
HALO ORBIT ANIMATION
========================= */

const HaloContainer = styled.div`
perspective:1200px;
width:400px;
position:relative;

display:flex;
align-items:center;
justify-content:center;

animation:${float} 60s ease-in-out infinite;
`;

const CenterLogo = styled.img`
width:130px;
height:130px;
border-radius:50%;
object-fit:cover;
border:3px solid gold;
animation:${glow} 4s infinite;
z-index:5;
`;

const OrbitRing = styled.div`
position:absolute;
width:100%;
height:100%;
transform-style:preserve-3d;
`;

const OrbitItem = styled.div`
position:absolute;
top:50%;
left:50%;

width:90px;
height:90px;

margin:-45px;

background-size:cover;
background-position:center;

border-radius:14px;

border:2px solid rgba(255,255,255,0.7);

animation:${orbit} 14s linear infinite;
animation-delay:${props => props.delay}s;

box-shadow:0 10px 25px rgba(0,0,0,0.4);
`;


/* =========================
TEXT SECTION
========================= */

const ContentSection = styled.div`
display:flex;
flex-wrap:wrap;
gap:1rem;
justify-content:center;
margin-bottom:2rem;
`;

const Column = styled.div`
max-width:1200px;
`;

const Text = styled.p`
font-size:1rem;
line-height:1.8;
text-align:center;
font-weight:500;
color:transparent;

background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248),
rgb(47,161,104)
);

-webkit-background-clip:text;
background-clip:text;

border-right:3px solid white;
white-space:pre-wrap;

animation: blinkCursor 0.8s steps(2,start) infinite;

@keyframes blinkCursor{
50%{border-color:transparent;}
}
`;

const More = styled.p`
text-decoration:underline;
font-style:italic;
cursor:pointer;

&:hover{
color:blue;
}
`;


/* =========================
MAIN COMPONENT
========================= */

const AboutComponent = () => {

const navigate = useNavigate()

const orbitImages = [car10,car11,car12,car13,car14,car15]

/* FULL TEXT */

const fullText = `Welcome to Faith and Miracle Center Worldwide. We are honored that you have chosen to worship with us.
At Faith and Miracle Center, we believe that church is more than a gathering—it is a community where people grow in faith, discover their purpose, and experience the transforming love of God.
Our desire is to create an environment where individuals and families can deepen their relationship with God through prayer, biblical teaching, and meaningful fellowship.
Whether you are exploring faith for the first time or seeking a church home, you are welcome here.
We encourage you to participate in our services, connect with our community, and discover the opportunities available for spiritual growth and service.
Our prayer is that your time with us will strengthen your faith, encourage your heart, and inspire you to walk confidently in the purpose God has for your life.
Thank you for joining us. We look forward to growing together in faith.`


/* TYPING STATE */

const [typedText,setTypedText] = useState("")
const [isVisible,setIsVisible] = useState(false)
const [showMore,setShowMore] = useState(false)

const sectionRef = useRef(null)


/* OBSERVER */

useEffect(()=>{

// const observer = new IntersectionObserver(
// ([entry])=>{
// if(entry.isIntersecting){
// setIsVisible(true)
// }
// },
// {threshold:0.5}
// )

const observer = new IntersectionObserver(
([entry]) => {

if(entry.isIntersecting){
setIsVisible(true)
setTypedText("")   // reset typing
setShowMore(false)
}else{
setIsVisible(false) // allows re-trigger
}

},
{ threshold:0.5 }
)

if(sectionRef.current){
observer.observe(sectionRef.current)
}

return ()=>{
if(sectionRef.current){
observer.unobserve(sectionRef.current)
}
}

},[])



/* TYPING EFFECT */

// useEffect(()=>{

// if(isVisible){

// let index = 0

// const interval = setInterval(()=>{

// if(index < fullText.length){
// setTypedText(fullText.substring(0,index+1))
// index++
// }else{
// clearInterval(interval)
// }

// },20)

// return ()=>clearInterval(interval)

// }

// },[isVisible])

useEffect(()=>{

if(isVisible){

let index = 0;
setTypedText("");

const interval = setInterval(()=>{

if(index < fullText.length){
setTypedText(fullText.substring(0,index+1))
index++
}else{
clearInterval(interval)
}

},2)

return ()=>clearInterval(interval)

}

},[isVisible])

/* SHOW MORE DELAY */

useEffect(()=>{

if(isVisible){

const id = setTimeout(()=>{
setShowMore(true)
},8000)

return ()=>clearTimeout(id)

}

},[isVisible])



return(

<Container ref={sectionRef}>

<Div>

{/* HALO ANIMATION */}

<HaloContainer>

<CenterLogo src={logo}/>

<OrbitRing>

{orbitImages.map((img,i)=>(
<OrbitItem
key={i}
delay={i*2}
style={{backgroundImage:`url(${img})`}}
/>
))}

</OrbitRing>

</HaloContainer>



{/* TEXT */}

<ContentSection>

<Column>

<Text>
{typedText}
</Text>

</Column>

</ContentSection>

</Div>



{/* MORE BUTTON */}

{showMore && (

<More onClick={()=>navigate("/about")}>
More about Faith & Miracle Center
</More>

)}

</Container>

)

}

export default AboutComponent