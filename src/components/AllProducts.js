import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../service/product.service";
import { getCategoryWiseProductData, saveProduct, saveToCart } from "../redux/product.slice";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  let [searchParams] = useSearchParams();
  let dispatch = useDispatch();
  let { productList } = useSelector((state) => {
    return state.product;
  });
  //onLoad
  useEffect(() => {
    let id = searchParams.get("c_id");
    dispatch(getCategoryWiseProductData(id));
    //on unmount ..removing list
    return () => {
      dispatch(saveProduct([]));
    };
  }, []);
  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5 className="text-capitalize">
            All Products of {searchParams.get("cat_name")}
          </h5>
        </div>

        <div className="row mb-3">
          {productList.map((product) => {
            return (
              <div
                className="col-md-3 mb-3"
                key={product.id}
                title={product.title + "-" + product.description}
              >
                <div className="card size">
                  <img
                    src={product.image}
                    className="card-img-top-img"
                    alt="..."
                    style={{ height: "50vh" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="product-style mb-2 ">
                      {product.title.substring(0, 10)}
                    </h6>
                    <div className="overflow">
                      <p className="product-name">
                        {product.description.substring(0, 30)}
                      </p>
                    </div>
                    <div className="">
                      <span className="pe-2">₹{product.price}</span>
                      <span className="text-secondary pe-2">
                        <del>₹{product.price * 2}</del>
                      </span>
                      <span className="text-success">50% off</span>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch(saveToCart({ ...product, qty: 1 }))
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="p-3 p-3 pb-0">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email/Mobile no"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>

                  {/* <!-- <div className="mb-3">
                       <input type="text" className="form-control" placeholder="Enter OTP"/>
                     </div> --> */}
                </form>
              </div>
              <div className="modal-footer  justify-content-center">
                {/* <!-- <button type="button" className="btn btn-primary">Login</button> -->
                   <button type="button" className="btn btn-primary">Sign Up</button>
                 <!-- <p className="text-sm">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
