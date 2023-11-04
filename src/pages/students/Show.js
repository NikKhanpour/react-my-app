function Show(props) {
    function handleChangeName(e) {
        props.setStudents(props.students.map(s => (
            s.id === props.student.id ? { ...props.student, name: e.target.value } : s
        )))
    }

    function handleChangeClass(e) {
        props.setStudents(props.students.map(s => (
            s.id === props.student.id ? { ...props.student, class: e.target.value } : s
        )))
    }

    return (
        <div className={props.toggle ? "col-4" : "col-6"}>
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={(e) => props.deleteStudent(e, props.student.id)}>
                        <label className="form-label">Student ID</label>
                        <input type="text" className="form-control" value={props.student.id} />
                        <label className="form-label mt-3">Name</label>
                        <input type="text" className="form-control" value={props.student.name} onChange={(e) => handleChangeName(e)} />
                        <label className="form-label mt-3">Class</label>
                        <input type="number" className="form-control" value={props.student.class} onChange={(e) => handleChangeClass(e)} />
                        <button className="btn btn-outline-danger mt-3 w-100">Delete</button>
                    </form>
                    <hr />
                </div>
            </div>
        </div >
    )
}
export default Show