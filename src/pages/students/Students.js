import { useEffect, useState } from "react"
import Show from "./Show"
import Create from "./Create"

function Students() {
    const [toggle, setToggle] = useState(false)
    const [arrayHolder, setArrayHolder] = useState([])

    const [students, setStudents] = useState([
        { id: 1, name: 'nik', class: 101 },
        { id: 2, name: 'monalisa', class: 102 },
        { id: 3, name: 'juana', class: 103 },
        { id: 4, name: 'star', class: 104 },
        { id: 5, name: 'peep', class: 105 },
        { id: 6, name: 'asap', class: 106 },
    ])

    function deleteStudent(e, id) {
        e.preventDefault()
        setStudents(students.filter(s => s.id !== id))
    }

    function toggleHandler() {
        setToggle(!toggle)
    }

    useEffect(() => {
        setArrayHolder(students)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function searchFilter(e) {
        const items = students.filter(item => {
            const itemData = item.name.toUpperCase()
            const inputData = e.target.value.toUpperCase()
            return itemData.indexOf(inputData) > -1
        })
        setStudents(items)
        !e.target.value && setStudents(arrayHolder)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <Create students={students} setStudents={setStudents} />
                <div className="col-12"><input type="text" className="form-control mt-5" onChange={(e) => searchFilter(e)} /></div>
                <button onClick={() => toggleHandler()} className="col-12 btn btn-outline-primary m-3">Display Style</button>
                {students.map(student => (
                    <Show
                        key={student.id}
                        student={student}
                        students={students}
                        setStudents={setStudents}
                        deleteStudent={deleteStudent}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    )
}
export default Students