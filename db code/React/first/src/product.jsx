import React, { useState } from "react";

function Product() {
    const [products, setProducts] = useState([
        { id: 1, name: "Bike", category: "Electronic", price: 10000 },
        { id: 2, name: "Scooter", category: "Vehicle", price: 1000000 },
        { id: 3, name: "Laptop", category: "Gadget", price: 10000 }
    ]);
    
    const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const addProduct = () => {
        if (newProduct.name && newProduct.category && newProduct.price) {
            setProducts([...products, { id: Date.now(), ...newProduct }]);
            setNewProduct({ name: "", category: "", price: "" });
        }
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const editProduct = (product) => {
        setEditing(true);
        setCurrentProduct(product);
        setNewProduct(product);
    };

    const updateProduct = () => {
        setProducts(products.map((product) => (product.id === currentProduct.id ? newProduct : product)));
        setEditing(false);
        setNewProduct({ name: "", category: "", price: "" });
        setCurrentProduct(null);
    };

    return (
        <div className="container">
            <h2>{editing ? "Edit Product" : "Add Product"}</h2>
            <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
            <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} />
            <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
            <button onClick={editing ? updateProduct : addProduct}>{editing ? "Update" : "Add"}</button>
            
            <div className="row">
                {products.map((product) => (
                    <div className="card col-7" style={{ width: "18rem" }} key={product.id}>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Category: {product.category}</p>
                            <p className="card-text">Price: {product.price}</p>
                            <button className="btn btn-primary" onClick={() => editProduct(product)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;