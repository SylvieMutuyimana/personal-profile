import styles from '../../styles/module.css/contact.module.css'
import componentStyles from '../../styles/module.css/components.module.css';

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
          <article>
            <div className={styles.paper}>
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
              <p>. </p> 
              <p>. </p> 
              <p>. </p> 
            </div>
          </article>
          <aside>
            <form>
              <div>
                <article>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" textholder='Enter Name' required />
                </article>
                <aside>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" textholder='Enter Email' required />
                </aside>
              </div>
              <div>
                <article>
                  <label htmlFor="email">Phone Number:</label>
                  <input type="text" id="phone_n" name="phone_n" textholder='Phone Number' required />
                </article>
                <aside>
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" textholder='Subject' required />
                </aside>
              </div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" textholder='Enter Message' required></textarea>
              <button type="submit" onClick={()=>submitForm()}>Send Message</button>
            </form>
          </aside>
      </div>
    </div>

  );
};

export default Contact