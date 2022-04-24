import { useState } from "react";
import "../Css/Signup.css";
import { Nav } from './Nav';
import { useNavigate } from 'react-router-dom';


export const Signup = () =>
{
    const [uname,setUame]=useState("")
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();    
    
    const Signupuser = () =>
    {
        var user = {
            "name":name,
            "uname":uname,
            "password":password
        }

        var userdata = JSON.parse(localStorage.getItem("tervisuser") || "[]");
        var c = 0;
        for(var i=0;i<userdata.length;i++)
        {
            if(user.uname == userdata[i].uname)
            {
                alert("User is already Registered");
                c++;
            }
        }
        if(c == 0)
        {
            userdata.push(user);
            localStorage.setItem("tervisuser",JSON.stringify(userdata));
            alert("Signup Successfull..")
            navigate("/login");
        }
        console.log(uname,password);    


    }    

    return(
        <>
        <Nav />
        <div>
        <form onSubmit={Signupuser}>
            <h4>User Signup</h4>
            <input type={"text"} placeholder="Full Name" onChange={(e) => {setName(e.target.value)}} required />
            <br /><br />
            <input type={"email"} onChange={(e) => {setUame(e.target.value)}} placeholder="Email" required />
            <br /><br />
            <input type={"password"} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" required/>
            <br /><br />
            <input type={"tel"} placeholder="Mobile Number" required />
            <br /><br />
            <button type="submit" >Signup</button>
        </form>
        <br />
        <strong onClick={() => navigate("/login")}>Login</strong>
        </div>      
            
        </>
    )
    
}

