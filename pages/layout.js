import styles from '../styles/module.css/layout.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Head from 'next/head'
export default function RootLayout({ children }) {
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
            {children}
            <Footer/>
          </div>
        </div>
    </>
  )
}
