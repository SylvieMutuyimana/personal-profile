import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/module.css/header.module.css';
import { page_links } from './page_links';

const Header = () => {
  const { pathname } = useRouter();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.nav}>
      <article>
        <code className={styles.author}><a href="#">Sylvie</a></code>
      </article>
      <aside>
        {page_links.map((page, index) => (
          <a
            href={page.link}
            key={index}
            onClick={() => handleLinkClick(page.link)}
            className={activeLink.endsWith(page.link) ? styles.active : ''}
          >
            {page.name}
          </a>
        ))}
      </aside>
    </nav>
  );
};

export default Header;