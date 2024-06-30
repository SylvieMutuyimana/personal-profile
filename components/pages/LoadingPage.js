import React, { useEffect, useState } from "react";
import styles from '../../styles/module.css/loadingPage.module.css';

const LoadingPage = ({ fetchPerc }) => {
    const [timeoffline, setSessTime] = useState(0)
    const [currFetc, setCurrentFetch ] = useState(fetchPerc)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        let countdown = 5
        const timer = setInterval(() => {
            countdown = countdown - 1
            if(countdown <=0){
                setCurrentFetch(fetchPerc)
            }
        }, 1000);
        return () => clearInterval(timer);
    },[fetchPerc])

    useEffect(() => {
        setSessTime(0)
        const timer = setInterval(() => {
            setSessTime((prevSeconds) => prevSeconds + 1);
            if(timeoffline >= 6 && currFetc === fetchPerc){
                if(loading){
                    setLoading(false)
                }
            }else if(!loading){
                setLoading(true)
            }
        }, 1000);
        return () => clearInterval(timer);
    },[currFetc, timeoffline])

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
                    loading?(
                        <div className={styles.loadingText}>Loading {fetchPerc}%</div>
                    ):(
                        <div className={styles.loadingText} style={{color:'red'}}>CHECK YOUR INTERNET DEAR!</div>
                    )
                }
            </div>
        </div>
    );
};

export default LoadingPage;
