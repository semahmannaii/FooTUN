import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addItem, loadCurrentItem } from "../redux/shopping/actions"

function ProductCard({ product, addItem, loadCurrentItem }) {
    return (
        <div className="col-md-6 col-lg-4 text-center">
            <div>
                <img src={product.img} alt="" className="w-100 img-thumbnail" />
                <h3 className="fs-5 my-4">{product.title}</h3>
                <h2 className="lead fw-bold fs-4 my-2">{product.price} TND</h2>
                <div>
                    <Link to={`/product/${product.id}`} className="btn btn-success text-decoration-none my-4" onClick={() => loadCurrentItem(product)}>See Details</Link>
                    <Link to="" className="btn btn-success text-decoration-none ms-2 mt-4 mb-4" onClick={() => addItem(product.id)} ><i className="fa fa-cart-plus me-2 fs-5"></i>Add To Cart</Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => dispatch(addItem(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)