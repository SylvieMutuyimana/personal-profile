import React, { useState, useEffect } from "react";

const Graphics = () => {
    const folderId = '108LSYBeDxSaybxMIPgI3bzpvem8kGtM'; // Google Drive folder ID
    const googleDriveLink = 'https://drive.google.com/file/d'; // Google Drive link
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                // Fetch files from Google Drive API
                const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents`);
                if (!response.ok) {
                    throw new Error('Failed to fetch files');
                }
                const data = await response.json();

                if (data.files && data.files.length > 0) {
                    // Filter out PDF files
                    const pdfFiles = data.files.filter(file => file.mimeType === 'application/pdf');
                    setFiles(pdfFiles);
                } else {
                    throw new Error('No files found');
                }
            } catch (error) {
                console.error('Error fetching files:', error);
                setError(error.message);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <h1>PDF Files:</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : !files ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {files.map((file) => (
                        <li key={file.id}>
                            <a href={`${googleDriveLink}${file.id}`} target="_blank" rel="noopener noreferrer">{file.name}</a>
                            <iframe src={`${googleDriveLink}${file.id}`}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Graphics;
