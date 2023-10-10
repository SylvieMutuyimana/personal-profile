import returnGroup from '@/components/groups';
import Projects from '@/components/projects';
import rendingPage from '@/components/rendingPage';
import Skills from '@/components/skills';
const Index = () => {
  return (
    <div>
      <div id='#home'>
        {rendingPage()}
      </div>
      <div id='#projects'>
        {returnGroup('PROJECTS', Projects, '/projects')}
      </div>
      <div id='#skills'>
        {returnGroup('SKILLS', Skills, '/skills')}
      </div>
    </div>
);
};

export default Index;
