import React from 'react';
import { DiCloud9, DiCode, DiDatabase, DiFirebase, DiHtml5, DiJavascript, DiMozilla, DiMysql, DiPython, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle>
      Technologies
   </SectionTitle>
   <SectionText>
     I've worked with range of Technologiesin cloud and web development.Including backend , Front End and Designing solutions.
   </SectionText>
   <List>
   <ListItem>
     <DiCloud9 size="3rem"/>
       <ListContainer>
         <ListTitle>Azure</ListTitle>
         <ListParagraph>Experience with Azure Cloud Technology(ARM, Azure Policy, Azure LightHouse, Managed Apps, API Managemenrt, Azure Cloud Service)</ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiMozilla size="3rem"/>
       <ListContainer>
         <ListTitle>Web Technologies</ListTitle>
         <ListParagraph>Experience with HTML, CSS & Various Web Frameworks</ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
     <DiJavascript size="3rem"/>
       <ListContainer>
         <ListTitle>Javascript Language</ListTitle>
         <ListParagraph>Experience with Js & Libraries</ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
     <DiCode size="3rem"/>
       <ListContainer>
         <ListTitle>Programming</ListTitle>
         <ListParagraph>Experience with Programming in C++, Python, Java programming languages</ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
     <DiDatabase size="3rem"/>
       <ListContainer>
         <ListTitle>Database Technology</ListTitle>
         <ListParagraph>Experience with Databases(SQL/NOSQL)</ListParagraph>
       </ListContainer>
     </ListItem>
    
  
     
   </List>
 </Section>
);

export default Technologies;
