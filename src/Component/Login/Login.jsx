import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        // console.log('this is ok')
        // const form = new FormData(e.currentTarget);
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        signIn(email,password)
        .then((res => {
            console.log(res.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You login successful",
                showConfirmButton: false,
                timer: 1000
                
              });
              navigate('/')
            
        }))
        .catch((err => {
            console.log(err.message)
            setError(err.message)
        }))

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center">New member? <Link className="text-rose-600" to={'/register'}>Register</Link> here</p>
                        </form>
                    </div>

                        <p className="text-red-500 text-center">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;