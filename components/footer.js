import styles from '../styles/module.css/footer.module.css'
const Footer = () => {
  return (
    <nav className={styles.nav}>
    <article>
      <span>
        Copyright © 2024, &nbsp;
      </span>
      <i className={styles.active}>
        Sylvie Mutuyimana.  &nbsp;
      </i>
      <span className={styles.active}>
        All Rights Reserved
      </span>
      </article>
    <aside>
      <code className={styles.resume}>Download Resume</code>
    </aside>

</nav>

  );
};

export default Footer