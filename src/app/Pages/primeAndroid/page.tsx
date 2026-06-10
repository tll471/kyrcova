import { Footer } from "../../Components/footer";
import { MainCards3 } from "../../Components/DescribePages/mainCards3";
import { Micro3 } from "../../Components/DescribePages/micro3";
import { Navigation } from "../../Components/navigation";

export default function PrimeAndroid()
{
    return(
        <div>
            <Navigation></Navigation>
            <Micro3></Micro3>
            <MainCards3></MainCards3>
            <Footer></Footer>
        </div>
    )
}