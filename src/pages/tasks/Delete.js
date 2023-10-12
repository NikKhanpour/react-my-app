import { useDispatch } from "react-redux"
import { deleteTask } from "../../redux/tasks/action"
import { useState } from "react"
import axios from "axios"
import { setError } from "../../redux/tasks/action"

function DeleteTask({ id }) {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    async function handleDeleteTask() {
        setLoading(true)
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            setLoading(false)
            dispatch(deleteTask(id))
        } catch (error) {
            dispatch(setError(error))
        }
    }

    return (
        <>
            {loading ? <div className="spinner-border spinner-border-sm ms-2"></div> : <i onClick={() => handleDeleteTask()} className="bi bi-trash-fill fs-6 ms-2"></i>}
        </>
    )
}
export default DeleteTask