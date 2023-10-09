import styles from '../styles/module.css/layout.module.css'
import Image from 'next/image'
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
      </Head>
        <div className={styles.App}>
          <Header/>
          {children}
          <Footer/>
        </div>
    </>
  )
}
