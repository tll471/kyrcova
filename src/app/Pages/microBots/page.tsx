import { Footer } from "../../Components/footer";
import { MainCards1 } from "../../Components/DescribePages/mainCards1";
import { Micro1 } from "../../Components/DescribePages/micro1";
import { Navigation } from "../../Components/navigation";

export default function MicroBots()
{
    return(
        <div>
            <Navigation></Navigation>
            <Micro1></Micro1>
            <MainCards1></MainCards1>
            <Footer></Footer>
        </div>
    )
}