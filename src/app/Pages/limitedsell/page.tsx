import { Footer } from "@/app/Components/footer";
import { Limited } from "@/app/Components/limited";
import { Navigation } from "@/app/Components/navigation";

export default function LimitedSell()
{
    return(
        <div>
            <Navigation></Navigation>
            <Limited></Limited>
            <Footer></Footer>
        </div>
    )
}