import React from "react";
import styles from '../../styles/module.css/loadingPage.module.css';

const LoadingPage = ({ fetchPerc }) => {
    return (
        <div className={styles.thePage}>
            <div className={styles.loadingPage}>
                <div className={styles.loadingBarContainer}>
                    <div
                        className={styles.loadingBar}
                        style={{ width: `${fetchPerc}%` }}
                    ></div>
                </div>
                <div className={styles.loadingText}>Loading {fetchPerc}%</div>
            </div>
        </div>
    );
};

export default LoadingPage;
