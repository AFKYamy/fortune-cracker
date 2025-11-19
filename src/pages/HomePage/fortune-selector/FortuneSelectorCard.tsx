import { useEffect, useRef } from "react";
import "./FortuneSelector.css";

// contexts
import { useFortunesContext } from "@/contexts/FortunesContext";

type FortuneSelectorCardProps = {
    name: string;
    authors: string;
    mode: string;
}

export default function FortuneSelectorCard({ name, authors, mode }: FortuneSelectorCardProps) {
    const fortuneSelectorCard = useRef<HTMLDivElement>(null);
    const { selectedMode, setSelectedMode } = useFortunesContext();
    
    useEffect(() => {
        if (selectedMode === mode) {
            fortuneSelectorCard.current!.classList.add("fortune__selector__card--active");
        } else {
            fortuneSelectorCard.current!.classList.remove("fortune__selector__card--active");
        }
    }, [selectedMode, mode]);

    return (
        <div
            className="fortune__selector__card flex flex-col justify-center items-center px-5 py-3 rounded-[20px] bg-blackSecondary font-[Rajdhani] shadow-lg cursor-pointer transition-all ease-in-out duration-200 hover:shadow-(--gold-glow) hover:bg-darkGold hover:text-neutral-950 md:px-10 md:py-5 md:rounded-[25px] md:min-w-[230px]"
            data-mode={mode}
            onClick={() => setSelectedMode(mode)}    
            ref={fortuneSelectorCard}
        >
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm">{authors}</p>
        </div>
    )
}