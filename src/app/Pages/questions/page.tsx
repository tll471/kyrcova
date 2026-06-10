import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";
import { QuestionsText } from "@/app/Components/questions";

export default function Questions()
{
    return(
        <div>
            <Navigation></Navigation>
            <QuestionsText></QuestionsText>
            <Footer></Footer>
        </div>
    )
}