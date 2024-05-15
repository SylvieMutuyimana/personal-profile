// RootLayout.js
import Header from '@/components/header';
import Contact from '@/components/contact';
import Head from 'next/head';
import styles from '../styles/module.css/layout.module.css';
import componentStyles from '../styles/module.css/layout_components.module.css';
import Footer from '@/components/footer';
import { BackgroundWave } from '@/components/bac/BackgroundWave';

export default function RootLayout({ children }) {
  const item_anim = (index)=> {
    const speed = index * 2 + 10
   
    return speed <= 10? speed * 5: speed
  }
  return (
    <>
      <Head>
        <title>Kagaba Junior</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Your Name" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <div className={styles.App}>
        <div className={styles.fullPage}>
          <div className={styles.header}>
            <Header/>
          </div>
          <div className={styles.content}>
            {children}
            <Contact/>
          </div>
          <div className={styles.footer}>
            <Footer/>
          </div>
        </div>
        <div className={componentStyles.squaresContainer}>
          {
            Array.from({length:9}).map((_, index)=>(
              <div key={index} className={`${componentStyles.square} ${componentStyles[`square${index}`]}`} style={{animationDuration: `${item_anim(index)}s`}}></div>
            ))
          }
          {
            Array.from({length:9}).map((_, index)=>(
              <div key={index} className={`${componentStyles.rect} ${componentStyles[`rect${index}`]}`} style={{animationDuration: `${item_anim(index)}s`}}></div>
            ))
          }
        </div>
        <div className={componentStyles.backgroundWave}>
          <BackgroundWave />
        </div>
      </div>
    </>
  );
}
