import './signin.css';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
function Login({ setShowModleLoginPage,setLogedin }) {
    const navigate = useNavigate();
    localStorage.setItem("logedin",false);
    const [user, setFormData]=useState({
        username: '',
        password: '',
    })
function handleChange(e){
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...user,[name]:value});
}
function handleSubmit(){
    localStorage.setItem("token",'123');
    localStorage.setItem("logedin",true);
    // localStorage.setItem("user_details",JSON.stringify(user));
     navigate('/exampalan')
}

// function handleSubmit(){
    
//     fetch("",{
//         method: 'POST',
//         body: JSON.stringify(user),
//         headers:{
//             "content-type": "application/json",
//         },

//     })
//     .then(response =>{
//         if (response.ok) {
//             return response.json();

//         } else if (response.status===400){
//             alert("Invalid login credentials");
//         }
//     })
//     .then((data)=>{
//         const {user,accessToken} = data;
//         // localStorage.setItem("token",data.accessToken);
//         localStorage.setItem("token",'123');
//         localStorage.setItem("tokenExpired",data.accessToken);
//         localStorage.setItem("user_details",JSON.stringify(user));
//         navigate('/exampanal')
        
//     })
// }
    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <h2 className=" ">Login Details</h2>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Username
                    </label>
                    <input type="email" id="username" className="form-control"
                        placeholder="username" name="username" onChange={handleChange} value={user.username} />

                </div>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Password
                    </label>
                    <input type="password" placeholder="password" 
                    name="password" id="password" onChange={handleChange} value={user.password} className="form-control" />


                </div>

                <div >
                    <button
                        onClick={() => {
                            setShowModleLoginPage(false);
                        }}>
                        Cancel
                    </button>
                    {user.username && user.password?
                    (<button  onClick={handleSubmit}>Continue</button>) : (<button type="submit" disabled>Continue</button>)}
                </div>
            </div>

        </div>
    );
}
export default Login;