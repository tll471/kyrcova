import Image from "next/image";
import {Navigation} from "./Components/navigation"
import { Main } from "./Components/main";
import { Footer } from "./Components/footer";

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
