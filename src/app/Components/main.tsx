import { Card } from "./card"
import { HeroImage } from "./heroImage"
export function Main()
{
    return(
        <div>
            <HeroImage></HeroImage>

            <div className="flex flex-row justify-center">
                <Card image="/pictures/football.jpg" title="football" text="bla bla bla"/>
                <Card image="/pictures/football.jpg" title="football" text="bla bla bla"/>
                <Card image="/pictures/football.jpg" title="football" text="bla bla bla"/>
            </div>

        </div>
    )
}