import FortuneSelectorCard from "./FortuneSelectorCard"

type FortuneSelectorProps = {
    selectMode: (mode: string) => void;
    selectedMode: string;
}

export default function FortuneSelector({ selectMode, selectedMode }: FortuneSelectorProps) {
    return (
        <div className="fortune__selector container mx-xl mx-auto flex gap-7">
            <FortuneSelectorCard name="Fortunes" authors="No authors" mode="fortunes" selectMode={selectMode} selectedMode={selectedMode} />
            <FortuneSelectorCard name="Inspirational quotes" authors="Authors" mode="inspirational" selectMode={selectMode} selectedMode={selectedMode} />
        </div>
    )
}