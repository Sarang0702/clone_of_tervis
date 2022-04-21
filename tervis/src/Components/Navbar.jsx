import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Navbar.css'

export const Navbar = () =>
{    
    const navigate = useNavigate();
    

    const NavigateProducts = () =>
    {        
        navigate("/products");
    }
    
    return(
        <div className='mnavbar'>
            <div className='navbar'>
                <span className='id01' onClick={NavigateProducts}>Drinkware</span>
                <span className='id01' onClick={NavigateProducts}>Collections</span>
                <span className='id01' onClick={NavigateProducts}>Fan Shop</span>
                <span className='id01' onClick={NavigateProducts}>Customize</span>
                <span className='id01' onClick={NavigateProducts}>Bundle & Sets</span>
                <span className='id01' onClick={NavigateProducts}>Sustainability</span>
            </div>                        
        </div>
    );
}