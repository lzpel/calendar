import DateContent from "@/ui/DateContent";
import FormatWrapper from "@/ui/FormatWrapper";

export default function Home() {
    return (
        <main>
            <FormatWrapper>
                <DateContent format={"passed"}/>
            </FormatWrapper>
        </main>
    )
}
