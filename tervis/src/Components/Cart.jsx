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
    const [total,setTotal] = useState(0);

    const findtotal = () => data.forEach((el) => setTotal(total + el.price))
    useEffect(()=>
    {
        findtotal()
    },[])
    // 

    
    console.log(data);
     console.log(total);

    
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
       
        <div className='maincart'>     
            <div className='small-container'>
                <table>
                    <tr>
                        <th className='cartheading'>Product</th>
                        <th className='cartheading'>Quantity</th>
                        <th className='cartheading'>Subtotal</th>
                    </tr>
                    {data.map((product) => (        
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src={product.image} />
                                    <div>
                                        <p>{product.title}</p>                                        
                                        <br />
                                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => delcart(product)} >
                                            Delete
                                        </Button>                                        
                                    </div>
                                </div>
                                <hr />
                            </td>
                            <td><input type={"text"} value={"1"} /> </td>
                            <td>{"Rs."+product.price}</td>
                        </tr>
                    ))}
                </table>
                <div className='total-price'>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td>Rs. 070201</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>Rs. 0702</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>Rs. 0201</td>
                            </tr>
                        </table>
                </div>
            </div>

            <div>

            </div>            



        


        </div>
        

        

    </>)
}