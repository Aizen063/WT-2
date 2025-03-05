import React, { useState } from "react";

function Product() {
    const [product, setProduct] = useState([
        { id: 1, name: "abc", category: "electronic", price: 10000 },
        { id: 2, name: "bike", category: "vehicle", price: 1000000 },
        { id: 3, name: "Laptop", category: "gadget", price: 10000 },
        { id: 4, name: "bike", category: "vehicle", price: 1000000 },
        { id: 5, name: "bike", category: "vehicle", price: 1000000 }
    ]);

    const deleteProduct = (id) => {
        setProduct(product.filter((proc) => proc.id !== id));
    };

    return (
        <div className="container">
            <div className="row">
                {product.map((proc) => (
                    <div className="card col-7" style={{ width: "18rem" }} key={proc.id}>
                        <div className="card-body">
                            <h5 className="card-title">{proc.id}</h5>
                            <h5 className="card-title">{proc.name}</h5>
                            <p className="card-text">{proc.category}</p>
                            <p className="card-text">{proc.price}</p>
                            <button className="btn btn-danger" onClick={() => deleteProduct(proc.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;