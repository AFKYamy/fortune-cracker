import "./Opening.css";

// components
import Button from "../../../components/button/Button";

// assets
import cookieImg from "/images/fortune_cookie_glow.png";
import cookieLeftImg from "/images/fortune_cookie_left.png";
import cookieRightImg from "/images/fortune_cookie_right.png";

import type React from "react";
import type { Fortune } from "../../../types/Fortune";

type OpeningProps = {
    restartOpening: () => void;
    createFortune: () => void;
    currentFortune: Fortune | null;
    fortuneCookieRefs: {
        fortuneCookie: React.RefObject<HTMLImageElement | null>;
        fortuneCookieLeft: React.RefObject<HTMLImageElement | null>;
        fortuneCookieRight: React.RefObject<HTMLImageElement | null>;
        fortuneText: React.RefObject<HTMLDivElement | null>;
    }
}

export default function Opening({ restartOpening, createFortune, currentFortune, fortuneCookieRefs }: OpeningProps) {
    const { fortuneCookie, fortuneCookieLeft, fortuneCookieRight, fortuneText } = fortuneCookieRefs;

    return (
        <div className="opening__wrapper container mx-auto min-h-[50vh] flex justify-center items-center md:mx-lg">
            <div className="opening flex justify-center items-center mx-auto w-[80%] h-auto relative md:w-150 md:h-100">
                <img 
                    className="w-full max-w-80 cursor-pointer select-none transition-all ease-in-out duration-120 absolute z-100 hover:max-w-90 lg:max-w-100 lg:hover:max-w-110"
                    src={cookieImg} 
                    alt="fortune cookie"
                    draggable="false"
                    onClick={() => createFortune()}
                    ref={fortuneCookie}
                />
                <img
                    className="cookie_left w-full max-w-80 absolute select-none lg:max-w-100" 
                    src={cookieLeftImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieLeft}
                />
                <img 
                    className="cookie_right w-full max-w-80 absolute select-none lg:max-w-100"
                    src={cookieRightImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieRight}
                />
                <div
                    className="opening__text opacity-0 font-[Poppins] text-center text-md italic transition-all ease-in-out duration-1000 z-50 md:text-lg"
                    ref={fortuneText}
                >
                    {currentFortune && (
                        <>
                            <h2 className="mb-2">
                                "{currentFortune.quote}"
                            </h2>
                            <p className="text-darkGray mb-7">
                                {currentFortune.author !== "none" && currentFortune.author}
                            </p>
                            <Button text="Restart" action={restartOpening} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}