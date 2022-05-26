import React from "react";
import {useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Login(){
    const navigate = useNavigate();
    const [state, setState] = useState({
        Email: "",
        Password: "",
    })
    
    const handleClick = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    const callApi = () => {
        axios.post("http://localhost:8080/auth/login", state).then((response) => {
            console.log("login Success")
            console.log("Token =>", response.data.token)
            localStorage.setItem("userInfo", JSON.stringify(response.data.token))
            
        },navigate("/display")).catch((err) => {
            console.log(err)
            console.log("Try Again")
        })
    
        setState({
        Email: "",
        Password: "",
        })
        
    }
    return(
        <div className="Login-box">
            <div className="row">
                <div className="col-md-6 offset-3  box">
                    <h1>Login Page</h1>
                    <hr /><br/>
                    <form method="POST" >
                        <div className="mb-3">
                            <label  className="form-label">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="Email" onChange={handleClick}/ >
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="Password" onChange={handleClick}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={callApi}>Log In</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login;