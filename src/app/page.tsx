import {Navigation} from "./Components/navigation"
import { Main } from "./Components/main";
import { Footer } from "./Components/footer";
import { PageLoader } from "./Components/loading";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation></Navigation>
        <Main></Main>
        <PageLoader></PageLoader>
      <Footer></Footer>
    </div>
  );
}
