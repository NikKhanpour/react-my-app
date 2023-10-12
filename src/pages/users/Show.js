import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ShowUser() {
    const params = useParams()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [params.id])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center"><div className="alert alert-danger">{error}</div></div>}
                {
                    user &&
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                {user.name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{user.email}</li>
                                <li className="list-group-item">{user.phone}</li>
                                <li className="list-group-item">{user.website}</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default ShowUser