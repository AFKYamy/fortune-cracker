import type React from "react";
import FortuneSelectorCard from "./FortuneSelectorCard"

type FortuneSelectorProps = {
    setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
    selectedMode: string;
}

export default function FortuneSelector({ setSelectedMode, selectedMode }: FortuneSelectorProps) {
    return (
        <div className="fortune__selector container mx-xl mx-auto flex gap-7">
            <FortuneSelectorCard name="Fortunes" authors="No authors" mode="fortunes" setSelectedMode={setSelectedMode} selectedMode={selectedMode} />
            <FortuneSelectorCard name="Inspirational quotes" authors="Authors" mode="inspirational" setSelectedMode={setSelectedMode} selectedMode={selectedMode} />
        </div>
    )
}