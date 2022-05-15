import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import { connect } from "react-redux";

function App({ currentItem }) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={!currentItem ? <Navigate to="/" /> : <Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);