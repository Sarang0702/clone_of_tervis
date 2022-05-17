import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import '../Css/Products.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";


import {
    getDataError,
    getDataLoading,
    getDataSuccess,
} from "../Redux/Action";



export const Products = () =>
{
    const [data,setData] = useState([])  
    const [drop,setDrop] = useState('All Products');    
    const [sortdata,setSortdata] = useState("Featured");    
    const [searchdata,setSearchdata] = useState("")


    const dispatch = useDispatch();
    
    const { todos} = useSelector((state) => ({
      todos: state.todos,
    })
    );

    console.log(todos)    
    

    useEffect(() => {
        showData()
        
    },[])

    const showData = async() => {
        try{
            dispatch(getDataLoading());
            const showdata = await fetch(`https://srngjson.herokuapp.com/products`)
            .then((d) => d.json());            
            dispatch(getDataSuccess(showdata));
            
            //console.log(data);
        } catch (err) {
            dispatch(getDataError(err));
      }
    }





    const searchd = (ele) =>
    {
        setSearchdata(ele);
        console.log(searchdata)
    }

  

    
    
    const handleChange = (event) => 
    {
        setDrop(event.target.value);        
        
        console.log(drop);
    };


    const handleChangesort = (e) => {
        setSortdata(e.target.value);
        console.log(sortdata);        
   
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
    
    console.log(data)

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
            {todos.filter((ele) => {
                if(searchdata === "" || searchdata === undefined)
                {
                    return data;
                }
                else
                {
                    return ele.title.toLowerCase().includes(searchdata.toLowerCase());
                }
            }).filter((e) =>
            {
                if(drop == "All Products")
                {
                    return e.category;
                }
                else
                 {
                     return e.category == drop.toLowerCase();
                 }

            })
            .sort((a,b) => 
            {
                if(sortdata === "Low_to_High")
                {
                    return a.price - b.price;
                }
                else if(sortdata === "Hight_to_Low")
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