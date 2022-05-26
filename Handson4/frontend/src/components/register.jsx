import React from 'react';
import {useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Register(props) {
    const navigate = useNavigate();
    const [state, setState] = useState({
        Name: "",
        Email: "",
        PhoneNo: "",
        Password: "",
      })
    
      const handleClick = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
      }
      // console.log(state)
      const callApi = () => {
        axios.post("http://localhost:8080/auth/signup", state).then((response) => {
            console.log("Success")
            setState({
              Name: "",
              Email: "",
              PhoneNo: "",
              Password: "",
            })
          },
          navigate("/login")
          )
          .catch((err) => {
            console.log(err)
          })
          
      }
    return (
        <div className="Register-box">
            <div className="row">
                <div className="col-md-6 offset-3 box">
                    <h1>Registration Page</h1>
                    <form method='POST'>
                        <div className="mb-3">
                            <label  className="form-label">Name </label>
                            <input type="text" className="form-control" id="Name" name="Name" onChange={handleClick}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Mobile No</label>
                            <input type="number" className="form-control" id="PhoneNo" name="PhoneNo" onChange={handleClick}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email </label>
                            <input type="email" className="form-control" id="Email" name="Email" onChange={handleClick}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" name="Password" onChange={handleClick}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={callApi}>Register</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Register;