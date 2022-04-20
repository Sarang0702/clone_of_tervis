import React from 'react';
import '../Css/Navbar.css'

export const Navbar = () =>
{
    return(
        <div className='mnavbar'>
            <div className='navbar'>
                <span>Drinkware</span>
                <span>Collections</span>
                <span>Fan Shop</span>
                <span>Customize</span>
                <span>Bundle & Sets</span>
                <span>Sustainability</span>
            </div>                        
        </div>
    );
}