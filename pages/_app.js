import RootLayout from './layout';
import '../styles/css/global.css';
import styles from '../styles/module.css/layout.module.css';
import { backendLinks, backend_url } from '@/components/constants';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/pages/LoadingPage';
import Index from '.';

function App() {
    const [allProjects, setProjects] = useState(null);
    const [mySkills, setSkills] = useState(null);
    const [myAbout, setAbout] = useState(null);
    const [myQuotes, setQuotes] = useState(null);
    const [fetchPerc, setFetchPerc] = useState(0);
    const [completedFetches, setCompletedFetches] = useState(0);

    const totalFetches = backendLinks.length;

    const fetchData = async (name, endpoint) => {
        const the_route = backend_url + endpoint;
        try {
            const response = await fetch(the_route);
            console.log('Successfully fetched for ', name, 'on: ', the_route);
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
                setCompletedFetches(prev=> prev + 1)
            } else {
                console.log(`Error fetching data from ${endpoint}: ${response.status}`);
            }
        } catch (error) {
            console.log(`Error connecting to dataset: ${error}`);
        } 
    };
     
    const checkpoint = {
        'about': myAbout, 'skills': mySkills, 'quotes': myQuotes, 'projects': allProjects
    };
    
    useEffect(() => {
        backendLinks.forEach((theLink) => {
            if (!checkpoint[theLink.name]) {
                fetchData(theLink.name, theLink.link);
            }
        });
    }, []); 
    useEffect(()=>{
        setFetchPerc((completedFetches / totalFetches) * 100)
    },[completedFetches])
    return (
        <RootLayout>
            <div className={styles.page}>
                {
                    fetchPerc !== 100 ? ( 
                        <LoadingPage fetchPerc={fetchPerc} />
                    ) : (
                        <Index 
                            allProjects={allProjects}
                            myAbout={myAbout}
                            myQuotes={myQuotes}
                            mySkills={mySkills}
                        />
                    )
                }
            </div>
        </RootLayout>
    );
}

export default App;
