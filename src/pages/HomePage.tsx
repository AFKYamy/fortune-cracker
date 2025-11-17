import { useState, useRef } from "react";

// components
import Header from "../components/header/Header";
import FortuneSelector from "../components/fortune-selector/FortuneSelector";
import Opening from "../components/opening/Opening";
import History from "../components/history/History";

// quotes arrays
import { inspirationalQuotes } from "../inspirational";
import { fortunesQuotes } from "../fortunes";

import type { Fortune } from "../types/Fortune";

export default function HomePage() {
    const [fortunes, setFortunes] = useState<Fortune[]>([
        {
            id: crypto.randomUUID(),
            count: 1,
            quote: "I’ll leave tomorrow’s problems to tomorrow’s me.",
            author: "Saitama"
        }
    ]);
    const [selectedMode, setSelectedMode] = useState<string>("fortunes");
    const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);

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
            sortFortunes();
            hideOpening();
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

    function sortFortunes() {
        setFortunes((prev) => {
            return prev.sort((a, b) => {
                return b.count-a.count;
            });
        })
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
            <History fortunes={fortunes} setCurrentFortune={setCurrentFortune} hideOpening={hideOpening} />
        </>
    )
}