import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Nav } from "./Nav";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export const Payment = () => 
{
    const navigate = useNavigate();
  return (
    <>
    <Nav />
    <div>
        <br />
        <h2>Payment</h2>
        <strong>Credit or Debit Card</strong>
        <br/> <br/>
        <div className="paymentfields">        
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginLeft: "35%"
                }}
                >
                <TextField fullWidth label="Enter Full Name : " id="fullWidth" />
                <br /><br />
                <TextField fullWidth label="Enter Cart Number : " id="fullWidth" /> 
                <br />      
            </Box>
            
                <div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                        marginLeft: "35.5%"
                    }}
                    >
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Expiry : " />
                    <TextField id="demo-helper-text-misaligned-no-helper" label="CVV : " />
                    </Box>
                </div>  
            <br /> <br/>
                <Button variant="outlined" 
                onClick={() =>{
                    alert("Payment Successful..")
                 navigate("/")}}
                >
                    Checkout
                </Button>  
        </div>
    </div>
    </>
  );
}
