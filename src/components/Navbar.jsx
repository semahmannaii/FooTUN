import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

function Navbar({ cart }) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        })
        
        setCounter(count)

    }, [cart, counter])

    return (
        <div>
            <nav className="navbar navbar-light bg-light shadow-sm">
                <div className="container-lg">
                    <Link className="navbar-brand text-success fw-bold fs-4" to="/">FooTUN</Link>
                    <div>
                        <Link to="cart" className="btn btn-outline-success ms-auto px-4 rounded-pill fw-bold">
                           <i className="fa fa-cart-arrow-down me-2 fs-4"></i>Cart ({counter})
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)