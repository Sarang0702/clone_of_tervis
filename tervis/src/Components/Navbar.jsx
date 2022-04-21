import React from 'react';
import '../Css/Navbar.css'

export const Navbar = () =>
{
    return(
        <div className='mnavbar'>
            <div className='navbar'>
                <span className='id01'>Drinkware</span>
                <span className='id01'>Collections</span>
                <span className='id01'>Fan Shop</span>
                <span className='id01'>Customize</span>
                <span className='id01'>Bundle & Sets</span>
                <span className='id01'>Sustainability</span>
            </div>                        
        </div>
    );
}