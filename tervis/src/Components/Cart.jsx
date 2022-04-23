import { useEffect, useState } from 'react';
import '../Css/cart.css';
import { Nav } from "./Nav";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Cart = () =>
{   
    const data = JSON.parse(localStorage.getItem("terviscart"))
    const [value,setValue] = useState({});    

    var t = 0;
    data.forEach((el) => t += el.price)
    console.log(data);
    const delcart = (product) =>
    {
        data.splice(data.findIndex(a => a.id === product.id) , 1)        
        localStorage.setItem("terviscart",JSON.stringify(data));     

        setValue({"msg":"just refresh page"});
    }    

    
    var mt = 0;
    if(t != 0)
    {
        mt = 35+t
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
                                <td>{"Rs. "+t }</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>Rs. 35</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{"Rs. "+mt}</td>
                            </tr>
                        </table>
                </div>
            </div>

            <div>
                <h4>Add Your Address To Deliver Product</h4>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                ></Box>
                <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Full Name : "
                    multiline
                    maxRows={4}                
                />
                <br /><br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email : "
                    multiline
                    maxRows={4}                
                />
                <br /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Address : "
                    multiline
                    rows={4}
                />
                <br /><br />                
                <strong>Total Amount is {"Rs. "+mt}</strong>      
                <br /><br />   
                <Button variant="outlined" >
                    Checkout
                </Button>                                        
            </div>
        </div>            
    </div>
        

        

    </>)
}