import { useRef } from "react";
import "./Opening.css";
import { inspirationalQuotes } from "../../inspirational";
import { fortunesQuotes } from "../../fortunes";

import Button from "../button/Button";

import cookieImg from "/images/fortune_cookie_glow.png";
import cookieLeftImg from "/images/fortune_cookie_left.png";
import cookieRightImg from "/images/fortune_cookie_right.png";

type Fortune = {
    id: string;
    count: number;
    quote: string;
    author: string;
}

type OpeningProps = {
    fortunes: Fortune[];
    setFortunes: React.Dispatch<React.SetStateAction<Fortune[]>>;
    currentFortune: Fortune | null;
    setCurrentFortune: React.Dispatch<React.SetStateAction<Fortune | null>>;
    sortFortunes: () => void;
    selectedMode: string;
}

export default function Opening({ fortunes, setFortunes, sortFortunes, currentFortune, setCurrentFortune, selectedMode }: OpeningProps) {
    const fortuneCookie = useRef<HTMLImageElement>(null);
    const fortuneCookieLeft = useRef<HTMLImageElement>(null);
    const fortuneCookieRight = useRef<HTMLImageElement>(null);
    const fortuneText = useRef<HTMLDivElement>(null);

    function createFortune() {
        let selected;
        switch (selectedMode) {
            case "fortunes":
                selected = fortunesQuotes;
                break;
            case "inspirational":
                selected = inspirationalQuotes;
                break;
            default:
                selected = fortunesQuotes;
        }

        if (!selected) return;

        // eslint-disable-next-line react-hooks/purity
        const randomNum = Math.floor(Math.random() * selected.length);
        const randomQuote = selected[randomNum];

        const matchIndex = fortunes.findIndex((fortune) => {
            return fortune.quote == randomQuote.quote;
        });
        if (matchIndex !== -1) {
            const updatedFortunes = [...fortunes];
            updatedFortunes[matchIndex].count++;
            setFortunes(updatedFortunes);
            sortFortunes();
            return;
        }

        const newFortune = {
            id: crypto.randomUUID(),
            count: 1,
            quote: randomQuote.quote,
            author: randomQuote.author    
        };

        setCurrentFortune(newFortune);
        setFortunes((prev) => [...prev, newFortune]);
        sortFortunes();
        hideOpening();
    }

    function hideOpening() {
        fortuneCookie.current!.style.display = "none";
        fortuneCookieLeft.current!.classList.add("cookie_left_cracking");
        fortuneCookieRight.current!.classList.add("cookie_right_cracking");
        fortuneText.current!.classList.add("opening__text--show");
    }

    function restartOpening() {
        fortuneText.current!.classList.remove("opening__text--show");
        setTimeout(() => {
            fortuneCookie.current!.style.display = "initial";
            fortuneCookieLeft.current!.classList.remove("cookie_left_cracking");
            fortuneCookieRight.current!.classList.remove("cookie_right_cracking");
        }, 1000);
    }

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