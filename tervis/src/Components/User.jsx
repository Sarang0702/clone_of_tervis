import { useNavigate } from 'react-router-dom';
import '../Css/Nav.css';
import { Nav } from './Nav';

export const User = () =>
{
    const userlogin =  JSON.parse(localStorage.getItem("tervisuserlogin"))
    const navigate = useNavigate()

    const logout = () =>
    {
        localStorage.removeItem("tervisuserlogin");
        alert("Logout Successfull")
        navigate("/")        
    }

    return(
        <>
          < Nav />
            <h3>User Details</h3>
            <div>
                <h4>Name : {userlogin[0].name}</h4>
                <h4>Email : {userlogin[0].uname}</h4>
                <h4>Mobile : {userlogin[0].mobile}</h4>
            </div><br />
            <button type="submit" onClick={logout} >logout</button>
            
        </>
    )
}