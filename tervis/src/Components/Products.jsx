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
    const [sortdata,setSortdata] = useState("Featured");    
    const [sdata,setSdata] = useState([]);
    const [count,setCount] = useState(0);
    const [searchdata,setSearchdata] = useState("")
    const navigate = useNavigate();    


    const searchd = (ele) =>
    {
        setSearchdata(ele);
        console.log(searchdata)
    }

    
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-;
    const fetchData = () =>
    {
        fetch('https://srngjson.herokuapp.com/products')
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
                return e.category;
            }
            else
            {
                return e.category == event.target.value.toLowerCase();
            }            
        })        
        setData(udata);
        setSortdata("Featured")
        // setSortdata(udata);        
    };


    const handleChangesort = (e) => {
        setSortdata(e.target.value);
        console.log(sortdata);        
        // console.log(data);        
        //  if(sortdataname == "Low to High")
        //  {
        //     data.sort((a,b) =>
        //     {
        //         return b.price - a.price;
        //     })   
        //  }
        //  else if(sortdataname == "High to Low")
        //  {
        //     data.sort((a,b) =>
        //     {
        //         return a.price - b.price;                
        //     })   
        //  }
        //  else if(sortdataname == "Bestseller")
        //  {
        //     data.sort((a,b) =>
        //     {
        //         return a.title - b.title;
        //     })   
        //  }

    }; 
    
    const addcart = (product) =>
    {   
        var cartdata = JSON.parse(localStorage.getItem("terviscart") || "[]");        
        var c = 0;
        for(var i=0;i<cartdata.length;i++)
        {
            if(product.id == cartdata[i].id)
            {
                alert("Product is already in cart");
                c++;
            }
        }
        if(c == 0)
        {
            cartdata.push(product);
            localStorage.setItem("terviscart",JSON.stringify(cartdata));
            alert("Product Added in Cart...")
        }
              
        // navigate("/cart");
    }
    

    return(<>
        <Nav searchd={searchd} />               
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
                        <MenuItem value={"Tervis"}>Best of Tervis</MenuItem>
                        <MenuItem value={"Jewelery"}>Jewelery</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                        <MenuItem value={"Women's"}>Women's</MenuItem>
                        <MenuItem value={"Men's"}>Mens's</MenuItem>
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
                        <em>{sortdata}</em>
                    </MenuItem>                                    
                        <MenuItem value={"Low_to_High"}>Price Low to High</MenuItem>
                        <MenuItem value={"Hight_to_Low"}>Price High to Low</MenuItem>
                    </Select>                
                </FormControl>                
            </div>
        </div>
        <div className='item-container'>
            {data.filter((ele) => {
                if(searchdata == "" || searchdata== undefined)
                {
                    return data;
                }
                else
                {
                    return ele.title.toLowerCase().includes(searchdata.toLowerCase());
                }
            }).sort((a,b) => 
            {
                if(sortdata == "Low_to_High")
                {
                    return a.price - b.price;
                }
                else if(sortdata == "Hight_to_Low")
                {
                    return b.price - a.price;
                }
            }).map((product) => (
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