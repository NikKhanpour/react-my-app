import { Route, Routes } from "react-router-dom"
import Posts from "./Posts"
import Show from "./Show"
import Update from "./Update"

function PostsRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/:id" element={<Show />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
    )
}
export default PostsRoutes