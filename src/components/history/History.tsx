import HistoryCard from "./HistoryCard";

type Fortune = {
    id: string;
    count: number;
    quote: string;
    author: string;
}

type HistoryProps = {
    fortunes: Fortune[];
    setCurrentFortune: React.Dispatch<React.SetStateAction<Fortune | null>>;
}

export default function History({ fortunes, setCurrentFortune }: HistoryProps) {


    return (
        <div className="history container mx-xl mx-auto flex flex-col gap-8 pb-30">
            <h3 className="font-[Poppins] font-bold text-3xl">Fortune history:</h3>
            <div className="history__cards flex flex-wrap justify-center gap-7">
                {fortunes.map((fortune) => (
                    <HistoryCard fortune={fortune} setCurrentFortune={setCurrentFortune} key={fortune.id} />
                ))}
            </div>
        </div>
    )
}