import { useState } from "react"
import { useDispatch } from "react-redux"
import { create } from "../../redux/tasks/action"

function Create() {
    const dispatch = useDispatch()

    const [task, setTask] = useState('')

    function createTask(e) {
        e.preventDefault()

        dispatch(create({ title: task, completed: false }))
    }

    return (
        <div className="col-12">
            <h2>Create Task</h2>
            <form onSubmit={(e) => createTask(e)}>
                <div className="row mt-2 mb-3">
                    <div className="col-md-4">
                        <input onChange={(e) => setTask(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-dark">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Create