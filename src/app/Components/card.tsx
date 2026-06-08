type Props=
{
    image:string,
    title:string,
    text:string
}

export function Card({image, title, text}:Props)
{
    return(
        <div className="bg-blue-50 w-max m-10 flex items-center flex-col">
            <img src={image} alt="picture" className="w-50"/>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}