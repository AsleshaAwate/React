import { useEffect, useState } from "react";
import axios from "axios";
import "../02-06/AllProducts.css"

function AllProducts(){
    const[allProducts,setAllProducts]=useState([]);
    console.log(allProducts);

    async function GetProduct(){
        try{
            const product=await axios.get("https://fakestoreapi.com/products");
            setAllProducts(product.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        GetProduct()},[]);

    return(
        <div>
            <h1>All Products</h1>
            <div id="allproductsshow">
                {allProducts.map((product)=>(
                    <div id="productshow">
                        <img src={product.image}/>
                        <p><b>Title</b>: {product.title}</p>
                        <p><b>Price</b>: ₹{product.price}</p>
                        <p><b>Category</b>: {product.category}</p>
                        <p><b>Rating</b>: {product.rating.rate} ({product.rating.count})</p>
                        <p><b>Description</b>: {product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AllProducts;