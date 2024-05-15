import styles from '../styles/module.css/footer.module.css'
import { page_links } from './page_links';
import { useRouter } from 'next/router';
const Footer = () => {
  const {pathname} = useRouter()
  return (
    <nav className={styles.nav}>
    <article>
        <span>
          Copyright © 2024, 
        </span>
        <i className={styles.active}>
        Sylvie Mutuyimana. 
       </i>
       <span className={styles.active}>
      All Rights Reserved
      </span>
      </article>
    <aside>

      <code className={styles.resume}>My Resume</code>

    </aside>

</nav>

  );
};

export default Footer