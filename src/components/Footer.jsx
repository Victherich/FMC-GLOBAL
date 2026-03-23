import React from "react";
import styled, { keyframes } from "styled-components";
import logo from '../Images/logo.png'
import { 
FaFacebookF, 
FaYoutube, 
FaInstagram, 
FaTwitter 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const gradientMove = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
`;

const glow = keyframes`
0%{box-shadow:0 0 5px rgba(255,215,0,0.4)}
50%{box-shadow:0 0 20px rgba(255,215,0,0.9)}
100%{box-shadow:0 0 5px rgba(255,215,0,0.4)}
`;

const pulse = keyframes`
0%{
transform:scale(1);
}
50%{
transform:scale(1.3);
}
100%{
transform:scale(1);
}
`;

// const FooterContainer = styled.footer`
// // background:linear-gradient(-45deg,#0f2027,#203a43,#2c5364,#1a1a1a);
// background:linear-gradient(-45deg,#0f2027,#203a43,#2c5364,black);
// background-size:400% 400%;
// animation:${gradientMove} 18s ease infinite;

// color:white;
// padding:70px 40px 30px;
// `;



const FooterContainer = styled.footer`
background: linear-gradient(
  -45deg,
  #001233,   /* darker deep blue */
  #002366,   /* medium-dark blue */
  #000000,   /* dark gold */
  #b8860b    /* highlight gold */
);

background-size:400% 400%;
animation:${gradientMove} 18s ease infinite;

color:white;
padding:70px 40px 30px;
`;

const FooterGrid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:40px;
margin-bottom:40px;
`;

const Column = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const Title = styled.h3`
color:#ffd700;
margin-bottom:10px;
font-size:18px;
`;

const Link = styled.a`
text-decoration:none;
color:#ddd;
font-size:14px;
transition:0.3s;
cursor:pointer;

&:hover{
color:#ffd700;
transform:translateX(5px);
font-weight:bold;
text-decoration:underline;
}
`;

const Logo = styled.h2`
color:white;
font-weight:700;


span{
color:#ffd700;
}
`;

// const Text = styled.p`
// font-size:14px;
// color:#ccc;
// line-height:1.6;
// `;

const Text = styled.p`
  font-size:13px;
  color:#ccc;
  line-height:1.5;
`;

const SocialRow = styled.div`
display:flex;
gap:12px;
margin-top:10px;
`;

const Social = styled.div`
width:35px;
height:35px;
border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

background:#222;
cursor:pointer;
transition:0.3s;
animation:${pulse} 3s ease-in-out infinite;

&:hover{
background:#ffd700;
color:black;
transform:scale(1.15);
}
`;

const NewsletterInput = styled.input`
padding:10px;
border:none;
border-radius:20px;
outline:none;
margin-top:5px;
`;

const SubscribeBtn = styled.button`
margin-top:10px;
padding:10px;
border:none;
border-radius:20px;

background:linear-gradient(135deg,#ffd700,#ff9a00);
cursor:pointer;

font-weight:600;

animation:${glow} 4s infinite;
`;

const Scripture = styled.div`
text-align:center;
margin:40px 0;
font-style:italic;
color:#eee;
font-size:15px;
`;

const BottomBar = styled.div`
border-top:1px solid rgba(255,255,255,0.15);
padding-top:15px;

display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:10px;

font-size:13px;
color:#aaa;
// text-align:center;

// @media(max-width:768px){
// flex-direction:column;
// justify-content:center;
// }
`;

const LogoImage = styled.img`
width:100px;
animation:${pulse} 3s ease-in-out infinite;
`

export default function Footer(){

    const navigate = useNavigate();

const links = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },

  { title: "Ministries", link: "/ministries" },
  { title: "Sermons & Media", link: "/sermons" },
  { title: "Events", link: "/events" },
  { title: "Donations & Tithes", link: "/donations" },

  { title: "Inspirationals", link: "/inspirationals" },
  { title: "Testimonies", link: "/testimonies" },
    { title: "Contact", link: "/contact" },
];

return (

<FooterContainer>

<FooterGrid>

<Column>
<LogoImage src={logo} alt='logo' />
<Logo>FMC <span>Global</span></Logo>

<Text>
Faith and Miracle Center is a place of faith, hope,
love and miracles. Join us as we worship God and grow together
in Christ.
</Text>

<SocialRow>

<Social>
<FaFacebookF/>
</Social>

<Social>
<FaYoutube/>
</Social>

<Social>
<FaInstagram/>
</Social>

<Social>
<FaTwitter/>
</Social>

</SocialRow>

</Column>


<Column>

<Title>Quick Links</Title>

{links.map((link,i)=>(
<Link key={i} onClick={()=>navigate(`${link.link}`)}>{link.title}</Link>
))}

</Column>


<Column>
  <Title>Locations</Title>

  <Text><strong>USA</strong></Text>

  <Text>Georgia</Text>
  <Text>3771 Floyd Rd, Marietta GA 30060.</Text>
  <Text>Tel- 770 310 3539.</Text>

  <Text style={{marginTop:"10px"}}>Texas</Text>
  <Text>11160 Southwest Freeway Houston TX 77031</Text>

  <Text style={{marginTop:"10px"}}><strong>Lagos Headquarters</strong></Text>
  <Text>Solution House</Text>
  <Text>1 Opa Aro Close</Text>
  <Text>Off Tunji Adebayo street, fagba Lagos</Text>
  <Text>0703 643 4618</Text>

  <Text style={{marginTop:"10px"}}><strong>Miracle House</strong></Text>
  <Text>3 Sholanke street ifako Agege Lagos</Text>
  <Text>0703 643 4618</Text>

</Column>


<Column>
  <Title>Service Times</Title>

  <Text><strong>USA locations</strong></Text>
  <Text>Sunday 10am</Text>
  <Text>Wednesday 6pm</Text>

  <Text style={{marginTop:"10px"}}><strong>Lagos locations</strong></Text>
  <Text>Sunday 9am</Text>
  <Text>Wednesday 6pm</Text>

  <Text style={{marginTop:"10px"}}><strong>Second Saturday</strong></Text>
  <Text>Mountain Moving Miracle Service 9am</Text>

  <Text style={{marginTop:"10px"}}><strong>Quarterly program</strong></Text>
  <Text>Solution Night</Text>
  <Text>3rd Friday 10pm.</Text>

</Column>


<Column>
  <Title>Contact</Title>

  <Text>New emails needs to be generated from the new web name.</Text>

  <Text style={{marginTop:"10px"}}>info@yourdomain.com</Text>
  <Text>support@yourdomain.com</Text>
  <Text>prayer@yourdomain.com</Text>

</Column>


{/* <Column>

<Title>Newsletter</Title>

<Text>
Receive sermons, devotionals and church updates weekly.
</Text>

<NewsletterInput placeholder="Your email"/>

<SubscribeBtn>
Subscribe
</SubscribeBtn>

</Column> */}

</FooterGrid>


<Scripture>

“Now faith is the substance of things hoped for,
the evidence of things not seen.” — Hebrews 11:1

</Scripture>


<BottomBar>

<div>
© {new Date().getFullYear()} Faith and Miracle Center Church. All Rights Reserved.
</div>

<div onClick={()=>window.open('https://www.echobyteconcept.com', "_blank")} style={{cursor:"pointer"}}>
POWERED BY ECHOBYTE CONCEPT
</div>

</BottomBar>

</FooterContainer>

)

}