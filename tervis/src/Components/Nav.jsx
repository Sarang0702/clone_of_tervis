import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Nav.css'
import { Navbar } from './Navbar';


export const Nav = () =>
{
    const navigate = useNavigate();
    

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
                <input type="text" placeholder="Search" />
            </div>
            <div className='cartimg'>
                <img  src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png" />                
            </div>
        </div>
        <Navbar />
        </>
    );
}