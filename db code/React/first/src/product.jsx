import React from "react";
const product = [{
    name:"abc",
    catagory:"electronic",
    price:10000
},{
    name:"bike",
    catagory:"vhecal",
    price:1000000
},
{
    name:"Laptop",
    catagory:"gaget",
    price:10000
},
{
    name:"bike",
    catagory:"vhecal",
    price:1000000
},
{
    name:"bike",
    catagory:"vhecal",
    price:1000000
}
]
function Product(){
    return(
        <div className="container" >
            <div className="row">
        {product.map((proc,i)=>{
            return<div className="card col-7" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{proc.name}</h5>
              <p className="card-text">{proc.catagory}</p>
              <p className="card-text">{proc.price}</p>
            </div>
          </div>
        })}
        </div>
        </div>
    )
}
export default Product;