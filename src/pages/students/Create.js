import { useState } from "react"

function Create(props) {
    const [name, setName] = useState('')
    const [classs, setClass] = useState('')

    function handleCreateStudent(e) {
        e.preventDefault()
        props.setStudents([...props.students, { id: props.students.length + 1, name, class: classs }])
        setName('')
        setClass('')
    }

    return (
        <div className="col-6">
            <form onSubmit={(e) => handleCreateStudent(e)}>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                <label className="form-label mt-3">Class</label>
                <input type="number" className="form-control" onChange={(e) => setClass(e.target.value)} value={classs} />
                <button type="submit" className="btn btn-outline-success mt-3">Create</button>
            </form>
        </div>
    )
}
export default Create