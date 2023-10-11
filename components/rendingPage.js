import Image from 'next/image'
import styles from '../styles/module.css/dashboard.module.css'
import { useState, useEffect } from 'react';

const rendingPage = () => {
  const [visible, setVisible] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const  myQuotes = [
    {
        "_id":"45445", "author":"Beyonce",
        "quote": "Do what you were born to do you have to trust yourself"
    },
    {
      "_id":"dfd", "author":"Dale Carnegie",
      "quote":"Remember, today is the tomorrow you worried about yesterday."
    },
    {
        "_id":"vdf", "author":"Stan Lee",
        "quote": "With great power comes great responsibility."
    },    {
        "_id":"gvfc", "author":"John Lennon",
        "quote": "Everything will be okay in the end. If it's not okay, it's not the end."
    }
  ]
  const myAbout = {
    "intro": "I am Sylvie Mutuyimana, a Junior Full Stack Developer and aspiring computer engineer.  I have a passion for developing business-driving software solutions and enjoy working on frontend-focused projects. With a strong foundation in Python frameworks, JavaScript, and PHP, I strive to create high-quality and responsive web applications.",
    "email":"mutuyimanasylvie@gmail.com",
    "role":"Web designer and junior full-stack developer",
    "role_expl": "Crafting Web Alchemy with Cutting-Edge Tools and AI, Infused with VR and Blockchain Exploration"
  }
  useEffect(() => {
    setVisible(true)
    const intervalId = setInterval(() => {
      setVisible(true)
      setQuoteIndex(prevIndex => prevIndex < (myQuotes?.length - 1)? (prevIndex + 1) : 0);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentQuote = myQuotes?.[quoteIndex] ? myQuotes[quoteIndex] : ''
  const quoteClasses = visible ? styles.quoteVisible : styles.quoteHidden;
    return(
      <div className={styles.topPage}>
        <div className={styles.rendingPage} >
          <article style={styles.front}>
            <div className={styles.heading}>
              <h2>
              Sylvie is a <b>web designer </b> and <b>junior full-stack developer</b>
              </h2>
            </div>
            <div className={styles.subheading}>
              {myAbout && myAbout.role_expl && myAbout.role_expl}
            </div>
            <div className={styles.contact}>
              <a href={`mailto:${myAbout && myAbout.email? myAbout.email : ''}`}>
                Contact me !!
              </a> 
            </div>
          </article>
          <aside className={styles.aside}>
            <Image className={styles.me} src="/me.png"
            alt="I" width={400} height={500} priority/>
          </aside>
        </div>
        <div className={styles.quoteCont}>
          <article className={quoteClasses}>{currentQuote.quote}</article>
          <aside className={quoteClasses}>~ {currentQuote.author}</aside>
        </div>
      </div>
    )
};

export default rendingPage;
