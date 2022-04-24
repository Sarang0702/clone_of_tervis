import { Button } from "@mui/material";
import { useState } from "react";
import "../Css/Login.css";
import { Nav } from './Nav';
import { useNavigate } from 'react-router-dom';




export const Login = () =>
{
    const [uname,setUame]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();    


    const userdata = JSON.parse(localStorage.getItem("tervisuser"))
    console.log(userdata)

    const loginuser = () =>
    {
        var c = 0;
        for(var i=0;i<userdata.length;i++)
        {
            if(userdata[i].uname == uname && userdata[i].password == password)
            {
                alert("login Successfully");
                c++;
                navigate("/")

            }
        }  
        
        if(c == 0)
        {
            alert("Invalid Credential")
        }
    }    

    return(
        <>
        <Nav />
        <div>
            <h4>User Login</h4>
            <form onSubmit={loginuser}>
                <input type={"email"} onChange={(e) => {setUame(e.target.value)}} placeholder="Email" required/>
                <br /><br />
                <input type={"password"} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" required/>
                <br /><br />
                <button type="submit" >Login</button>
            </form>
            <br />
            <strong onClick={() => navigate("/signup")}>Signup</strong>
        </div>      
            
        </>
    )
    
}

