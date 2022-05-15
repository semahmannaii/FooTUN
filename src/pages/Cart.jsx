import { useState, useEffect } from "react"
import CartItem from "../components/CartItem"
import { connect } from "react-redux"

function Cart({ cart }) {
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach(item => {
      items += item.qty
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)

  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

  return (
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <h2 className="fw-bold mb-5">Your Bag</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="align-items-center align-content-center text-center pt-5">
        <h2 className="fs-4 my-4">Cart Summary</h2>
        <div className="text-success fs-1 fw-bold mt-4">
          <span>Total: ({totalItems} items )</span>
          <span className="ms-5">{totalPrice} TND</span>
        </div>
        <button className="btn btn-success text-decoration-none mt-4">Procced to checkout</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart)