import styles from '../styles/module.css/header.module.css'
import { page_links } from './page_links';
import { useRouter } from 'next/router';
const Header = () => {
  const {pathname} = useRouter()
  return (
    <nav className={styles.nav}>
    <article>
      <code className={styles.author}>KAGABA</code>
    </article>
    <aside>
      {
        page_links.map((page, index)=>(
          <a href={page.link} className={pathname === page.link ? styles.active : ''} key={index}>
            {page.name}
          </a>
        ))
      }
    </aside>

</nav>

  );
};

export default Header