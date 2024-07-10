import React from 'react';
import './textAnimation.css';

const CircularTextAnimation = () => {
    // Function to generate the rotated spans
    const generateRotatedSpans = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>
                {char}
            </span>
        ));
    };

    return (
        <div className="circle">
            {/* <div className="logo"></div> */}
            <div className="text">
                <p>
                    {generateRotatedSpans(" TRANSFERT D'AGENT - LA POUR VOUS - ")}
                </p>
            </div>
        </div>
    );
};

export default CircularTextAnimation;
