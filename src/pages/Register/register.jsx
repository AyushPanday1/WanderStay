import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'


function Resister() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    function validateEmail(email) {
        let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        return (typeof (email) != "string" || regex.test(email)) ? true : false
    }

    function validPassword(password) {
        let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        return regex.test(password);
    }

    function isValidMobile(phone) {
        let regex = /^[6-9][0-9]{9}$/;
        return regex.test(phone)
    }


    const resisterUser = (e) => {
        e.preventDefault();

        if (String(phone).length !== 10 || !isValidMobile(phone)) { return alert("Please enter valid phone number && start from 6-9 !") }
        if (!validateEmail(email)) { return alert("Please enter valid Email !") }


        const config = {
            headers: {
                'x-content-type-options': 'multipart/form-data'
            },
        };


        const options = {
            name: name,
            email: email,
            phone: phone,
            password: password,

        }
        axios.post("http://localhost:8080/register", options, config).then((res) => {
            alert("Account has created succesfully")
            window.location.replace("/")
        }).catch((err) => alert(err.message))
    }

   


    return (
        // <div className='main-div1'>
        //     <div className="container h-100">

        //         <div className="d-flex justify-content-center h-100">

        //             <div className="user_card1">

        //                 <div className="d-flex justify-content-center">

        //                     <div className="d-flex justify-content-center form_container1">
        //                         <form onSubmit={resisterUser}>

        //                           <h2>Sign Up</h2>

        //                             <div className="resister-form">

        //                                 <input type="text" className='inputs' placeholder='Username' required value={name} onChange={(e) => setName(e.target.value)} />
        //                             </div>
        //                             <div className="resister-form">

        //                                 <input type="email" className='inputs' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                             <div className="resister-form">

        //                                 <input type="number" className='inputs' placeholder='Contact' required value={phone} onChange={(e) => setPhone(e.target.value)} />
        //                             </div>


        //                             <div className="resister-form">

        //                                 <input className='inputs' type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        //                             </div>
        //                             <div className="resister-form">

        //                                 <input className='inputs' type="text" placeholder='Country' value={street} onChange={(e) => setStreet(e.target.value)} />
        //                             </div>


        //                             <div className="resister-form">

        //                                 <input type="password" className='inputs' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>



        //                             <button type="submit" id='btn' className="btn btn-primary">Create Account</button>
        //                             <div className='d-flex justify-content-center links ele'>Already have an account?</div><a id='logins' href='/'>Login</a>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">WanderStay</span>
          <span className="title">Sign Up
          </span>
          <form onSubmit={resisterUser}>
            <input  type="text" placeholder="Username" required value={name} onChange={(e) => setName(e.target.value)}/>
            <input  type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input  type="Contact" placeholder="Contact" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
            
            <input  type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign up</button>
            
          </form>
          <p>
            You do have an account? <a id='logins' href='/'>Login</a>
          </p>
        </div>
      </div>
    )
}

export default Resister