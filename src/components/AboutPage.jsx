import React from 'react'
import AboutHero from './AboutHero'
import MembershipAndCovenant from './MembershipAndCovenant'
import FoundersSection from './FoundersSection'
import AboutChurch from './AboutChurch'
import WhyWeExistPremium from './WhyWeExistPremium'
import AnimatedImage from './AnimatedImage'
import WhatWeBelieve from './WhatWeBelieve'


const AboutPage = ()=>{
    return(
        <div>
<AboutHero/>
<AboutChurch/>
<AnimatedImage/>
<WhyWeExistPremium/>
<AnimatedImage/>
<WhatWeBelieve/>
<MembershipAndCovenant/>
<AnimatedImage/>
<FoundersSection/>
        </div>
    )
}

export default AboutPage