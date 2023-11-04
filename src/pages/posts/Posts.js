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
            <div className="row g-3 text-center">
                {loading && <div className="col-12"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {posts && posts.map(post => (
                    <div className="col-md-4" key={post.id}>
                        <Link className="card" to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card-header">{post.title}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{post.body}</li>
                            </ul>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Posts