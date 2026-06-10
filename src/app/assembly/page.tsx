import { AssemblyCards } from "../Components/assemblyCards";
import { AssemblyRobot } from "../Components/assemblyRobot";
import { Download } from "../Components/downdload";
import { Footer } from "../Components/footer";
import { Navigation } from "../Components/navigation";

export default function Assembly()
{
    return(
        <div>
            <Navigation></Navigation>
            <AssemblyRobot></AssemblyRobot>
            <AssemblyCards></AssemblyCards>
            <Download></Download>
            <Footer></Footer>
        </div>
    )
}