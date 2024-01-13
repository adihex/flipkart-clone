import { useDispatch, useSelector } from "react-redux";
import { manageQty, removeFromCart } from "../redux/product.slice";
import { useEffect, useState } from "react";

const Cart = () => {
  let [totalPrice, setTotalPrice] = useState({ qtyCount: 0, QtyPrice: 0 });
  let dispatch = useDispatch();
  let { cart } = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    let price = cart.reduce(
      (preValue, currentValue) => {
        let pTotal = Math.round(currentValue.qty * currentValue.price);
        return {
          qtyCount: preValue.qtyCount + currentValue.qty,
          QtyPrice: preValue.QtyPrice + pTotal,
        };
      },
      { qtyCount: 0, QtyPrice: 0 }
    );
    setTotalPrice(price);
  }, [cart]);
  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5>Your Cart</h5>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="d-non">
              <div className="card mb-3">
                <div className="card-body">
                  {cart.map((_cart, index) => {
                    return (
                      <>
                        <div className="d-flex" key={index}>
                          <div className="px-4">
                            <img
                              src={_cart.image}
                              className="cartpImg"
                              alt=""
                            />
                          </div>
                          <div className="">
                            <p className="card-title">{_cart.title}</p>
                            <div className="text-secondary">
                              <p className="mb-0 text-capitalize">
                                Category: {_cart.category}
                              </p>
                              <p>Quantity: {_cart.qty}</p>
                            </div>

                            <p className="card-text">₹{_cart.price}/-</p>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                dispatch(manageQty({ index, sing: "+" }))
                              }
                            >
                              +
                            </button>
                            <button
                              className="btn btn-primary btn-sm mx-1"
                              onClick={() =>
                                dispatch(manageQty({ index, sing: "-" }))
                              }
                            >
                              -
                            </button>
                            <button
                              className="btn btn-danger rounded-0 btn-sm"
                              onClick={() => dispatch(removeFromCart(index))}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        {cart.length - 1 === index ? null : <hr />}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body d-flex  justify-content-end">
                  <a
                    href="#"
                    className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                    style={{ backgroundColor: "#fb641b" }}
                  >
                    PLACE ORDER
                  </a>
                </div>
              </div>
            </div>

            <div className="d-none">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="mb-2">
                    <div>1. Login or SigUp</div>
                    <div className="w-50">
                      <input
                        type="text"
                        className="form-control mt-3 mb-3"
                        placeholder="Enter Email/Mobile Number"
                      />
                      <a
                        href="#"
                        className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                        style={{ backgroundColor: "#fb641b" }}
                      >
                        CONTINUE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="mb-2">
                    <div>2. DELIVERY ADDRESS</div>
                    <div className="bg-light py-2 px-3 mt-3">
                      Add new Address
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="mb-2">
                    <div>3. ORDER SUMMARY</div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="mb-2">
                    <div>3. PAYMENT OPTION</div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body d-flex  justify-content-end">
                  <a
                    href="#"
                    className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                    style={{ backgroundColor: "#fb641b" }}
                  >
                    PLACE ORDER
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Add more product cards here --> */}
          </div>
          <div className="col-md-4">
            <div className="card" style={{ position: "sticky", top: "70px" }}>
              <div className="card-body">
                <h6 className="card-title border-bottom pb-3">
                  PRICE DETAILS{" "}
                </h6>
                <table className="table">
                  <tbody>
                    <tr className="border-white">
                      <td>Price ({totalPrice.qtyCount} item) </td>
                      <td>₹{totalPrice.QtyPrice}</td>
                    </tr>
                    <tr className="border-white">
                      <td>Discount </td>
                      <td>
                        <span className="text-success">- ₹0</span>
                      </td>
                    </tr>

                    <tr className="">
                      <td>Delivery Charges </td>
                      <td>
                        <span className="text-success">FREE</span>
                      </td>
                    </tr>
                    <tr className="border-white ">
                      <td>
                        <span className="font-weight-bold">Total Amount </span>
                      </td>
                      <td>
                        <span className="font-weight-bold">
                          ₹{totalPrice.QtyPrice}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
              </form>
            </div>
            <div className="modal-footer  justify-content-center">
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
