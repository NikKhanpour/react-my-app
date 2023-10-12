import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setError, updateTask } from "../../redux/tasks/action"

function UpdateTask({ task }) {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    async function update() {
        setLoading(true)
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                title: task.title,
                completed: !task.completed
            })
            setLoading(false)
            dispatch(updateTask(task))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }

    return (
        <>
            {task.completed ?
                (loading ? <div className="spinner-border spinner-border-sm me-1" style={{ margin: '10px' }}></div> :
                    <i onClick={() => update()} className="bi bi-check-all fs-4"></i>) :
                (loading ? <div className="spinner-border spinner-border-sm me-1" style={{ margin: '10px' }}></div> :
                    <i onClick={() => update()} className="bi bi-check fs-4"></i>)}
        </>
    )
}
export default UpdateTask