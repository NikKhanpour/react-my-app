import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/products/action"
import { addToCart } from "../redux/cart/action"
import Swal from "sweetalert2"

function Products() {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    function handleAddToCart(product) {
        dispatch(addToCart(product))
        Swal.fire({
            icon: 'success',
            title: 'Cart Updatd',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {products && products.map(product => (
                    <div key={product.id} className="col-md-3">
                        <div className="card">
                            <img src={product.image} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div>
                                    <button onClick={() => handleAddToCart(product)} className="btn btn-sm btn-outline-success">Add To Cart</button>
                                </div>
                                <div>
                                    {product.price}$
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products