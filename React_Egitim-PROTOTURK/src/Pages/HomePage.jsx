import { Helmet } from "react-helmet"



export default function HomePage() {


    return (
        <>
            <div>


                <div>
                    Home Page
                </div>
                <br />
                <div>
                    <button className="rounded border px-4 py-2 bg-zinc-600 text-white">Contact Git</button>
                    <button className="rounded border px-4 py-2 bg-zinc-600 text-white ml-4 ">Blog Git</button>
                </div>
                <div>
                    <Helmet>
                        <title>Anasayfa</title>
                        <meta name="description" content="anasayfa description" />
                    </Helmet>
                </div>
            </div>
        </>
    )
}