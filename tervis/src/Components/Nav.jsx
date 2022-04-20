import React from 'react';
import '../Css/Nav.css'

export const Nav = () =>
{
    return(
        <div className="mainnav">   
            <div >
                <span className='login'>
                    
                </span>
            </div>         
            <div className='logoimg'>
                <img  src="https://www.tervis.com/on/demandware.static/-/Sites/default/dw4eec0c99/images/tervis-logo.svg" />                
            </div>
            <div className='search' >
                <input type="text" placeholder="Search" />
            </div>
            <div className='cartimg'>
                <img  src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png" />                
            </div>

        </div>
    );
}