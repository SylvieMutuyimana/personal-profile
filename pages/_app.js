import RootLayout from './layout';
import '../styles/css/global.css';
import styles from '../styles/module.css/layout.module.css';
import { backendLinks, backend_url } from '@/components/constants';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }) {
    const [fetchError, setFetchError] = useState(false);
    const [myProjects, setProjects] = useState(null);
    const [mySkills, setSkills] = useState(null);
    const [myAbout, setAbout] = useState(null);
    const [myQuotes, setQuotes] = useState(null);

    const testBackend = async () => {
        try {
            const response = await fetch(`${backend_url}`);
            console.log(`Successfully connected to ${backend_url} endpoint`);
            setFetchError(false);
        } catch (error) {
            console.log("Error connecting to dataset: ", error);
            setFetchError(true);
        }
    };

    const fetchData = async (name, endpoint) => {
        try {
            const response = await fetch(`${backend_url}/${endpoint}`);
            if (response.ok) {
                const data = await response.json();
                if (name === 'about') {
                    setAbout(data);
                } else if (name === 'projects') {
                    setProjects(data);
                } else if (name === 'skills') {
                    setSkills(data);
                } else if (name === 'quotes') {
                    setQuotes(data);
                }
                setFetchError(false);
            } else {
                console.log(`Error fetching data from ${endpoint}: ${response.status}`);
            }
        } catch (error) {
            console.log(`Error connecting to dataset: ${error}`);
            setFetchError(true);
        }
    };

    const checkpoint = {
        'about': myAbout, 'skills': mySkills, 'quotes': myQuotes, 'projects': myProjects
    };

    useEffect(() => {
        testBackend();
    }, []);

    useEffect(() => {
        if (!fetchError) {
            backendLinks.forEach((theLink) => {
                if (!checkpoint[theLink.name]) {
                    console.log('Fetching for', theLink.name);
                    fetchData(theLink.name, theLink.link);
                }
            });
        }
    }, [fetchError]);

    return (
        <RootLayout>
            <div className={styles.page}>
                <Component
                    {...pageProps}
                    fetchError={fetchError}
                    myProjects={myProjects}
                    myAbout={myAbout}
                    myQuotes={myQuotes}
                    mySkills={mySkills}
                />
            </div>
        </RootLayout>
    );
}

export default App;
