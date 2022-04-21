import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import '../Css/Products.css'


export const Products = () =>
{
    const [data,setData] = useState([])

    const fetchData = () =>
    {
        fetch('http://localhost:8000/products')
        .then( (res) => res.json())
        .then( (res) => setData(res))
        .catch( (err) => console.log(err))
    }
    useEffect(
        ()=>
        {
            fetchData()
        },[]
    );

    console.log(data);

    return(<>
        <Nav />        
        <h1>Products</h1>
        <div className='item-container'>
            {data.map((product) => (
            <div className='card'>
                <img src={product.image} alt='' />
                <h3>{product.title}</h3>
                <p>{product.id}</p>
            </div>          
            ))}
        </div>
    </>);
}