import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setError, setLoading } from "../../redux/posts/action"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function Create() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const { loading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    async function createPost(e) {
        e.preventDefault()

        try {
            dispatch(setLoading(true))
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body
            })
            dispatch(setLoading(false))
            Swal.fire({
                icon: 'success',
                title: 'Post Created',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })
            navigate('/posts')
        } catch (error) {
            dispatch(setError(error))
            dispatch(setLoading(false))
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={(e) => createPost(e)}>
                        <label className="form-label">Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                        <label className="form-label mt-3">Body</label>
                        <textarea onChange={(e) => setBody(e.target.value)} rows='5' type="text" className="form-control" />
                        <button disabled={loading || title === '' || body === ''} type="submit" className="btn btn-dark mt-3">Create
                            {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create