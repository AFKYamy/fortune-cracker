import { useState, useRef } from "react";

// components
import Header from "../../components/header/Header";
import FortuneSelector from "./fortune-selector/FortuneSelector";
import Opening from "./opening/Opening";
import History from "./history/History";
import Footer from "../../components/footer/Footer";

// quotes arrays
import { inspirationalQuotes } from "../../data/inspirational";
import { fortunesQuotes } from "../../data/fortunes";

import type { Fortune } from "../../types/Fortune";

export default function HomePage() {
    const [fortunes, setFortunes] = useState<Fortune[]>([]);
    const [selectedMode, setSelectedMode] = useState<string>("fortunes");
    const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
    const [openedFortunes, setOpenedFortunes] = useState<number>(0);

    const fortuneCookie = useRef<HTMLImageElement>(null);
    const fortuneCookieLeft = useRef<HTMLImageElement>(null);
    const fortuneCookieRight = useRef<HTMLImageElement>(null);
    const fortuneText = useRef<HTMLDivElement>(null);
    const fortuneCookieRefs = { fortuneCookie, fortuneCookieLeft, fortuneCookieRight, fortuneText };

    function createFortune() {
        // random quote based on user's selected mode
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

        // finding a match and increasing its count in history
        const matchIndex = fortunes.findIndex((fortune) => {
            return fortune.quote == randomQuote.quote;
        });
        if (matchIndex !== -1) {
            const updatedFortunes = [...fortunes];
            updatedFortunes[matchIndex].count++;
            setFortunes(updatedFortunes);
            setCurrentFortune(updatedFortunes[matchIndex]);
            sortFortunes();
            hideOpening();
            setOpenedFortunes(prev => prev += 1);
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
        setOpenedFortunes(prev => prev += 1);
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

    function sortFortunes() {
        setFortunes((prev) => prev.sort((a, b) => b.count-a.count));
    }
    
    return (
        <>
            <Header />
            <FortuneSelector setSelectedMode={setSelectedMode} selectedMode={selectedMode} />
            <Opening 
                restartOpening={restartOpening} 
                createFortune={createFortune} 
                currentFortune={currentFortune} 
                fortuneCookieRefs={fortuneCookieRefs}
            />
            <History 
                fortunes={fortunes} 
                openedFortunes={openedFortunes} 
                setCurrentFortune={setCurrentFortune} 
                hideOpening={hideOpening} 
            />
            <Footer />
        </>
    )
}