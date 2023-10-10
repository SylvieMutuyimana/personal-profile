import returnGroup from '@/components/groups';
import Projects from '@/components/projects';
import rendingPage from '@/components/rendingPage';
import Skills from '@/components/skills';
const Index = ({mySkills, myAbout, myProjects, myQuotes}) => {
  return (
    <div>
      <div id='#home'>
         {
            myQuotes? 
            rendingPage(myQuotes, myAbout):
            rendingPage()
          }
      </div>
      <div id='#projects'>
        {
          myProjects? 
          returnGroup('PROJECTS', Projects, '/projects', myProjects):
          returnGroup('PROJECTS', Projects, '/projects')
        }
      </div>
      <div id='#skills'>
        {
          mySkills? 
          returnGroup('SKILLS', Skills, '/skills', mySkills):
          returnGroup('SKILLS', Skills, '/skills')
        }
      </div>
    </div>
);
};

export default Index;
