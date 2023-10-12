import { Route, Routes } from "react-router-dom"
import Users from "./Users"
import ShowUser from "./Show"

function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:id" element={<ShowUser />} />
        </Routes>
    )
}
export default UserRoutes