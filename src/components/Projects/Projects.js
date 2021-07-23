import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo =[{
  title : `Proj1`,
  decription:`this is rthe dec`
},{
  title : `Proj2`,
  decription:`this is rthe dec`
},{
  title : `Proj3`,
  decription:`this is rthe dec`
},{
  title : `Proj4`,
  decription:`this is rthe dec`
}]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
    {/* destrcture the keys coming from projects like title, image, id etc */}
      {projects.map(({id,image,description, title,tags,visit,source}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>

          <CardInfo>
            {description}
          </CardInfo>

          <div>
            <TitleContent>
              Stack
              <TagList>
                {tags.map((tag,i) => (
                      <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </TitleContent>
          </div>
          <UtilityList>
             <ExternalLinks href={visit}>Code</ExternalLinks>
             <ExternalLinks href={source}>source</ExternalLinks>
          </UtilityList>

          </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;