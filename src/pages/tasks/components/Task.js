import { useDispatch } from "react-redux"
import { fetchDeleteTask, fetchUpdateTask } from "../../../redux/tasks/actions"
import { useState } from "react"
import Swal from "sweetalert2"

function Task({ task }) {
    const [updateLoading, setUpdateLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    const dispatch = useDispatch()

    function handleUpdateTask() {
        setUpdateLoading(true)
        dispatch(fetchUpdateTask({ ...task, completed: !task.completed }))
            .then(() => {
                setUpdateLoading(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Task Updated',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
            })
    }

    function handleDeleteTask() {
        setDeleteLoading(true)
        dispatch(fetchDeleteTask(task.id))
            .then(() => {
                setDeleteLoading(false)
                Swal.fire({
                    icon: 'warning',
                    title: 'Task Deleted',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
            })
    }

    return (
        <div className="col-md-4" >
            <div className={"card p-3 " + (task.completed && "bg-light")}>
                <div className="d-flex justify-content-between align-items-center" >
                    <div>{task.completed ? <del>{task.title}</del> : <span>{task.title}</span>}</div>
                    <div className="d-flex align-items-center">
                        {
                            updateLoading ? <div className="spinner-border spinner-border-sm" style={{ margin: '10px 3px' }}></div>
                                : (task.completed ? <i onClick={handleUpdateTask} className="bi bi-check-all fs-4"></i> : <i onClick={handleUpdateTask} className="bi bi-check fs-4"></i>)
                        }
                        {deleteLoading ? <div className="spinner-border spinner-border-sm" style={{ margin: '10px 0px 10px 8px' }}></div> : <i onClick={handleDeleteTask} className="bi bi-trash-fill fs-6 ms-2"></i>}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Task