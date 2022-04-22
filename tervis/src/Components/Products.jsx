import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import '../Css/Products.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';




export const Products = () =>
{
    const [data,setData] = useState([])  
    const [drop,setDrop] = useState('All Products');    
    const [sortdataname,setSortdataname] = useState("Featured");    
    const [sdata,setSdata] = useState([]);
    const [cart,setCart] = useState({});
    const navigate = useNavigate();    
    
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-;
    const fetchData = () =>
    {
        fetch('http://localhost:8000/products')
        .then( (res) => res.json())
        .then( (res) =>
        {
            setData(res);
            setSdata(res);
            // setSortdata(res);
        })
        .catch( (err) => console.log(err))
    }
    useEffect(
        ()=>
        {
            fetchData()
        },[]
    );

    // console.log(data);
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-;
    
    const handleChange = (event) => {
        const udata = sdata.filter((e) =>
        {
            setDrop(event.target.value);
            
            if(event.target.value == "All Products")
            {                
                setSortdataname("Featured")
                return e.category;
            }
            else
            {
                setSortdataname("Featured")
                return e.category == event.target.value.toLowerCase();
            }            
        })        
        setData(udata);
        // setSortdata(udata);        
    };


    const handleChangesort = (e) => {
        setSortdataname(e.target.value);
        //console.log(sortdata);        
        console.log(data);        
         if(sortdataname == "Low to High")
         {
            data.sort((a,b) =>
            {
                return b.price - a.price;
            })   
         }
         else if(sortdataname == "High to Low")
         {
            data.sort((a,b) =>
            {
                return a.price - b.price;                
            })   
         }
         else if(sortdataname == "Bestseller")
         {
            data.sort((a,b) =>
            {
                return a.title - b.title;
            })   
         }
    }; 
    
    const addcart = (product) =>
    {   
        var cartdata = JSON.parse(localStorage.getItem("terviscart") || "[]");
        cartdata.push(product);
        localStorage.setItem("terviscart",JSON.stringify(cartdata));

        navigate("/cart");
    }
    

    return(<>
        <Nav />               
        <h2 className="productname">Products</h2> 
        <div className="pnav">        
            <div>                
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                    <Select
                    value={""}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>{drop}</em>
                    </MenuItem>
                    <MenuItem value={"All Products"}>All Products</MenuItem>
                    <MenuItem value={"Jewelery"}>Jewelery</MenuItem>
                    <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    <MenuItem value={"Women's Clothing"}>Women's</MenuItem>
                    <MenuItem value={"Men's Clothing"}>Mens's</MenuItem>
                    </Select>                
                </FormControl>                
            </div>
            <div>

            </div>
            <div className="sortproducts">
            <h4>Sort By : </h4>
            <FormControl sx={{ m: 1, minWidth: 220 }}>            
                    <Select
                        value={""}
                        onChange={handleChangesort}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>{sortdataname}</em>
                    </MenuItem>
                    <MenuItem value={"Featured"}>Featured</MenuItem>
                    <MenuItem value={"Bestseller"}>Bestseller</MenuItem>
                    <MenuItem value={"A to Z"}>Name A to Z</MenuItem>
                    <MenuItem value={"Z to A"}>Name Z to A</MenuItem>
                    <MenuItem value={"Low to High"}>Price Low to High</MenuItem>
                    <MenuItem value={"Hight to Low"}>Price High to Low</MenuItem>
                    </Select>                
                </FormControl>                
            </div>
        </div>
        <div className='item-container'>
            {data.map((product) => (
            <div className='card'>
                <img src={product.image} alt='' />
                <h3>{product.title}</h3>
                <p><strong>{"Rs  " + product.price}</strong></p>
                <Button variant="outlined" size="small" onClick={() => addcart(product)}>
                Add To Cart
                </Button>
            </div>          
            ))}
        </div>
    </>);
}