import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Nav.css'
import { Navbar } from './Navbar';
import { useEffect, useState } from "react";
import LoginIcon from '@mui/icons-material/Login';



export const Nav = (props) =>
{
    const navigate = useNavigate();  

    const userlogin =  JSON.parse(localStorage.getItem("tervisuserlogin"))
   
    var logind = "Login";

    if(userlogin)
    {
        // console.log('Exists');
        logind = userlogin[0].name
    }
    else
    {
        // console.log('Not found');        
        logind = "Login" ;       
    }    

    const NavigateHome = () =>
    {        
        navigate("/");
    } 


    const user = () =>
    {
        if(userlogin == null)
        {
            navigate("/login");
        }
        else
        {     
            console.log(userlogin[0].name)       
            navigate("/user");
        }
    }



    
    return(
        <>
        <div className="mainnav">   
            <div >         
                <span className='loginicon'>
                    <br /><strong onClick={user} >{logind}</strong>
                    {/* <LoginIcon /> */}
                </span>
            </div>         
            <div className='logoimg' onClick={NavigateHome}>
                <img   src="https://www.tervis.com/on/demandware.static/-/Sites/default/dw4eec0c99/images/tervis-logo.svg" />                
            </div>
            <div className='search' >
                <input type="text" placeholder="Search" onChange={(e) => props.searchd(e.target.value)} />
                <br />
               
            </div>
            <div className='cartimg'>
                <img onClick={() => navigate("/cart")} src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png" />                
            </div>
        </div>
        <Navbar />
        </>
    );
}