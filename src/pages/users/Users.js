import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="container mt-5">
            <div className="row g-3 text-center">
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center"><div className="alert alert-danger w-100">{error}</div></div>}
                {users && users.map(user => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card">
                            <div className="card-header">
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </div>
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