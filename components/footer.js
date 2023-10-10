import Image from 'next/image'
import styles from '../styles/module.css/footer.module.css'
import componentStyles from '../styles/module.css/components.module.css';

const Footer = () => {
  return (
    <div className={styles.footer} id={styles.contact}>    
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
              Linkedin: <a href= {`mailto:mutuyimanasylvie@gmail.com`}>
              Sylvie Mutuyimana</a>
            </p>        
          </div>
      </div>
    </div>

  );
};

export default Footer