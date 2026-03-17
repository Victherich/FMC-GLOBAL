import React, { useState,useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import logo from '../Images/logo.png'
import { useNavigate } from "react-router-dom";
import 'animate.css';

const gradientMove = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
`;

const floatLight = keyframes`
0%{transform:translateY(0px)}
50%{transform:translateY(-15px)}
100%{transform:translateY(0px)}
`;

const glow = keyframes`
0%{box-shadow:0 0 10px rgba(255,255,255,0.3)}
50%{box-shadow:0 0 25px rgba(255,255,255,0.8)}
100%{box-shadow:0 0 10px rgba(255,255,255,0.3)}
`;

// const moveText = keyframes`
// 0% { transform: translateX(0); }
// 50% { transform: translateX(1500px); }
// 100% { transform: translateX(0); }
// `;


const slideFastContinuous = keyframes`
  from {
    transform: translateX(-130%);
  }
  to {
    transform: translateX(130%);
  }
`;

// const HeaderContainer = styled.header`
// position:sticky;
// top:0;
// z-index:999;
// width:100%;
// padding:15px 10px;

// display:flex;
// align-items:center;
// justify-content:space-between;

// background: linear-gradient(
// -45deg,
// #0f2027,
// #203a43,
// #2c5364,
// #ffb347,
// #ffcc33
// );

// background-size:400% 400%;
// animation:${gradientMove} 5s ease infinite;

// backdrop-filter: blur(15px);
// border-bottom:1px solid rgba(255,255,255,0.2);
// `;


const HeaderContainer = styled.header`
position:sticky;
top:0;
z-index:999;
width:100%;
padding:15px 10px;

display:flex;
align-items:center;
justify-content:space-between;

/* Updated blue-to-gold gradient */
background: linear-gradient(
  -45deg,
  #001f4d,   /* deep blue */
  #0033a0,   /* medium blue */
 #000000,
   #b8860b  /* slightly lighter dark gold */
);

background-size:400% 400%;
animation:${gradientMove} 5s ease infinite;

backdrop-filter: blur(15px);
border-bottom:1px solid rgba(255,255,255,0.2);
`;

const Logo = styled.div`
font-size:1.2rem;
font-weight:700;
color:white;
letter-spacing:1px;
display:flex;
justify-content:center;
align-items:center;

p {
  animation: ${slideFastContinuous} 8s linear infinite;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.5),   /* subtle dark shadow */
    0 0 10px rgba(0, 0, 0, 0.8);   /* golden glow effect */
  font-weight: 700;                     /* optional bold for better visibility */
                     /* golden text to match glow */
}
span{
  color:#ffd700;
  margin-left:3px;
  text-decoration:underline;

  /* animation for moving text */
  display:inline-block;
  
}

img{
  width:50px;
  margin-right:10px;
}
`;

const Nav = styled.nav`
display:flex;
gap:25px;
align-items:center;
`;

const NavItem = styled.a`
color:white;
font-weight:500;
font-size:15px;
cursor:pointer;
position:relative;
text-decoration:none;
transition:all 0.3s ease;

&:hover{
color:#ffd700;
transform:translateY(-3px);
}

&::after{
content:"";
position:absolute;
left:0;
bottom:-5px;
width:0%;
height:2px;
background:#ffd700;
transition:0.3s;
}

&:hover::after{
width:100%;
}
`;

const DonateButton = styled.button`
padding:10px 18px;
border:none;
border-radius:30px;

font-weight:600;
cursor:pointer;

background:linear-gradient(135deg,#ffd700,#ff9a00);

animation:${glow} 3s infinite;

transition:0.3s;

&:hover{
transform:scale(1.08);
}
`;

const FloatingLight = styled.div`
position:absolute;
top:5px;
left:50%;
width:120px;
height:120px;

background:radial-gradient(circle, rgba(255,255,255,0.4), transparent);
border-radius:50%;

filter:blur(30px);
animation:${floatLight} 6s ease-in-out infinite;
`;

const MobileMenuButton = styled.div`
display:none;
cursor:pointer;
color:white;
font-size:28px;

@media(max-width:900px){
display:block;
}
`;

const MobileMenu = styled.div`
position:absolute;
top:80px;
right:0;
width:260px;

background:rgba(0,0,0,0.85);
backdrop-filter:blur(10px);

padding:30px;

flex-direction:column;
gap:18px;

display:${props => props.open ? "flex" : "none"};
transition:0.4s;

p{
color:white;
text-decoration:none;
font-size:16px;
cursor:pointer;
}

`;

const DesktopMenu = styled.div`
display:flex;
gap:25px;

@media(max-width:900px){
display:none;
}
`;

const CarContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 200px;
  height: 30px;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width:428px){
    width:70%;
  }
`;

export default function Header(){

const [open,setOpen] = useState(false)
const navigate = useNavigate();
const menuRef = useRef(null);
const buttonRef = useRef(null);

const menus = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Ministries", link: "/ministries" },
  { title: "Sermons & Media", link: "/sermons" },
  { title: "Events", link: "/events" },
  { title: "Donations & Tithes", link: "/donations" },
//   { title: "Gallery", link: "/gallery" },
  { title: "Blog", link: "/blog" },
  { title: "Testimonials", link: "/testimonials" },
  { title: "Contact", link: "/contact" }
]

useEffect(() => {

  function handleClickOutside(event) {

    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }

  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, []);

return (

<HeaderContainer>

<FloatingLight/>

<Logo>
    <img src={logo} alt='logo'/>
    <CarContainer>
<p>FMC <span>GLOBAL</span></p>
    </CarContainer>

</Logo>

<DesktopMenu>

<Nav>

{menus.map((menu,i)=>(
<NavItem  onClick={()=>navigate(`${menu.link}`)} key={i}>{menu.title}</NavItem>
))}

<DonateButton onClick={()=>navigate('/donations')}>
Give
</DonateButton>

</Nav>

</DesktopMenu>

<MobileMenuButton ref={buttonRef} onClick={()=>setOpen(!open)}>
☰
</MobileMenuButton>

<MobileMenu ref={menuRef} open={open}  className="animate__animated animate__fadeInRight">

{menus.map((menu,i)=>(
<p  onClick={()=>navigate(`${menu.link}`)} key={i}>{menu.title}</p>
))}

<DonateButton onClick={()=>navigate('/donations')}>
Donate
</DonateButton>

</MobileMenu>

</HeaderContainer>

)
}