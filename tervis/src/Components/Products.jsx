import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import '../Css/Products.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export const Products = () =>
{
    const [data,setData] = useState([])  
    const [age, setAge] = useState('');
    const [sdata,setSdata] = useState([]);
    
    // setSdata(data);
    

    const handleChange = (event) => {
        //setAge(event.target.value); 
        
        // setSdata(data) ;        

        const udata = sdata.filter((e) =>
        {
            return e.category == event.target.value;
        })

        setData(udata);
    };

    // console.log(sdata)
    
    const fetchData = () =>
    {
        fetch('http://localhost:8000/products')
        .then( (res) => res.json())
        .then( (res) =>
        {
            setData(res);
            setSdata(res)
        })
        .catch( (err) => console.log(err))
    }
    useEffect(
        ()=>
        {
            fetchData()
        },[]
    );

    console.log(data);

    return(<>
        <Nav />                
        <div className="pnav">
            <h1>Products</h1>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>Brand's</em>
                    </MenuItem>
                    <MenuItem value={"jewelery"}>Jewelery</MenuItem>
                    <MenuItem value={"electronics"}>Electronics</MenuItem>
                    <MenuItem value={"women's clothing"}>Women's</MenuItem>
                    <MenuItem value={"men's clothing"}>Mens's</MenuItem>
                    </Select>                
                </FormControl>
                
            </div>
        </div>
        <div className='item-container'>
            {data.map((product) => (
            <div className='card'>
                <img src={product.image} alt='' />
                <h3>{product.title}</h3>
                <p>{"Rs  " + product.price}</p>
            </div>          
            ))}
        </div>
    </>);
}