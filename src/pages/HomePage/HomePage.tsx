// components
import Header from "@/components/header/Header";
import FortuneSelector from "./fortune-selector/FortuneSelector";
import Opening from "./opening/Opening";
import History from "./history/History";
import Footer from "@/components/footer/Footer";

// contexts
import { FortunesProvider } from "@/contexts/FortunesContext";

export default function HomePage() {
    return (
        <>
            <FortunesProvider>
                <Header />
                <FortuneSelector />
                <Opening />
                <History />
                <Footer />
            </FortunesProvider>
        </>
    )
}