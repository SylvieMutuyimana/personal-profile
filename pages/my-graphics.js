import Image from "next/image";
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
                    {Object.entries(myDesigns).map(([name, data]) => (
                        <div key={name}>
                            <a href={data.link} target="_blank" rel="noopener noreferrer">{name}</a>
                            <br/>
                            <Image alt={name} src={data.img} width={200} height={200}/>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Graphics;
