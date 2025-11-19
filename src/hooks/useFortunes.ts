import { useState } from "react";

// logic
import {
  getRandomQuote,
  sortFortunes,
  findMatchingFortuneIndex,
  createNewFortune
} from "@/lib/fortune";

import type { Fortune } from "@/types/Fortune";

export default function useFortunes() {
    const [fortunes, setFortunes] = useState<Fortune[]>([]);
    const [selectedMode, setSelectedMode] = useState<string>("fortunes");
    const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
    const [openedFortunes, setOpenedFortunes] = useState<number>(0);
    const [isCracked, setIsCracked] = useState(false);

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
            setCurrentFortune(updatedFortunes[matchIndex]);
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

    return { 
        fortunes,
        selectedMode,
        setSelectedMode,
        currentFortune,
        setCurrentFortune,
        openedFortunes,
        isCracked,
        setIsCracked,
        createFortune,
        triggerOpeningAnimation
     }
}