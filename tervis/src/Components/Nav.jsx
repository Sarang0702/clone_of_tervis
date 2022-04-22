import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Nav.css'
import { Navbar } from './Navbar';
import { useEffect, useState } from "react";;



export const Nav = () =>
{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
         

    const NavigateHome = () =>
    {        
        navigate("/");
    } 


    // const fetchData = () =>
    // {
    // //     fetch('http://localhost:8000/products')
    // //     .then( (res) => res.json())
    // //     .then( (res) =>
    // //     {
    // //         setData(res);
    // //     })
    // //     .catch( (err) => console.log(err))
    // // }
    // // useEffect(
    // //     ()=>
    // //     {
    // //         fetchData()
    // //     },[]
    // // );

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
                <br />
                {/* <div className='dataresult'>
                    {data.map((value,key) =>
                    {
                        <p>
                            {value.title}
                        </p>
                    })}
                </div> */}
            </div>
            <div className='cartimg'>
                <img onClick={() => navigate("/cart")} src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png" />                
            </div>
        </div>
        <Navbar />
        </>
    );
}