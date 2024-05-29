import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/module.css/header.module.css';
import { page_links } from '../page_links';

const Header = () => {
  const { pathname } = useRouter();
  const [activeLink, setActiveLink] = useState(page_links.find(link=>link.name === 'HOME').link);
  const [displayMenu, setDisplayMenu] = useState(false); // Use false for initial state

  useEffect(() => {
    if(pathname!=='/'){
      setActiveLink(pathname);
    }
  }, [pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const changeDisplay = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <nav className={styles.nav}>
      <article>
        <code className={styles.author}><a href="#">Sylvie</a></code>
      </article>
      <aside>
        <div className={styles.normal_menu}>
          {page_links.map((page, index) => (
            <a
              href={page.link} key={index}
              onClick={() => handleLinkClick(page.link)}
              className={activeLink.endsWith(page.link) ? styles.active : ''}
            >
              {page.name}
            </a>
          ))}
        </div>
        <div className={styles.menu} onClick={changeDisplay}>
          <div className={styles.icon}/>
          <div className={styles.icon}/>
          <div className={styles.icon}/>
        </div>
        {
          displayMenu && (
            <ul className={styles.dropdown_menu}> 
              {page_links.map((page, index) => (
                <li>
                <a 
                href={page.link}
                key={index} 
                onClick={() => {
                  handleLinkClick(page.link);
                  changeDisplay();
                }}
                className={activeLink.endsWith(page.link) ? styles.active : ''}
              >
                {page.name}
              </a>
                </li>

              ))}
            </ul>
          )
        }
      </aside>
    </nav>
  );
};

export default Header;