import React from 'react'
import AboutHero from './AboutHero'
import MembershipAndCovenant from './MembershipAndCovenant'
import FoundersSection from './FoundersSection'
import AboutChurch from './AboutChurch'
import WhyWeExistPremium from './WhyWeExistPremium'
import AnimatedImage from './AnimatedImage'
import WhatWeBelieve from './WhatWeBelieve'
import h5 from '../Images/h5.jpeg'
import h1 from '../Images/h1.jpeg'


const AboutPage = ()=>{
    return(
        <div>
<AboutHero/>
<AboutChurch/>
<AnimatedImage/>
<WhyWeExistPremium/>
<AnimatedImage imageSource={h5}/>
<WhatWeBelieve/>
<MembershipAndCovenant/>
<AnimatedImage imageSource={h1}/>
<FoundersSection/>
        </div>
    )
}

export default AboutPage