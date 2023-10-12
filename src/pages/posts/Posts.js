import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../redux/posts/action"
import { Link } from "react-router-dom"

function Posts() {
    const { posts, loading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="container mt-5">
            <div className="row g-3">
                <h2>Posts</h2>
                {!loading && <div className="col-12"><Link to='/posts/create' className="btn btn-dark mb-2">Create Post</Link></div>}
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center"><div className="alert alert-danger">{error}</div></div>}
                {!loading && posts && posts.map(post => (
                    <div className="col-md-4" key={post.id}>
                        <div className="card">
                            <div className="card-header">
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{post.body}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Posts