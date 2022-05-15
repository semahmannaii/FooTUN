import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addItem } from "../redux/shopping/actions"

function Product({ currentItem, addItem }) {
    return (
            <div className="container-lg">
                <div className="row min-vh-100 align-items-center align-content-center">
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="text-center">
                            <img src={currentItem.img} alt="" className="mw-100" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div>
                            <h1 className="text-uppercase fs-4 fw-bold">{currentItem.title}</h1>
                            <h2 className="text-success fs-1 fw-bold mt-4">{currentItem.price} TND</h2>
                            <p className="mt-4 text-muted">{currentItem.desc}</p>
                            <button className="btn btn-outline-success text-decoration-none my-4" onClick={() => addItem(currentItem.id)}><i className="fa fa-cart-plus me-2 fs-5"></i>Add To Cart</button>
                            <Link to="/cart" className="btn btn-success text-decoration-none ms-2 my-4"><i className="fa fa-shopping-cart me-2 fs-5"></i>Go To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addItem: (id) => dispatch(addItem(id))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Product)
