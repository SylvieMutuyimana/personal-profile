import React, { useState, useEffect } from "react";

const Graphics = ({myDesigns}) => {

    return (
        <div>
            <h1>PDF Files:</h1>
            {
                !myDesigns ? (
                    <p>Loading...</p>
            ) : (
                <>
                    {Object.keys(myDesigns).map((name, index) => (
                        <div key={index}>
                            <a href={myDesigns[name]} target="_blank" rel="noopener noreferrer">{name}</a>
                            <br/>
                            <iframe src={myDesigns[name]}/>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Graphics;
