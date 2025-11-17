// components
import HistoryCard from "./HistoryCard";

import type { Fortune } from "../../types/Fortune";

type HistoryProps = {
    fortunes: Fortune[];
    setCurrentFortune: React.Dispatch<React.SetStateAction<Fortune | null>>;
    hideOpening: () => void;
}

export default function History({ fortunes, setCurrentFortune, hideOpening }: HistoryProps) {


    return (
        <div className="history container mx-xl mx-auto flex flex-col gap-8 pb-30">
            <h3 className="font-[Poppins] font-bold text-3xl">Fortune history:</h3>
            <div className="history__cards flex flex-wrap justify-center gap-7">
                {fortunes.map((fortune) => (
                    <HistoryCard 
                        key={fortune.id} 
                        fortune={fortune} 
                        setCurrentFortune={setCurrentFortune}  
                        hideOpening={hideOpening} 
                    />
                ))}
            </div>
        </div>
    )
}