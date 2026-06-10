import { Answer } from "@/app/Components/answer";
import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";
import { QuestionsText } from "@/app/Components/questions";

export default function Questions()
{
    return(
        <div>
            <Navigation></Navigation>
            <QuestionsText></QuestionsText>
            <Answer></Answer>
            <Footer></Footer>
        </div>
    )
}