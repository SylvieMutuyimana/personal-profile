import styles from '../styles/module.css/contact.module.css'
import componentStyles from '../styles/module.css/components.module.css';

const Contact = () => {
  return (
    <div className={styles.contact} id={styles.contact}>    
        <div className={componentStyles.group}>
          <div className={componentStyles.head}>
              <article>
                  <span>CONTACT</span>
                  <div className={componentStyles.line} />
              </article>
              <aside>
              </aside>
          </div>
          <div className={`${styles.paper} ${styles.alt}`}>
            <h4>Reach out via</h4>
            <p>
              email: <a href= {`mailto:mutuyimanasylvie@gmail.com`}>
              mutuyimanasylvie@gmail.com</a>
            </p>
            <p>
              Whatsapp: <a href= {`https://wa.me/0786405038`}>
              redirect</a>
            </p>     
            <p>
              Telegram: <a href= {`https://t.me/the_bold_woman`}>
              Bold Woman</a>
            </p>     
            <p>
              Linkedin: <a href= {'https://www.linkedin.com/in/sylvie-mutuyimana-226233184/'}>
              Sylvie Mutuyimana</a>
            </p>        
          </div>
      </div>
    </div>

  );
};

export default Contact