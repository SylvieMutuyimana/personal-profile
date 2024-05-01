import returnGroup from '@/components/groups';
import Projects from '@/components/projects';
import rendingPage from '@/components/rendingPage';
import Skills from '@/components/skills';
import SmallProjects from '@/components/smallProjects';
const Index = ({allProjects, myAbout, myQuotes, mySkills}) => {
  return (
    <div>
      <div id='#home'>
        {rendingPage(myAbout, myQuotes)}
      </div>
      <div id='#projects'>
        {returnGroup('PROJECTS', Projects, '/projects', allProjects)}
      </div>
      <div id='#smallprojects'>
        {returnGroup('MINI APPS', SmallProjects, '/smallprojects', allProjects)}
      </div>    
      <div id='#skills'>
        {returnGroup('SKILLS', Skills, '/skills', mySkills)}
      </div>
    </div>
  );
};

export default Index;
