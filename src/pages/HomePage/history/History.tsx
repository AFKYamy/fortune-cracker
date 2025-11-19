// components
import HistoryCard from "./HistoryCard";

// contexts
import { useFortunesContext } from "@/contexts/FortunesContext";

export default function History() {
    const { fortunes, openedFortunes } = useFortunesContext();

    return (
        <div className="history container mx-xl mx-auto flex flex-col gap-8 pb-30 max-sm:max-w-[80vw]">
            <p className="font-[rajdhani] text-lg">
                <strong>Cracked:</strong>
                <span className="text-base"> x</span>
                {openedFortunes} Cookies
            </p>
            <h3 className="font-[Poppins] font-bold text-xl md:text-3xl">Fortune history:</h3>
            <div className="history__cards flex flex-wrap justify-center gap-5 md:gap-7">
                {fortunes.map((fortune) => (
                    <HistoryCard 
                        key={fortune.id} 
                        fortune={fortune}
                    />
                ))}
            </div>
        </div>
    )
}