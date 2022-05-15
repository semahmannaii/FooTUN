import ProductCard from "../components/ProductCard"
import { connect } from "react-redux"

function Products({ products }) {
    return (
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h2 className="fw-bold mb-5">Discover</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)