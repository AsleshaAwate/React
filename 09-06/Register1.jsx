import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register1 = () => {
    const router=useNavigate();
    const[userData, setUserData]=useState({
        name:"",
        email:"",
        password:"",
    });

    const[errors,setErrors]=useState([]);
    const[disable,setDisable]=useState(true);

    console.log(userData,"userData");
    function handleChange(event){
        setUserData({ ...userData, [event.target.name]: event.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        try {
            if(userData.name && userData.email && userData.password){
                const response={data:{success:true, message:"Register Successful."}};
                if(response.data.success){
                    setUserData({
                        name:"",
                        email:"",
                        password:"",
                    });
                    router("/login1");
                    toast.success(response.data.message);
                }
            }else{
                toast.error("All fields are mandatory.");
            }
        } catch (error) {
            // error =  { data : { success : false, message : "All fields are mandatory."}}
            // toast.error(error.response.data.message);
        }
    }

    useEffect(()=>{
        const errorsArray={};
        if(!userData.name){
            errorsArray.name1="Name is required.";
        }
        if(!userData.email){
            errorsArray.email1="Email is required.";
        }
        if(!userData.password){
            errorsArray.password1="Password is required.";
        }
        setErrors(errorsArray);
        if(Object.keys(errorsArray).length===0){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    },[userData]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>Name:</label><br/>
            <input type='text' name='name' onChange={handleChange} value={userData.name}/><br/>
            {errors.name1 && <div className="error">{errors.name1}</div>}<br/>

            <label>Email:</label><br/>
            <input type='email' name='email' onChange={handleChange} value={userData.email}/><br/>
            {errors.email1 && <div className="error">{errors.email1}</div>}<br/>

            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange} value={userData.password}/><br/>
            {errors.password1 && <div className="error">{errors.password1}</div>}<br/>
            
            <input type='submit' value="Register" disabled={disable} />
            <br/>
            {/* {errors.map((error,i)=>(
                <p key={i}>{error}*</p>
            ))} */}
        </form>
    </div>
  )
}

export default Register1;