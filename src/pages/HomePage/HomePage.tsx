import { useState, useRef, useMemo } from "react";

// components
import Header from "@/components/header/Header";
import FortuneSelector from "./fortune-selector/FortuneSelector";
import Opening from "./opening/Opening";
import History from "./history/History";
import Footer from "@/components/footer/Footer";

// logic
import {
  getRandomQuote,
  sortFortunes,
  findMatchingFortuneIndex,
  createNewFortune
} from "@/lib/fortune";

import type { Fortune } from "@/types/Fortune";

export default function HomePage() {
    const [fortunes, setFortunes] = useState<Fortune[]>([]);
    const [selectedMode, setSelectedMode] = useState<string>("fortunes");
    const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
    const [openedFortunes, setOpenedFortunes] = useState<number>(0);
    const [isCracked, setIsCracked] = useState(false);

    // refs for animations
    const fortuneCookie = useRef<HTMLImageElement>(null);
    const fortuneCookieLeft = useRef<HTMLImageElement>(null);
    const fortuneCookieRight = useRef<HTMLImageElement>(null);
    const fortuneText = useRef<HTMLDivElement>(null);
    const fortuneCookieRefs = useMemo(() => ({ fortuneCookie, fortuneCookieLeft, fortuneCookieRight, fortuneText }), []);

    function createFortune() {
        const randomQuote = getRandomQuote(selectedMode);
        if (!randomQuote) return;

        // finding match and increasing count
        const matchIndex = findMatchingFortuneIndex(fortunes, randomQuote.quote);
        if (matchIndex !== -1) {
            const updatedFortunes = [...fortunes];
            updatedFortunes[matchIndex].count++;

            const sortedFortunes = sortFortunes(updatedFortunes);
            setFortunes(sortedFortunes);
            setCurrentFortune(sortedFortunes[matchIndex]);
            triggerOpeningAnimation();
            return;
        }

        // no match create new fortune
        const newFortune = createNewFortune(randomQuote);
        const updatedFortunes = [...fortunes, newFortune];

        const sortedFortunes = sortFortunes(updatedFortunes);

        setFortunes(sortedFortunes);
        setCurrentFortune(newFortune);

        triggerOpeningAnimation();
    }

    function triggerOpeningAnimation() {
        setIsCracked(true);
        setOpenedFortunes(prev => prev + 1);
    }

    function restartOpening() {
        fortuneText.current!.classList.remove("opening__text--show");
        setTimeout(() => {
            setIsCracked(false)
        }, 1000);
    }
    
    return (
        <>
            <Header />
            <FortuneSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
            <Opening  
                currentFortune={currentFortune} 
                fortuneCookieRefs={fortuneCookieRefs}
                isCracked={isCracked}
                restartOpening={restartOpening} 
                createFortune={createFortune}
            />
            <History 
                fortunes={fortunes} 
                openedFortunes={openedFortunes} 
                setCurrentFortune={setCurrentFortune} 
                setIsCracked={setIsCracked} 
            />
            <Footer />
        </>
    )
}