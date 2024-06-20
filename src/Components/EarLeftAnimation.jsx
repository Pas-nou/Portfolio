import React from "react";

import '../assets/CSS/EarLeftAnimation.css'

function EarLeftAnimation() {
    return (
        <section className="ear-left-cat-homepage">
            <svg className="ear-left-img" width="130" height="165" viewBox="0 0 130 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L9.75 164.125L130 112.125L0 0Z" fill="url(#paint0_linear_1_162)" />
                <defs>
                    <linearGradient id="paint0_linear_1_162" x1="65" y1="0" x2="65" y2="164.125" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D6A255" />
                        <stop offset="1" stop-color="#DDD9CF" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}

export default EarLeftAnimation;