import { Route, Routes } from "react-router-dom"
import Tasks from "./Tasks"

function TasksRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Tasks />} />
        </Routes>
    )
}
export default TasksRoutes