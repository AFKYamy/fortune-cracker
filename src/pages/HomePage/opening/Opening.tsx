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
        <div className="opening__wrapper min-h-[50vh] flex justify-center items-center">
            <div className="opening flex justify-center items-center w-150 h-100 mx-auto relative">
                <img 
                    className="w-full max-w-100 cursor-pointer select-none transition-all ease-in-out duration-120 hover:max-w-120 absolute z-100"
                    src={cookieImg} 
                    alt="fortune cookie"
                    draggable="false"
                    onClick={() => createFortune()}
                    ref={fortuneCookie}
                />
                <img
                    className="cookie_left w-full max-w-100 absolute select-none" 
                    src={cookieLeftImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieLeft}
                />
                <img 
                    className="cookie_right w-full max-w-100 absolute select-none"
                    src={cookieRightImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieRight}
                />
                <div
                    className="opening__text opacity-0 font-[Poppins] text-center text-lg italic transition-all ease-in-out duration-1000 z-50"
                    ref={fortuneText}
                >
                    {currentFortune && (
                        <>
                            <h2 className="mb-2">
                                "{currentFortune.quote}"
                            </h2>
                            <p className="text-darkGray mb-4">
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