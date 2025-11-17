import "./History.css";

import type { Fortune } from "../../types/Fortune";

type HistoryCardProps = {
    fortune: Fortune,
    setCurrentFortune: React.Dispatch<React.SetStateAction<Fortune | null>>;
    hideOpening: () => void;
}

export default function HistoryCard({ fortune, setCurrentFortune, hideOpening }: HistoryCardProps) {
    return (
        <div 
            className="history__card relative flex justify-center items-center bg-blackSecondary w-40 max-w-40 h-17 max-h-17 rounded-[20px] shadow-lg cursor-pointer hover:bg-darkGold transition-all duration-200 ease-in-out"
            onClick={() => { setCurrentFortune(fortune); hideOpening() }}
        >
            <div className="history__card__count absolute -top-3 bg-darkGray px-3 py-[3px] rounded-xl text-base text-darkGold font-[Rajdhani] font-medium hover:text-inherit">
                <p>
                    <span className="text-sm">x</span>
                    {fortune.count}
                </p>
            </div>
            <div className="history__card__text font-[Rajdhani] font-medium text-lg text-lightGray">
                <p>
                    {fortune.quote.length > 14 ? fortune.quote.substring(0, 14) + "..." : fortune.quote}
                </p>
            </div>
        </div>
    )
}