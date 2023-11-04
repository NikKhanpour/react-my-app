import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { fetchDeletePost } from "../../redux/posts/action"
import Swal from "sweetalert2"

function Show() {
    const { posts, btnLoading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const params = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    useEffect(() => {
        setPost(posts.find(p => p.id === parseInt(params.id)))
    }, [posts, params.id])

    function handleDeletePost() {
        dispatch(fetchDeletePost(parseInt(params.id)))
            .then(() => {
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
            })
    }

    return (
        <div className="container mt-5">
            <div className="row text-center justify-content-center">
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {post &&
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">{post.title}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{post.body}</li>
                            </ul>
                            <div className="card-footer d-flex justify-content-between">
                                <Link to={`/posts/update/${post.id}`} className="btn btn-outline-primary btn-sm">Update</Link>
                                <button onClick={() => handleDeletePost()} disabled={btnLoading} className="btn btn-sm btn-outline-danger">Delete
                                    {btnLoading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Show