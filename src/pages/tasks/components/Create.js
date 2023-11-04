import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCreateTask, setId } from "../../../redux/tasks/actions"
import Swal from "sweetalert2"

function Create() {
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(false)

    const { id } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    function handleCreateTask(e) {
        e.preventDefault()
        dispatch(setId())
        setLoading(true)
        dispatch(fetchCreateTask({ title: task, userId: 1, completed: false, id }))
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
            <form onSubmit={(e) => handleCreateTask(e)} className="row">
                <div className="col-6">
                    <input type="text" onChange={(e) => setTask(e.target.value)} className="form-control" placeholder="Create New Task..." />
                </div>
                <div className="col-auto">
                    <button disabled={!task || loading} type="submit" className="btn btn-dark">Create
                        {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Create