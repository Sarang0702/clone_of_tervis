import { useEffect, useState } from 'react';
import '../Css/cart.css';
import { Nav } from "./Nav";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const Cart = () =>
{   
    const data = JSON.parse(localStorage.getItem("terviscart"))
    const [value,setValue] = useState({});
    console.log(data);

    
    const delcart = (product) =>
    {
        
        data.splice(data.findIndex(a => a.id === product.id) , 1)        
        localStorage.setItem("terviscart",JSON.stringify(data));     

        setValue({"msg":"refresh page"});
    }

    console.log(data);

    return(
    <>
        <Nav />
        <div className='item-container'>
            {data.map((product) => (
            <div className='card'>
                <img src={product.image} alt='' />
                <h3>{product.title}</h3>
                <p><strong>{"Rs  " + product.price}</strong></p>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => delcart(product)} >
                    Delete
                </Button>
            </div>          
            ))}
        </div>
    </>)
}