import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Hi there!!<br />
            Welcome To My Portfolio Website
         </SectionTitle>
         <SectionText>
            I am Himanshu a Computer Science Engineer, currently working at Microsoft in Azure Cloud Integration Engineering Team!! (Azure Developer PaaS POD).
            <br />
         </SectionText>
         <Button onClick= {() => window.location = "https://www.linkedin.com/in/hbofficial13/"}>
           Learn more.
         </Button>
      </LeftSection>
  </Section>
);

export default Hero;