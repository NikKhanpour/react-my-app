import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

function Update() {
    const { posts, btnLoading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const params = useParams()
    const navigate = useNavigate()

    // const [post, setPost] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const [post, setPost] = useState(null)

    useEffect(() => {
        setPost(posts.find(p => p.id === parseInt(params.id)))
        console.log(params.id)
    }, [params.id, posts])

    return (
        <div className="cotainer mt-5">
            <div className="row justify-content-center">
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {
                    <div className="col-md-4">
                        <form >
                            <label className="form-label">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} className="form-control" />
                            <label className="form-label mt-3">Body</label>
                            <textarea onChange={(e) => setBody(e.target.value)} value={body} className="form-control" rows="5"></textarea>
                            <button type="submit" className="btn btn-dark mt-3">Update</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
export default Update