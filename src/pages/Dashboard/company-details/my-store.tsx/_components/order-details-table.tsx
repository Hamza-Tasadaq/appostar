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

            <CardBody>
                <div className="table-responsive table-card">
                    <table className="table table-nowrap align-middle table-borderless mb-0">
                        <thead className="table-light text-muted">
                            <tr>
                                <th scope="col">Product Details</th>
                                <th scope="col">Item Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Rating</th>
                                <th scope="col" className="text-end">
                                    Total Amount
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
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <div className="text-warning fs-15">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-half-fill"></i>
                                            </div>
                                        </td>
                                        <td className="fw-medium text-end">{product.amount}</td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardBody>

        </Card>
    )
}

export default OrderDetailsTable