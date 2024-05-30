import Image from "next/image";
import React, { useState, useEffect } from "react";
import componentStyles from '../styles/module.css/components.module.css';
import ReturnGroup from "@/components/groups";

const Graphics = ({myDesigns}) => {
    const all_graphics  = "https://drive.google.com/drive/folders/17AbvfZTlXfvkBv700_E6C43KsBb2Cbcq"
    const GraphicsCont = ()=>{
        return(
            <div className={componentStyles.grid}>
                {
                    !myDesigns ? (
                        <p>Loading...</p>
                ) : (
                    <>
                        {Object.entries(myDesigns).map(([name, data]) => (
                            <div key={name} className={componentStyles.card}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">{name}</a>
                                <br/><br/>
                                <Image alt={name} src={data.img} width={200} height={200} className={componentStyles.projectImage}/>
                            </div>
                        ))}
                    </>
                )}
            </div>
        )
    }
    return (
        <div id='graphics'>
            <ReturnGroup name={'GRAPHIC DESIGNS'} DynamicComponent={GraphicsCont} theData={myDesigns} all_link={all_graphics}/>
        </div>
    );
};

export default Graphics;
