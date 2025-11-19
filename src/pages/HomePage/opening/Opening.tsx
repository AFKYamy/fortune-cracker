import "./Opening.css";

// components
import Button from "@/components/ui/button/Button";

// hooks
import useFortunesRefs from "@/hooks/useFortunesRefs";

// contexts
import { useFortunesContext } from "@/contexts/FortunesContext";

// assets
import cookieImg from "/images/fortune_cookie_glow.png";
import cookieLeftImg from "/images/fortune_cookie_left.png";
import cookieRightImg from "/images/fortune_cookie_right.png";

export default function Opening() {
    const { fortuneCookie, fortuneCookieLeft, fortuneCookieRight, fortuneText } = useFortunesRefs();
    const { createFortune, currentFortune, isCracked, setIsCracked } = useFortunesContext();

    function restartOpening() {
        fortuneText.current?.classList.remove("opening__text--show");
        setTimeout(() => setIsCracked(false), 1000);
    }

    return (
        <div className="opening__wrapper container mx-auto flex justify-center items-center min-h-[60vh] md:mx-lg">
            <div className="opening flex justify-center items-center mx-auto w-[80%] h-auto relative md:w-150 md:h-100">
                <img 
                    className={`
                        w-full max-w-80 cursor-pointer select-none transition-all ease-in-out duration-120 absolute z-10 hover:max-w-90 lg:max-w-100 lg:hover:max-w-110
                        ${isCracked ? "hidden" : ""}    
                    `}
                    src={cookieImg} 
                    alt="fortune cookie"
                    draggable="false"
                    onClick={() => createFortune()}
                    ref={fortuneCookie}
                />
                <img
                    className={`
                        cookie_left w-full max-w-80 absolute select-none lg:max-w-100
                        ${isCracked ? "cookie_left--cracking" : ""}    
                    `}
                    src={cookieLeftImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieLeft}
                />
                <img 
                    className={`
                        cookie_right w-full max-w-80 absolute select-none lg:max-w-100
                        ${isCracked ? "cookie_right--cracking" : ""}    
                    `}
                    src={cookieRightImg} 
                    alt="" 
                    draggable="false"
                    ref={fortuneCookieRight}
                />
                <div
                    className={`
                        opening__text opacity-0 font-[Poppins] text-center text-md italic transition-all ease-in-out duration-1000 z-5 md:text-lg
                        ${isCracked ? "opening__text--show" : ""}    
                    `}
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
                            <Button text="Restart" action={() => restartOpening()} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}