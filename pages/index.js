import ReturnGroup from '@/components/groups';
import Projects from '@/components/projects';
import rendingPage from '@/components/rendingPage';
import Skills from '@/components/skills';
import SmallProjects from '@/components/smallProjects';
import { useState } from 'react';
const Index = ({allProjects, myAbout, myQuotes, mySkills}) => {
  const [expandedSection, setExpanded] = useState(null)
  const changeExpanded =(name)=>{
    if(name === expandedSection){
      setExpanded(null)
    }else{
      setExpanded(name)
    }
  }
  console.log('expandedSection: ', expandedSection)
  return (
    <div>
      <div id='#home'>
        {rendingPage(myAbout, myQuotes)}
      </div> 
      <div id='#projects'>
        <ReturnGroup name={'PROJECTS'} DynamicComponent={Projects} theData={allProjects} expandedSection={expandedSection} changeExpanded={changeExpanded}/>
      </div>
      <div id='#smallprojects'>
        <ReturnGroup name={'MINI APPS'} DynamicComponent={SmallProjects} theData={allProjects} expandedSection={expandedSection} changeExpanded={changeExpanded}/>
      </div>    
      <div id='#skills'>
        <ReturnGroup name={'SKILLS'} DynamicComponent={Skills} theData={mySkills} expandedSection={expandedSection} changeExpanded={changeExpanded}/>
      </div>
    </div>
  );
};

export default Index;