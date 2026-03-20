import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Fade, Slide, Flip } from "react-awesome-reveal"
import m1 from '../Images/a1.png'

const fade = keyframes`
0%{opacity:0}
100%{opacity:1}
`

const float = keyframes`
0%{transform:translateY(0)}
50%{transform:translateY(-15px)}
100%{transform:translateY(0)}
`

const Hero = styled.section`
height:70vh;
position:relative;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
background-image:url(${m1});
background-size:cover;
background-position:center;
`

const Overlay = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
`

const HeroContent = styled.div`
position:relative;
z-index:2;
text-align:center;
color:white;
max-width:900px;
padding:20px;
`

const HeroTitle = styled.h1`
font-size:4rem;
font-weight:800;
  text-shadow: 0 5px 15px rgba(0,0,0,1);
span{
color:#ffd700;
}

@media(max-width:768px){
font-size:2.4rem;
}
`

const HeroSubtitle = styled.p`
margin-top:20px;
font-size:1.3rem;
color:#ddd;
line-height:1.7;
font-weight:bold;
  text-shadow: 0 5px 15px rgba(0,0,0,1);
`

const GlowCircle = styled.div`
position:absolute;
width:400px;
height:400px;
border-radius:50%;
background:radial-gradient(circle,rgba(255,215,0,.4),transparent);
filter:blur(120px);
animation:${float} 6s infinite;
`

const slides = [

{
text:"Faith and Miracle Center Worldwide is a community built on prayer, faith and the transforming power of God's word."
},

{
text:"We are committed to helping people grow spiritually, discover their purpose and walk confidently in their calling."
},

{
text:"Our mission is to create an atmosphere where lives are healed, restored and empowered through God's presence."
},

{
text:"Together we raise believers who influence their families, communities and the world for Christ."
},

]

export default function AboutHero(){

const [index,setIndex] = useState(0)

useEffect(()=>{
const interval=setInterval(()=>{
setIndex(prev=>(prev+1)%slides.length)
},3500)

return()=>clearInterval(interval)
},[])

return(

<Hero>

<Overlay/>

<GlowCircle/>

<HeroContent>

{/* Title animation */}
<Flip triggerOnce={false} duration={4000}>
<HeroTitle>
About <span>Faith & Miracle Center</span>
</HeroTitle>
</Flip>

{/* Subtitle animation */}
<Slide direction="left" triggerOnce={false} duration={4000}>
<HeroSubtitle>
{slides[index].text}
</HeroSubtitle>
</Slide>

</HeroContent>

</Hero>

)
}