import React from "react";
import styled, { keyframes } from "styled-components";
import { Zoom} from "react-awesome-reveal";
import { useLocation } from "react-router-dom";
import p7 from '../Images/p7.jpeg'

/* =========================
ANIMATIONS
========================= */

const float = keyframes`
0%{transform:translateY(0px)}
50%{transform:translateY(-30px)}
100%{transform:translateY(0px)}
`;

const fade = keyframes`
0%{opacity:0; transform:translateY(40px)}
100%{opacity:1; transform:translateY(0)}
`;

/* =========================
SECTION
========================= */

const Section = styled.section`
padding:120px 20px;
background:linear-gradient(180deg,#ffffff,#f3f4f6);
display:flex;
flex-direction:column;
align-items:center;
`;

/* =========================
TITLE
========================= */

const Title = styled.h2`
font-size:3rem;
font-weight:800;
text-align:center;
margin-bottom:10px;

background-image:linear-gradient(
135deg,
rgb(158, 44, 112),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

const Subtitle = styled.p`
font-size:1.3rem;
font-weight:600;
margin-bottom:60px;
color:#555;
text-align:center;
`;

/* =========================
CONTENT LAYOUT
========================= */

const Content = styled.div`
display:flex;
flex-wrap:wrap;
gap:60px;
max-width:1200px;
align-items:flex-start;
justify-content:center;
`;

/* =========================
PASTOR COLUMN
========================= */

const Pastors = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:25px;
`;

const Portraits = styled.div`
display:flex;
gap:30px;
`;

const PortraitCard = styled.div`
text-align:center;
animation:${float} 6s ease-in-out infinite;
`;

const Portrait = styled.img`
width:300px;
height:300px;
border-radius:50%;
object-fit:cover;
border:4px solid #ffd700;
box-shadow:0 10px 30px rgba(0,0,0,0.15);
`;

const PastorName = styled.h4`
margin-top:10px;
font-weight:700;

background-image:linear-gradient(
135deg,
rgb(158, 44, 112),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

const Role = styled.p`
font-size:.9rem;
color:#666;
`;

/* =========================
MESSAGE CARD
========================= */

const MessageCard = styled.div`
flex:1;
min-width:320px;
max-width:700px;

background:white;
padding:40px;
border-radius:20px;

box-shadow:0 20px 60px rgba(0,0,0,0.1);

line-height:1.9;
font-size:0.95rem;

max-height:550px;
overflow-y:auto;

animation:${fade} 1s ease;

&::-webkit-scrollbar{
width:6px;
}

&::-webkit-scrollbar-thumb{
background:#ddd;
border-radius:20px;
}
`;

const MessageTitle = styled.h3`
font-size:1.5rem;
margin-bottom:20px;
font-weight:700;

background-image:linear-gradient(
135deg,
rgb(158, 44, 112),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
`;

const Highlight = styled.div`
margin-top:30px;
font-size:1.2rem;
font-weight:700;
background-image:linear-gradient(
135deg,
rgb(255,65,179),
rgb(67,61,248)
);

-webkit-background-clip:text;
background-clip:text;
color:transparent;
text-align:center;
`;

/* =========================
COMPONENT
========================= */

export default function WordFromPastor(){

const location = useLocation();

if(location.pathname==='/dashboard'|| location.pathname==='/login' || location.pathname==='/signup'){
    return;
}

return(

<Section>

<Zoom triggerOnce={false} duration={4000}>
<Title>A Word from the Pastor</Title>
</Zoom>
<Zoom duration={4000} triggerOnce={false}>
<Subtitle>Your Setback is a Setup for a Comeback</Subtitle>
</Zoom>
<Content>

{/* Pastors */}

<Pastors>

<Portraits>

<PortraitCard>
<Portrait src={p7} alt='Pastor'/>
<PastorName>Bishop Taiwo Kuku & Pastor Sade Kuku</PastorName>
<Role>Founder & General Overseer</Role>
</PortraitCard>

{/* <PortraitCard>
<Portrait src="/sade.jpg"/>
<PastorName>Pastor Sade Kuku</PastorName>
<Role>Co-Pastor</Role>
</PortraitCard> */}

</Portraits>

</Pastors>


{/* MESSAGE */}

<MessageCard>

<MessageTitle>Welcome to FMC GLOBAL</MessageTitle>

<p>
Thank You for visiting The Faith and Miracle Center God will work for you... if you let Him. When you have a heart directed to- ward the world, toward material things, and to- ward destructive sinful desires, or directed toward just yourself and your pro- blems then you leave God out. When you are willing to let God into your heart and you are willing to let God work for you, in you, and through you, then He will work for you in your life. God needs you to always have an attitude of compliance and willingness toward His will in your life. God always stands at the door of your heart wanting to come in and live within you. When you surrender and open your heart to His love then he comes into your life and works miracles and performs wonders. An open heart permits God to wipe away painful memories. An open heart permits God to heal wounds that have never healed. An open heart permits God to inspire encouragement within you. An open heart to Christ's love gives you a reason to live, breath, and continue to walk the Lord's path each day. When you take an open heart to Christ dying on the Cross then you come away from the Cross as a new person. In the spiritual wars in your life, when everything looks its darkest, an open heart reaching up to God is always touched by God's love for you. Every obstacle in life no matter how great it seems can be turned into a glorious testament to God's redeeming love. Make no mistake that you cannot turn obstacles into glories on your own. However, with God's power and His force of love within you, even the most daunting of problems can be con- quered... for God cares for you.
</p>

<p>
What we most often expect is for God to do visible works that amaze the eye and startle the senses, yet God's greatest works are the ones we do not see. For His greatest works are the ones that take place within the hearts and lives of men and women like you. We can blast away mountains and carry off the rocks in trucks. However, no matter how hard we try, we cannot, by ourselves and on our own, change the human heart from darkness into light. We cannot, on our own give people hope in darkness. We cannot, on our own fill their lives with meaning and purpose.
</p>

<p>
However, we have a God, a Christ, and the Holy Spirit that does the miraculous. Today, you can have the miraculous done in your life by opening your heart to Christ and to the love poured through Him by our Father in heaven.
</p>

<p>
No matter what your situation, no matter what your circumstances might be, God knows already. God cares anyway, and God loves you regardless. It is so impor- tant that you know that Christ is waiting every minute of your life for you to turn to Him.
</p>

<p>
A Christian believer has a reason to live.
That reason to live is to do the will of God.
That reason to live inspires you to strive to overcome every obstacle and defeat every foe.
That reason to live pulls you up out of yourself... to a place where the Father, the Son, and the Holy Spirit works in your life... and to a place where they pour blessings over you each day.
</p>

<Highlight>
Remember your setback is a setup for a comeback!
</Highlight>

</MessageCard>

</Content>

</Section>

)

}