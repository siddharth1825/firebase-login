import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"

const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("")
    const {signUp} = useUserAuth();
    const navigate =  useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signUp(email,password);
            navigate("/")
        } catch (err){
            setError(err.message);
        }
    };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    {error && <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-3" role="alert">
                    <p className="font-bold">Be Warned</p>
                    <p>{error}</p>
                    </div>}
                    <input onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link to="/" className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
  )
}

export default Signup