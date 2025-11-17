import { useState } from "react";

import Header from "../components/header/Header";
import FortuneSelector from "../components/fortune-selector/FortuneSelector";
import Opening from "../components/opening/Opening";
import History from "../components/history/History";

type Fortune = {
    id: string;
    count: number;
    quote: string;
    author: string;
}

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
            <Opening fortunes={fortunes} setFortunes={setFortunes} sortFortunes={sortFortunes} currentFortune={currentFortune} setCurrentFortune={setCurrentFortune} selectedMode={selectedMode} />
            <History fortunes={fortunes} setCurrentFortune={setCurrentFortune} />
        </>
    )
}