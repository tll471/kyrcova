import { Footer } from "../../Components/footer";
import { MainCards2 } from "../../Components/DescribePages/mainCards2";
import { Micro2 } from "../../Components/DescribePages/micro2";
import { Navigation } from "../../Components/navigation";

export default function QuadPod()
{
    return(
        <div>
            <Navigation></Navigation>
            <Micro2></Micro2>
            <MainCards2></MainCards2>
            <Footer></Footer>
        </div>
    )
}