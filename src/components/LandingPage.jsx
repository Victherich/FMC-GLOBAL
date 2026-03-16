import React from 'react'
import HeroSection from './Hero'
import AboutComponent from './AboutComponent'
import AutoAudioPlayer from './AutoAudioPlayer'
import worshipMusic from "../Images/holy.mp3";
import styled,{keyframes} from 'styled-components';

const LandingPage = ()=>{



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
    
    const Container = styled.div`
    // background:linear-gradient(-45deg,#0f2027,#203a43,#2c5364,#1a1a1a);
    // background:linear-gradient(-45deg,#0f2027,#203a43,#2c5364,black);
    background-size:400% 400%;
    animation:${gradientMove} 18s ease infinite;


    `;
    
    return(
        <Container>
            <AutoAudioPlayer src={worshipMusic}/>
            <HeroSection/>
            <AboutComponent/>
        </Container>
    )
}

export default LandingPage