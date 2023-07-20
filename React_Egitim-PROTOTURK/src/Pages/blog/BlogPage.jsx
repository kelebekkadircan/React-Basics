import { Outlet } from "react-router-dom"



export default function BlogPage() {


    return (
        <>
            <div>
                Blog Layout
                <Outlet />
            </div>
        </>
    )
}