import { useEffect, useRef } from "react";
import "./FortuneSelector.css";

type FortuneSelectorCardProps = {
    name: string;
    authors: string;
    mode: string;
    selectMode: (mode: string) => void;
    selectedMode: string;
}

export default function FortuneSelectorCard({ name, authors, mode, selectMode, selectedMode }: FortuneSelectorCardProps) {
    const fortuneSelectorCard = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (selectedMode === mode) {
            fortuneSelectorCard.current!.classList.add("fortune__selector__card--active");
        } else {
            fortuneSelectorCard.current!.classList.remove("fortune__selector__card--active");
        }
    }, [selectedMode, mode]);

    return (
        <div
            className="fortune__selector__card flex flex-col justify-center items-center px-10 py-5 rounded-[25px] min-w-[230px] bg-blackSecondary font-[Rajdhani] shadow-lg cursor-pointer hover:shadow-(--gold-glow) hover:bg-darkGold hover:text-neutral-950 transition-all ease-in-out duration-200"
            data-mode={mode}
            onClick={() => selectMode(mode)}    
            ref={fortuneSelectorCard}
        >
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm">{authors}</p>
        </div>
    )
}