import React from "react";
import styled, { keyframes } from "styled-components";
import car10 from "../Images/logo.png";
import car11 from "../Images/logo.png";
import car12 from "../Images/logo.png";
import car13 from "../Images/logo.png";
import car14 from "../Images/logo.png";
import car15 from "../Images/logo.png";

const cubeRotate = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(360deg);
}
`;

const CubeContainer = styled.div`
perspective: 1000px;
width: ${({ size }) => size || "300px"};
height: ${({ size }) => size || "300px"};
z-index:2;

@media(max-width:1280px){
width: ${({ size2 }) => size2 || "100px"};
height: ${({ size2 }) => size2 || "100px"};

}
`;

const Cube = styled.div`
width: 100%;
height: 100%;
position: relative;
transform-style: preserve-3d;
animation: ${cubeRotate} ${({ speed }) => speed || "10s"} infinite linear;


@media(max-width:768px){
animation: ${cubeRotate} ${({ speed2 }) => speed2 || "10s"} infinite linear;

}
`;

const Face = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
border-radius: 12px;
opacity: 0.95;

box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
`;

export default function RotatingCube({
// images = [],
size = "200px",
speed = "10s",

size2 = "100px",
speed2 = "10s"
}) {


    // Cube face config
    const images = [
      car10,
      car11,
      car12, 
      car13, 
      car14,
      car15 ,
    ];

const distance = parseInt(size) / 2;

const faces = [
{ img: images[0], transform: `rotateY(0deg) translateZ(${distance}px)` },
{ img: images[1], transform: `rotateY(90deg) translateZ(${distance}px)` },
{ img: images[2], transform: `rotateY(180deg) translateZ(${distance}px)` },
{ img: images[3], transform: `rotateY(-90deg) translateZ(${distance}px)` },
{ img: images[4], transform: `rotateX(90deg) translateZ(${distance}px)` },
{ img: images[5], transform: `rotateX(-90deg) translateZ(${distance}px)` }
];

return (

<CubeContainer size={size}>

<Cube speed={speed}>

{faces.map((face, i) => (
<Face
key={i}
style={{
backgroundImage: `url(${face.img})`,
transform: face.transform
}}
/>
))}

</Cube>

</CubeContainer>

);

}