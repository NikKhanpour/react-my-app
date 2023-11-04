import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCreateTask } from "../../../redux/tasks/actions"
import Swal from "sweetalert2"

function Create() {
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(false)

    const { tasks } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    function handleCreateTask(e) {
        e.preventDefault()
        setLoading(true)
        dispatch(fetchCreateTask({ title: task, userId: 1, completed: false, id: tasks.lentgh + 10 }))
            .then(() => {
                setLoading(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Task Created',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
            })
    }

    return (
        <div className="col-12">
            <div className="row align-items-center">
                <form onSubmit={(e) => handleCreateTask(e)}>
                    <div className="col-6">
                        <h2>Create Task</h2>
                        <input type="text" onChange={(e) => setTask(e.target.value)} className="form-control" />
                    </div>
                    <div className="col-2">
                        <button disabled={!task || loading} type="submit" className="btn btn-dark">Update
                            {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Create