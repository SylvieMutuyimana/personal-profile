import styles from '../../styles/module.css/footer.module.css'
const Footer = () => {
  return (
    <nav className={styles.nav}>
    <article>
      <span>
        Copyright © 2024, &nbsp;
      </span>
      <i>
        Sylvie Mutuyimana. 
      </i>
      <span>
        &nbsp; All Rights Reserved
      </span>
      </article>
    <aside>
      <code className={styles.resume}><a href='https://drive.google.com/file/d/1Edp1S-L8DsrXyUZ1VqkWwPgXgdmJmiO9/view?usp=sharing'>Download Resume</a></code>
    </aside>

</nav>

  );
};

export default Footer