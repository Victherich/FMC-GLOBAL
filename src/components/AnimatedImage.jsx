import React from "react";
import styled, { keyframes } from "styled-components";

/* =========================
ANIMATIONS
========================= */

const float = keyframes`
0%{transform:translateY(0px) scale(1)}
50%{transform:translateY(-15px) scale(1.03)}
100%{transform:translateY(0px) scale(1)}
`;

const shimmer = keyframes`
0%{transform:translateX(-100%)}
100%{transform:translateX(200%)}
`;

const glowPulse = keyframes`
0%{opacity:0.3}
50%{opacity:0.7}
100%{opacity:0.3}
`;

/* =========================
CONTAINER
========================= */

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
// padding:80px 20px;
background:#f9fafb;
`;

/* =========================
IMAGE BOX
========================= */

const ImageBox = styled.div`
position:relative;
width:100%;
height:420px;
border-radius:20px;
overflow:hidden;
cursor:pointer;

box-shadow:0 20px 60px rgba(0,0,0,0.15);

animation:${float} 6s ease-in-out infinite;

&:hover img{
transform:scale(1.1);
}

&:hover::after{
opacity:1;
}
`;

/* =========================
IMAGE
========================= */

const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;
transition:0.6s ease;
`;

/* =========================
GRADIENT GLOW
========================= */

const Glow = styled.div`
position:absolute;
top:-40%;
left:-40%;
width:180%;
height:180%;
background:radial-gradient(circle, rgba(255,65,179,0.25), transparent);
animation:${glowPulse} 6s infinite;
pointer-events:none;
`;

/* =========================
SHIMMER EFFECT
========================= */

const Shimmer = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:linear-gradient(
120deg,
transparent,
rgba(255,255,255,0.4),
transparent
);
transform:translateX(-100%);
pointer-events:none;

${ImageBox}:hover &{
animation:${shimmer} 1.2s ease;
}
`;

/* =========================
COMPONENT
========================= */

export default function AnimatedImage(){

return(

<Wrapper>

<ImageBox>

<Img src="https://images.unsplash.com/photo-1507692049790-de58290a4334" />

<Glow/>
<Shimmer/>

</ImageBox>

</Wrapper>

)

}