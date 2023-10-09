import Image from 'next/image'
import styles from '../styles/module.css/dashboard.module.css'
import returnGroup from '@/components/groups';
import Projects from '@/components/projects';
const Index = () => {
  
  const rendingPage = () =>{
    return(
      <div className={styles.topPage}>
        <div className={styles.rendingPage} >
          <article style={styles.front}>
            <div className={styles.heading}>
              <h2>
              Sylvie is a <b>web designer </b> and <b>junior full-stack developer</b>
              </h2>
            </div>
            <div className={styles.subheading}>
              Crafting Web Alchemy with Cutting-Edge Tools and AI, Infused with VR and Blockchain Exploration
            </div>
            <div className={styles.contact}> 
              Contact me !!
            </div>
          </article>
          <aside className={styles.aside}>
            <Image className={styles.me} src="/me.png"
            alt="I" width={400} height={500} priority/>
          </aside>
        </div>
        <div className={styles.quoteCont}>
          <article>
            Do what you were born to do you have to trust yourself
          </article>
          <aside>
            - Beyonce
          </aside>
        </div>
      </div>
    )
  }

  return (
    <div>
      <>
        {rendingPage()}
      </>
      <div id='#projects'>
        {returnGroup('PROJECTS', Projects, '/projects')}
      </div>
    </div>
);
};

export default Index;
