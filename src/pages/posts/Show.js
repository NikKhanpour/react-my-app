import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { setError, setLoading } from "../../redux/posts/action"
import Swal from "sweetalert2"

function Show() {
    const params = useParams()
    const navigate = useNavigate()

    const { loading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const [post, setPost] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)

    useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(data => {
                setPost(data.data)
                dispatch(setLoading(false))
                dispatch(setError(null))
            })
            .catch(err => {
                dispatch(setError(err.message))
                dispatch(setLoading(false))
            })
    }, [dispatch, params.id])

    async function deletePost() {
        try {
            setBtnLoading(true)
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            setBtnLoading(false)
            Swal.fire({
                icon: 'warning',
                title: 'Post Deleted',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })
            navigate('/posts')
        } catch (error) {
            dispatch(setError(error.message))
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center"><div className="alert alert-danger">{error}</div></div>}
                {
                    post && <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">{post.title}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{post.body}</li>
                            </ul>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <Link to={`/posts/edit/${params.id}`} className="btn btn-primary">Edit</Link>
                                    <button disabled={btnLoading} onClick={() => deletePost()} className="btn btn-danger">Delete
                                        {btnLoading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Show