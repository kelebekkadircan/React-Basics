import { Helmet } from "react-helmet"
import { Outlet } from "react-router-dom"



export default function BlogPage() {


    return (
        <>
            <div>
                Blog Layout
                <Outlet />
                <Helmet>
                    <title>Blog</title>
                </Helmet>

            </div>
        </>
    )
}