import { createContext } from "react"
import { Route, Routes } from "react-router-dom"
import Posts from "./Posts"
import Create from "./Create"
import Show from "./Show"
import Edit from "./Edit"


export const Context = createContext()

function PostsRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Show />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    )
}
export default PostsRoutes