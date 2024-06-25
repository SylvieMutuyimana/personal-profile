//_app.js
import RootLayout from './layout';
import '../styles/css/global.css';
import styles from '../styles/module.css/layout.module.css';
import { backendLinks, backend_url } from '@/components/constants';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/pages/LoadingPage';

function App({Component, pageProps}) {
    const [allProjects, setProjects] = useState(null);
    const [mySkills, setSkills] = useState(null);
    const [myAbout, setAbout] = useState(null);
    const [myQuotes, setQuotes] = useState(null);
    const [myDesigns, setDesigns] = useState(null);
    const [fetchPerc, setFetchPerc] = useState(0);
    const [completedFetches, setCompletedFetches] = useState(0);
    
 
    const totalFetches = backendLinks.length;

    const fetchData = async (name, endpoint) => {
        const the_route = backend_url + endpoint;
        try {
            const response = await fetch(the_route);
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
                } else if (name === 'graphics') {
                    setDesigns(data);
                }
                setCompletedFetches(prev => prev + 1);
            } else {
                console.error(`Error fetching ${name}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error fetching ${name}: ${error.message}`);
        }
    };
   
     
    const checkpoint = {
        'about': myAbout, 'skills': mySkills, 'quotes': myQuotes, 'projects': allProjects,
        'graphics': myDesigns
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
                        <Component
                            {...pageProps} 
                            allProjects={allProjects}
                            myAbout={myAbout}
                            myQuotes={myQuotes}
                            mySkills={mySkills}
                            myDesigns={myDesigns}
                        />
                    )
                }
            </div>
        </RootLayout>
    );
}

export default App;
