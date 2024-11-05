import React from 'react'
import { Card, CardBody } from 'reactstrap'

const productDetails = [
    {
        id: 1,
        img: "https://themesbrand.com/velzon/html/master/assets/images/products/img-8.png",
        name: "Sweatshirt for Men (Pink)",
        color: "Pink",
        size: "M",
        price: "$119.99",
        quantity: "02",
        amount: "$239.98",
    },
    {
        id: 2,
        img: "https://themesbrand.com/velzon/html/master/assets/images/products/img-8.png",
        name: "Noise NoiseFit Endure Smart Watch",
        color: "Black",
        size: "32.5mm",
        price: "$94.99",
        quantity: "01",
        amount: "$94.99",
    },
    {
        id: 3,
        img: "https://themesbrand.com/velzon/html/master/assets/images/products/img-8.png",
        name: "350 ml Glass Grocery Container",
        color: "White",
        size: "350 ml",
        price: "$24.99",
        quantity: "01",
        amount: "$24.99",
    },
];


const OrderDetailsTable = () => {
    return (
        <Card>
            {/* <CardHeader>
          <div className="d-flex align-items-center">
            <h5 className="card-title flex-grow-1 mb-0">Order #VL2667</h5>
            <div className="flex-shrink-0">
              <Link
                to="/apps-invoices-details"
                className="btn btn-success btn-sm"
              >
                <i className="ri-download-2-fill align-middle me-1"></i>{" "}
                Invoice
              </Link>
            </div>
          </div>
        </CardHeader> */}
            <CardBody>
                <div className="table-responsive table-card">
                    <table className="table table-nowrap align-middle table-borderless mb-0">
                        <thead className="table-light text-muted">
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col">VAT Rate</th>
                                <th scope="col">VAT Amount</th>
                                <th scope="col">Discount</th>
                                <th scope="col" className="text-end">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {productDetails.map((product, key) => (

                                <React.Fragment>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="fs-15">
                                                        <a
                                                            href="apps-ecommerce-product-details"
                                                            className="link-primary"
                                                        >
                                                            {product.name}
                                                        </a>
                                                    </h5>
                                                    <p className="text-muted mb-0">
                                                        Color: <span className="fw-medium">{product.color}</span>
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        Size: <span className="fw-medium">{product.size}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            20%
                                        </td>
                                        <td>
                                            2,90€
                                        </td>
                                        <td>
                                            0,80€
                                        </td>
                                        <td className="fw-medium text-end">{product.amount}</td>
                                    </tr>
                                </React.Fragment>
                            ))}
                            <tr className="border-top border-top-dashed">
                                <td colSpan={5}></td>
                                <td colSpan={2} className="fw-medium p-0">
                                    <table className="table table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <td>Sub Total :</td>
                                                <td className="text-end">$359.96</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Discount{" "}
                                                    <span className="text-muted">(VELZON15)</span>{" "}
                                                    : :
                                                </td>
                                                <td className="text-end">-$53.99</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping Charge :</td>
                                                <td className="text-end">$65.00</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax :</td>
                                                <td className="text-end">$44.99</td>
                                            </tr>
                                            <tr className="border-top border-top-dashed">
                                                <th scope="row">Total (USD) :</th>
                                                <th className="text-end">$415.96</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>

    )
}

export default OrderDetailsTable