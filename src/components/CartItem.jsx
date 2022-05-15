import { useState } from "react"
import { removeItem, adjustQty } from "../redux/shopping/actions"
import { connect } from 'react-redux'

function CartItem({ item, removeItem, adjustQty }) {
    const [quantity, setQuantity] = useState(item.qty)

    const quantityHandler = (e) => {
        setQuantity(e.target.value)
        adjustQty(item.id, e.target.value)
    }
    return (
        <div className="row align-items-center py-4">
            <div className="col-sm-6">
                <img src={item.img} alt="" className="w-25" />
            </div>
            <div className="col-sm-6">
                <h3 className="fs-4 my-4">{item.title}</h3>
                <h1 className="fs-2 my-2">{item.price}</h1>
                <label htmlFor="fs-2 fw-bold">Qty</label>
                <input min="1" type="number" id="qty" value={quantity} onChange={quantityHandler} className="rounded mx-2 my-4" />
                <button className="btn btn-danger my-4" onClick={() => removeItem(item.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => dispatch(removeItem(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)