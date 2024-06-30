import styles from '../../styles/module.css/contact.module.css';
import componentStyles from '../../styles/module.css/components.module.css';
import { backend_url } from '../constants';
import { useState } from 'react';

const Contact = () => {
  const [details, setDetails] = useState({
    name: '', email: '', phoneNum: '', message: '' 
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const sendMessage = async () => {
    try {
      const response = await fetch(`${backend_url}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      });

      if (response.ok) {
        setMessage('Thank you for contacting me, I will get back to you in a few days!');
        setError(null);
      } else {
        setError('Error sending email');
        setMessage(null);
      }
    } catch (error) {
      setError('Error sending email');
      setMessage(null);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    let missingDetails = null;
    Object.entries(details).forEach(([key, data]) => {
      if (!data) {
        missingDetails = key;
      }
    });

    if (missingDetails) {
      setMessage(null);
      setError(`Missing ${missingDetails}`);
    } else {
      sendMessage();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

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
              email: <a href={`mailto:mutuyimanasylvie@gmail.com`}>
              mutuyimanasylvie@gmail.com</a>
            </p>
            <p>
              Whatsapp: <a href={`https://wa.me/0786405038`}>
              redirect</a>
            </p>
            <p>
              Telegram: <a href={`https://t.me/the_bold_woman`}>
              Bold Woman</a>
            </p>
            <p>
              Linkedin: <a href={'https://www.linkedin.com/in/sylvie-mutuyimana-226233184/'}>
              Sylvie Mutuyimana</a>
            </p>
          </div>
        </article>
        <aside>
          <form onSubmit={submitForm}>
            <div>
              <article>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" value={details.name} onChange={handleChange} required />
              </article>
              <aside>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" value={details.email} onChange={handleChange} required />
              </aside>
            </div>
            <div>
              <article>
                <label htmlFor="phoneNum">Phone Number:</label>
                <input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" value={details.phoneNum} onChange={handleChange} required />
              </article>
              <aside>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </aside>
            </div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter Message" value={details.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
            {
              error && (
                <span className={styles.error}>{error}</span>
              )
            }
            {
              message && (
                <span className={styles.message}>{message}</span>
              )
            }
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
