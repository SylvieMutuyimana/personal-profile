// RootLayout.js
import Header from '@/components/nav/header';
import Head from 'next/head';
import styles from '../styles/module.css/layout.module.css';
import componentStyles from '../styles/module.css/layout_components.module.css';
import Footer from '@/components/nav/footer';
import Back_drop from '@/components/bac/Back_drop';

export default function RootLayout({ children }) {
  const item_anim = (index) => {
    const speed = index * 2 + 10;
    return speed <= 10 ? speed * 5 : speed;
  };

  return (
      <div className={styles.App}>
        <div className={styles.fullPage}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
        <div className={styles.back_container}>
          <div className={componentStyles.squaresContainer}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={`${componentStyles.square} ${componentStyles[`square${index}`]}`}
                style={{ animationDuration: `${item_anim(index)}s` }}
              ></div>
            ))}
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={`${componentStyles.rect} ${componentStyles[`rect${index}`]}`}
                style={{ animationDuration: `${item_anim(index)}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
  );
}
