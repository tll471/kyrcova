import { Card } from "./card"
import { Choose } from "./choose"
import { HeroImage } from "./heroImage"
import { Timersell } from "./timersell"
import { Upcoming } from "./upcoming"
export function Main()
{
    return(
        <div>
            <HeroImage></HeroImage>

            <div className="flex flex-row justify-center">
                <Card image="/pictures/1_pic.png" title="Micro Bots" text="Easy Build | Age 8+"/>
                <Card image="/pictures/2_pic.png" title="Quad-Pod Hunter" text="Intermediate | Age 12+"/>
                <Card image="/pictures/3_pic.png" title="Prime Android" text="Expert Build | Age 16+"/>
            </div>

            <Timersell></Timersell>
            <Choose></Choose>
            <Upcoming></Upcoming>
        </div>
    )
}