import styles from '../styles/module.css/contact.module.css'
import componentStyles from '../styles/module.css/components.module.css';

const Contact = () => {
  const submitForm =()=>{

  }
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
          <div className={styles.paper}>
            <div className={styles.lines}/>
            <div className={styles.lines}/>
            <div className={styles.lines}/>
            <article>
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
            </article>
            <div className={styles.line}/>
          </div>
          <aside>

          <h4>Reach out via</h4>
          <form>
          <p> 
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </p>
          <p> 
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </p>
          <p> 
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </p>
          <p> 
            <label htmlFor="message">Message:</label>
          </p>
          <textarea id="message" name="message" required></textarea>
          <p> 
          <button type="submit" onClick={()=>submitForm()}>Send</button>
          </p>
        </form>
        </aside>
      </div>
    </div>

  );
};

export default Contact