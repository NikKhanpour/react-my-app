import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setError, setLoading } from "../../redux/posts/action"
import Swal from "sweetalert2"

function Edit() {
    const params = useParams()
    const navigate = useNavigate()

    const { loading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)

    useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(post => {
                setTitle(post.data.title)
                setBody(post.data.body)
                dispatch(setLoading(false))
                dispatch(setError(null))
            })
            .catch(error => {
                dispatch(setLoading(false))
                dispatch(setError(error.message))
            })
    }, [dispatch, params.id])

    async function update(e) {
        e.preventDefault()

        try {
            setBtnLoading(true)
            await axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
                title,
                body,
                id: params.id
            })
            setBtnLoading(false)
            dispatch(setError(null))
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
        } catch (error) {
            setBtnLoading(false)
            dispatch(setError(error.message))
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {loading && <div className="text-center"><div className="spinner-border" style={{ width: '4rem', height: '4rem' }}></div></div>}
                {error && <div className="text-center col-8"><div className="alert alert-danger">{error}</div></div>}
                <div className="col-md-5">
                    <form onSubmit={(e) => update(e)}>
                        <label className="form-label">Titlte</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" value={title} />
                        <label className="form-label mt-4">Body</label>
                        <textarea onChange={(e) => setBody(e.target.value)} rows='5' type="text" className="form-control" value={body} />
                        <button disabled={btnLoading || title === '' || body === ""} type="submit" className="btn btn-dark mt-4">Update
                            {btnLoading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Edit