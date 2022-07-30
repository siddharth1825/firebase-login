import React, { useState } from 'react'
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const { signIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            navigate("/home")
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e)=> {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        } catch(err){
            setError(err.message)
        }
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log in</h1>
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
                        placeholder="password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                    >Log in</button>
                    <hr />
                    <GoogleButton className='mt-4' onClick={handleGoogleSignIn}/>

                </form>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <Link to="/signup" className="no-underline border-b border-blue text-blue" href="../login/">
                        Sign up
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default Login