import Picture from "../images/home.png"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container-lg">
            <div className="row align-items-center align-content-center">
                <div className="col-md-6 mt-5 mt-md-0">
                    <div className="text-center">
                        <img src={Picture} alt="" className="mw-100" />
                    </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                    <div>
                        <h1 className="text-success text-uppercase fs-1 fw-bold">Greatest Football Store</h1>
                        <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus ligula non porta dictum. Nullam in ante commodo, interdum dui sit amet, eleifend turpis. Nulla tincidunt mauris est, non rhoncus ante aliquet posuere. Vestibulum sed sem nibh. Vestibulum tempor velit sem, in laoreet lacus facilisis vitae. Mauris feugiat tincidunt erat non mattis. Aliquam facilisis, mi sed finibus rutrum, est eros pretium velit, eget interdum risus enim eget mauris.</p>
                        <Link to="products" className="btn btn-success px-3 my-3">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
