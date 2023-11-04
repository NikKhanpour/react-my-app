import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchUpdatePost } from "../../redux/posts/action"
import Swal from "sweetalert2"

function Update() {
    const { posts, btnLoading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const params = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    useEffect(() => {
        setPost(posts.find(p => p.id === parseInt(params.id)))
    }, [params.id, posts])

    function handleUpdatePost(e) {
        e.preventDefault()

        dispatch(fetchUpdatePost(post))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Post Updated',
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
            <div className="row justify-content-center">
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {post && <div className="col-md-4">
                    <form onSubmit={(e) => handleUpdatePost(e)}>
                        <label className="form-label">Title</label>
                        <input onChange={(e) => setPost({ ...post, title: e.target.value })} value={post.title} type="text" className="form-control" />
                        <label className="form-label mt-3">Body</label>
                        <textarea onChange={(e) => setPost({ ...post, body: e.target.value })} value={post.body} rows="5" className="form-control"></textarea>
                        <button disabled={post.title === '' || post.body === '' || btnLoading} type="submit" className="btn btn-dark mt-3">Update
                            {btnLoading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                        </button>
                    </form>
                </div>}
            </div>
        </div>
    )
}
export default Update