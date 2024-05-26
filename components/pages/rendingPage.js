import Image from 'next/image'
import styles from '../../styles/module.css/dashboard.module.css'
import { useState, useEffect } from 'react';

const RendingPage = ({myAbout, myQuotes}) => {
  const [visible, setVisible] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
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
                Sylvie is a 
                <b> Full Stack Developer</b>,
                <b> UI/UX </b>
                and
                <b> Web Designer </b>
              </h2>
            </div>
            <div className={styles.subheading}>
              {myAbout && myAbout.role_expl && myAbout.role_expl}
            </div>
            <div className={styles.contact}>
              <a href="#contact">
                Contact me !!
              </a> 
            </div>
          </article>
          <aside className={styles.aside}>
            <Image className={styles.me} src="/me.png"
              alt="I" width={400} height={600} priority/>
          </aside>
        </div>
        <div className={styles.quoteCont}>
          <article className={quoteClasses}>{currentQuote.quote}</article>
          <aside className={quoteClasses}>~ {currentQuote.author}</aside>
        </div>
      </div>
    )
};

export default RendingPage;