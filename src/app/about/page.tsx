import { AboutText } from "../Components/aboutText";
import { Footer } from "../Components/footer";
import { Navigation } from "../Components/navigation";
import { OurRobots } from "../Components/ourRobots";
import { RobotsInfo } from "../Components/robotsInfo";
import { WeDo } from "../Components/weDo";

export default function About() {
  return (
    <div>
        <Navigation></Navigation>
        <AboutText></AboutText>
        <WeDo></WeDo>
        <OurRobots></OurRobots>
        <RobotsInfo></RobotsInfo>
        <Footer></Footer>
    </div>
  );
}
