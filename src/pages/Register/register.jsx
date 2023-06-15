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


        alert("Account has created succesfully")
        window.location.replace("/")

    }




    return (

        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">WanderStay</span>
                <span className="title">Sign Up
                </span>
                <form onSubmit={resisterUser}>
                    <input type="text" placeholder="Username" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="Contact" placeholder="Contact" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
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