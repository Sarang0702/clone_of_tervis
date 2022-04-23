import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Nav.css'
import { Navbar } from './Navbar';
import { useEffect, useState } from "react";;



export const Nav = (props) =>
{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
         

    const NavigateHome = () =>
    {        
        navigate("/");
    } 



    
    return(
        <>
        <div className="mainnav">   
            <div >
                <span className='login'>
                    
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