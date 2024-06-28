import React, { useEffect, useState } from "react";
import styles from '../../styles/module.css/loadingPage.module.css';

const LoadingPage = ({ fetchPerc }) => {
    const [timeoffline, setTime] = useState(60)
    const [sessionTime, setSessTime] = useState(10)
    useEffect(() => {
        if(fetchPerc === 0 && timeoffline>0 ){
            const timer = setInterval(() => {
                setTime((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    },[fetchPerc, timeoffline])

    useEffect(() => {
        const currFetc = fetchPerc
        const timer = setInterval(() => {
            setSessTime((prevSeconds) => prevSeconds - 1);
            if(sessionTime <= 0 && currFetc === fetchPerc ){
                setTime(0)
            }
        }, 1000);
        return () => clearInterval(timer);
    },[fetchPerc, sessionTime])

    return (
        <div className={styles.thePage}>
            <div className={styles.loadingPage}>
                <div className={styles.loadingBarContainer}>
                    <div
                        className={styles.loadingBar}
                        style={{ width: `${fetchPerc}%` }}
                    ></div>
                </div>
                {
                    (timeoffline === 0 && fetchPerc===0) ?(
                        <div className={styles.loadingText} style={{color:'red'}}>CHECK YOUR INTERNET DEAR!</div>
                    ):(
                        <div className={styles.loadingText}>Loading {fetchPerc}%</div>
                    )
                }
            </div>
        </div>
    );
};

export default LoadingPage;
