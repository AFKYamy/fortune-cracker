import { useState } from "react";

import Header from "../components/header/Header";
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
            quote: "This is a fortune text",
            author: "Someone"
        }
    ]);
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
            <Opening fortunes={fortunes} setFortunes={setFortunes} sortFortunes={sortFortunes} currentFortune={currentFortune} setCurrentFortune={setCurrentFortune} />
            <History fortunes={fortunes} />
        </>
    )
}