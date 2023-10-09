import RootLayout from './layout';
import '../styles/css/global.css';
import styles from '../styles/module.css/layout.module.css'

function App({ Component, pageProps }) {
    return (
    <RootLayout>
        <div className={styles.page}>
            <Component
            {...pageProps}    
            />    
        </div>
    </RootLayout>
    )
}
export default App;
