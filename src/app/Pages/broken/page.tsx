import { BrokenPage } from "@/app/Components/brokenpage";
import { Footer } from "@/app/Components/footer";
import { Navigation } from "@/app/Components/navigation";

export default function Broken()
{
    return(
        <div>
            <Navigation></Navigation>
            <BrokenPage></BrokenPage>
            <Footer></Footer>
        </div>
    )
}