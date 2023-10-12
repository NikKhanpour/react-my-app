import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "../../redux/tasks/action"
import Create from "./Create"
import DeleteTask from "./Delete"
import UpdateTask from "./Update"

function Tasks() {
    const { tasks, loading, error } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <div className="container mt-5">
            <div className="row g-3">
                <Create />
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center"><div className="alert alert-danger">{error}</div></div>}
                {tasks && tasks.map(task => (
                    <div key={task.id} className="col-md-4">
                        <div className={"card " + (task.completed && "bg-light")}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>{task.completed ? <del>{task.title}</del> : <span>{task.title}</span>}</div>
                                <div className="d-flex align-items-center">
                                    <UpdateTask task={task} />
                                    <DeleteTask id={task.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tasks