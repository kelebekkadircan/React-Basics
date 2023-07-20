import { useParams } from "react-router-dom"




export default function Post() {
    const { url, id } = useParams() // URL VE İD ALIYOR 
    console.log({ url, id }); // obje olarak iksini verir

    console.log(url, id); // text olarak verir

    return (
        <>
            <div>
                Post blog page
            </div>
        </>
    )
}