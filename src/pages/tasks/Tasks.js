import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "../../redux/tasks/actions"
import Task from "./components/Task"
import Create from "./components/Create"

function Tasks() {
    const { tasks, loading, error } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <div className="container mt-5">
            <div className="row g-3 text-center">
                <Create />
                {loading && <div className="col-12"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {tasks && tasks.map(task => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    )
}
export default Tasks