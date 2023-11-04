import axios from "axios"
import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setLoading(false)
                setError(null)
                setUsers(response.data)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return (
        <div className="container mt-5">
            <div className="row g-3 text-center">
                {loading && <div className="col-12"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {users && users.map(user => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card">
                            <div className="card-header">{user.name}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{user.email}</li>
                                <li className="list-group-item">{user.phone}</li>
                                <li className="list-group-item">{user.website}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Users