// import { useContext } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { AuthContext } from "../Context/AuthProvider";
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { sendEmailVerification } from "firebase/auth";

// import auth from "../../Firebase/Firebase.config";
// import { AuthContext } from './AuthProvider';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // from.reset('')
        setError('')
        // console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
        }
        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            setError('Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.');

        }
        else {
            createUser(email, password)
                .then((res) => {
                    console.log('User registered successfully:', res.user);

                    sendEmailVerification(res.user)
                    .then(() =>{
                        alert('please check your email')
                    })

                    .catch(()=>{
                        // ""
                    })

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You login successful",
                        showConfirmButton: false,
                        timer: 1000
                        
                      });
                      navigate('/')
                })
                .catch((err) => {
                    console.error('Error during registration:', err.message);  
                    setError(err.message)                  
                });
        }
    };

    const googleLogin = () => {
        signInWithGoogle()
            .then((res => {
                console.log(res.user)
            }))
            .catch((err => {
                console.log(err.message)
            }))
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center"><button className="btn" onClick={googleLogin}>Sign with Google</button></p>
                        <p className="text-center">Already Register?<Link className="text-red-500" to={'/login'}>Login</Link> here</p>
                        <p className="text-red-700 text-center mt-2 mb-2">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;