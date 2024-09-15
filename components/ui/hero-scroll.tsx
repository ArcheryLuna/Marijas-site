"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/pro-regular-svg-icons";

const HeroScroller = () => {
    const [isVisable, setIsVisable] = useState(true);

    const scrollTo = (scrollY: number) => {
        window.scrollTo({
            top: scrollY,
            behavior: "smooth",
        });
    }

    const toggleVisability = () => {
        if ( window.pageYOffset > 50 ) {
            setIsVisable(false);
        } else {
            setIsVisable(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisability);
        return () => {
            window.removeEventListener("scroll", toggleVisability);
        };
    }, []);

    return (
        <div className="scroll-indicator text-sm xl:text-base text-primary">
            <button
                className={`${
                    isVisable ? "opacity-100" : "opacity-0"
                } transition-all duration-300 ease-in-out`}
                onClick={() => scrollTo(750)}
            >
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
        </div>
    );
};

export { HeroScroller };
