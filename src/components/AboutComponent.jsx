


// import React, { useEffect, useRef, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import "animate.css/animate.min.css";
// import logo from "../Images/logo.png";

// import car10 from "../Images/p19.jpeg";
// import car11 from "../Images/p12.jpeg";
// import car12 from "../Images/p8.jpeg";
// import car13 from "../Images/p9.jpeg";
// import car14 from "../Images/p5.jpeg";
// import car15 from "../Images/h5.jpeg";

// import { NavLink, useNavigate } from "react-router-dom";


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

// border-radius:500px 500px 0 0;

// padding-top:80px;
// padding-bottom:30px;
// padding-left:5px;
// padding-right:5px;
// `;

// const Div = styled.div`
// display:flex;
// width:100%;
// justify-content:center;
// align-items:center;
// gap:10px;
// flex-direction:column;
// `;



// /* =========================
// HALO ORBIT ANIMATION
// ========================= */

// const HaloContainer = styled.div`
// perspective:1200px;
// width:400px;
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
// max-width:1200px;
// `;

// const Text = styled.p`
// font-size:1rem;
// line-height:1.8;
// text-align:center;
// font-weight:500;
// color:transparent;

// background-image:linear-gradient(
// 135deg,
// rgb(255,65,179),
// rgb(67,61,248),
// rgb(47,161,104)
// );

// -webkit-background-clip:text;
// background-clip:text;

// border-right:3px solid white;
// white-space:pre-wrap;

// animation: blinkCursor 0.8s steps(2,start) infinite;

// @keyframes blinkCursor{
// 50%{border-color:transparent;}
// }
// `;

// const More = styled.p`
// text-decoration:underline;
// font-style:italic;
// cursor:pointer;

// &:hover{
// color:blue;
// }
// `;


// /* =========================
// MAIN COMPONENT
// ========================= */

// const AboutComponent = () => {

// const navigate = useNavigate()

// const orbitImages = [car10,car11,car12,car13,car14,car15]

// /* FULL TEXT */

// const fullText = `Welcome to Faith and Miracle Center Worldwide. We are honored that you have chosen to worship with us.
// At Faith and Miracle Center, we believe that church is more than a gathering—it is a community where people grow in faith, discover their purpose, and experience the transforming love of God.
// Our desire is to create an environment where individuals and families can deepen their relationship with God through prayer, biblical teaching, and meaningful fellowship.
// Whether you are exploring faith for the first time or seeking a church home, you are welcome here.
// We encourage you to participate in our services, connect with our community, and discover the opportunities available for spiritual growth and service.
// Our prayer is that your time with us will strengthen your faith, encourage your heart, and inspire you to walk confidently in the purpose God has for your life.
// Thank you for joining us. We look forward to growing together in faith.`


// /* TYPING STATE */

// const [typedText,setTypedText] = useState("")
// const [isVisible,setIsVisible] = useState(false)
// const [showMore,setShowMore] = useState(false)

// const sectionRef = useRef(null)


// /* OBSERVER */

// useEffect(()=>{

// // const observer = new IntersectionObserver(
// // ([entry])=>{
// // if(entry.isIntersecting){
// // setIsVisible(true)
// // }
// // },
// // {threshold:0.5}
// // )

// const observer = new IntersectionObserver(
// ([entry]) => {

// if(entry.isIntersecting){
// setIsVisible(true)
// setTypedText("")   // reset typing
// setShowMore(false)
// }else{
// setIsVisible(false) // allows re-trigger
// }

// },
// { threshold:0.5 }
// )

// if(sectionRef.current){
// observer.observe(sectionRef.current)
// }

// return ()=>{
// if(sectionRef.current){
// observer.unobserve(sectionRef.current)
// }
// }

// },[])



// /* TYPING EFFECT */

// // useEffect(()=>{

// // if(isVisible){

// // let index = 0

// // const interval = setInterval(()=>{

// // if(index < fullText.length){
// // setTypedText(fullText.substring(0,index+1))
// // index++
// // }else{
// // clearInterval(interval)
// // }

// // },20)

// // return ()=>clearInterval(interval)

// // }

// // },[isVisible])

// useEffect(()=>{

// if(isVisible){

// let index = 0;
// setTypedText("");

// const interval = setInterval(()=>{

// if(index < fullText.length){
// setTypedText(fullText.substring(0,index+1))
// index++
// }else{
// clearInterval(interval)
// }

// },2)

// return ()=>clearInterval(interval)

// }

// },[isVisible])

// /* SHOW MORE DELAY */

// useEffect(()=>{

// if(isVisible){

// const id = setTimeout(()=>{
// setShowMore(true)
// },8000)

// return ()=>clearTimeout(id)

// }

// },[isVisible])



// return(

// <Container ref={sectionRef}>

// <Div>

// {/* HALO ANIMATION */}

// <HaloContainer>

// <CenterLogo src={logo}/>

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



// {/* TEXT */}

// <ContentSection>

// <Column>

// <Text>
// {typedText}
// </Text>

// </Column>

// </ContentSection>

// </Div>



// {/* MORE BUTTON */}

// {showMore && (

// <More onClick={()=>navigate("/about")}>
// More about Faith & Miracle Center
// </More>

// )}

// </Container>

// )

// }

// export default AboutComponent












// import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import "animate.css/animate.min.css";
// import logo from "../Images/logo.png";

// import car10 from "../Images/p19.jpeg";
// import car11 from "../Images/p12.jpeg";
// import car12 from "../Images/p8.jpeg";
// import car13 from "../Images/p9.jpeg";
// import car14 from "../Images/p5.jpeg";
// import car15 from "../Images/h5.jpeg";

// import { useNavigate } from "react-router-dom";

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

// border-radius:500px 500px 0 0;

// padding-top:80px;
// padding-bottom:30px;
// padding-left:5px;
// padding-right:5px;
// `;

// const Div = styled.div`
// display:flex;
// width:100%;
// justify-content:center;
// align-items:center;
// gap:10px;
// flex-direction:column;
// `;

// /* =========================
// HALO ORBIT ANIMATION
// ========================= */

// const HaloContainer = styled.div`
// perspective:1200px;
// width:400px;
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
// max-width:1200px;
// `;

// const Text = styled.p`
// font-size:1rem;
// line-height:1.8;
// text-align:center;
// font-weight:500;
// color:transparent;

// background-image:linear-gradient(
// 135deg,
// rgb(255,65,179),
// rgb(67,61,248),
// rgb(47,161,104)
// );

// -webkit-background-clip:text;
// background-clip:text;

// border-right:3px solid white;
// white-space:pre-wrap;

// animation: blinkCursor 0.8s steps(2,start) infinite;

// @keyframes blinkCursor{
// 50%{border-color:transparent;}
// }
// `;

// const More = styled.p`
// text-decoration:underline;
// font-style:italic;
// cursor:pointer;

// &:hover{
// color:blue;
// }
// `;

// /* =========================
// MAIN COMPONENT
// ========================= */

// const AboutComponent = () => {

// const navigate = useNavigate();

// const orbitImages = [car10,car11,car12,car13,car14,car15];

// /* FULL TEXT */

// const fullText = `Welcome to Faith and Miracle Center Worldwide. We are honored that you have chosen to worship with us.
// At Faith and Miracle Center, we believe that church is more than a gathering—it is a community where people grow in faith, discover their purpose, and experience the transforming love of God.
// Our desire is to create an environment where individuals and families can deepen their relationship with God through prayer, biblical teaching, and meaningful fellowship.
// Whether you are exploring faith for the first time or seeking a church home, you are welcome here.
// We encourage you to participate in our services, connect with our community, and discover the opportunities available for spiritual growth and service.
// Our prayer is that your time with us will strengthen your faith, encourage your heart, and inspire you to walk confidently in the purpose God has for your life.
// Thank you for joining us. We look forward to growing together in faith.`;

// /* STATE */

// const [typedText,setTypedText] = useState("");
// const [showMore,setShowMore] = useState(false);

// /* =========================
// TYPING EFFECT (RUNS ONCE)
// ========================= */

// useEffect(() => {

//   let index = 0;

//   const interval = setInterval(() => {

//     if (index < fullText.length) {
//       setTypedText(fullText.substring(0, index + 1));
//       index++;
//     } else {
//       clearInterval(interval);
//     }

//   }, 20);

//   return () => clearInterval(interval);

// }, []);

// /* =========================
// SHOW MORE DELAY (RUNS ONCE)
// ========================= */

// useEffect(() => {

//   const id = setTimeout(() => {
//     setShowMore(true);
//   }, 8000);

//   return () => clearTimeout(id);

// }, []);

// /* =========================
// RETURN
// ========================= */

// return(

// <Container>

// <Div>

// {/* HALO ANIMATION */}

// <HaloContainer>

// <CenterLogo src={logo}/>

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

// {/* TEXT */}

// <ContentSection>

// <Column>

// <Text>
// {typedText}
// </Text>

// </Column>

// </ContentSection>

// </Div>

// {/* MORE BUTTON */}

// {showMore && (

// <More onClick={()=>navigate("/about")}>
// More about Faith & Miracle Center
// </More>

// )}

// </Container>

// );

// };

// export default AboutComponent;







import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import "animate.css/animate.min.css";
import logo from "../Images/logo.png";

import car10 from "../Images/p19.jpeg";
import car11 from "../Images/p12.jpeg";
import car12 from "../Images/p8.jpeg";
import car13 from "../Images/p9.jpeg";
import car14 from "../Images/p5.jpeg";
import car15 from "../Images/h5.jpeg";

import { useNavigate } from "react-router-dom";

/* =========================
ANIMATIONS
========================= */

const orbit = keyframes`
from { transform: rotateY(0deg) translateZ(220px) rotateY(0deg); }
to { transform: rotateY(360deg) translateZ(220px) rotateY(-360deg); }
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
padding-left:5px;
padding-right:5px;
overflow:hidden;
`;

const Div = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
gap:10px;
flex-direction:column;
`;

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
background-image:linear-gradient(135deg,rgb(255,65,179),rgb(67,61,248),rgb(47,161,104));
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
  const navigate = useNavigate();
  const orbitImages = [car10, car11, car12, car13, car14, car15];

  const fullText = `Welcome to Faith and Miracle Center Worldwide. We are honored that you have chosen to worship with us.
At Faith and Miracle Center, we believe that church is more than a gathering—it is a community where people grow in faith, discover their purpose, and experience the transforming love of God.
Our desire is to create an environment where individuals and families can deepen their relationship with God through prayer, biblical teaching, and meaningful fellowship.
Whether you are exploring faith for the first time or seeking a church home, you are welcome here.
We encourage you to participate in our services, connect with our community, and discover the opportunities available for spiritual growth and service.
Our prayer is that your time with us will strengthen your faith, encourage your heart, and inspire you to walk confidently in the purpose God has for your life.
Thank you for joining us. We look forward to growing together in faith.`;

  const [typedText, setTypedText] = useState("");
  const [showMore, setShowMore] = useState(false);

  const sectionRef = useRef(null);
  const hasTyped = useRef(false); // ✅ ensures typing runs only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped.current) {
          hasTyped.current = true;

          // typing effect
          let index = 0;
          const interval = setInterval(() => {
            if (index < fullText.length) {
              setTypedText(fullText.substring(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
            }
          }, 20);

          // showMore after delay
          const timeoutId = setTimeout(() => setShowMore(true), 8000);

          return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
          };
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [fullText]);

  return (
    <Container ref={sectionRef}>
      <Div>
        <HaloContainer>
          <CenterLogo src={logo} />
          <OrbitRing>
            {orbitImages.map((img, i) => (
              <OrbitItem key={i} delay={i * 2} style={{ backgroundImage: `url(${img})` }} />
            ))}
          </OrbitRing>
        </HaloContainer>

        <ContentSection>
          <Column>
            <Text>{typedText}</Text>
          </Column>
        </ContentSection>
      </Div>

      {showMore && (
        <More onClick={() => navigate("/about")}>
          More about Faith & Miracle Center
        </More>
      )}
    </Container>
  );
};

export default AboutComponent;