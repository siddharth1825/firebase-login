import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext"
import { useState } from 'react'


const Reset = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const {reset} = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reset(email);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Reset password</h1>
          {error && <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-3" role="alert">
            <p className="font-bold">Be Warned</p>
            <p>{error}</p>
          </div>}
          <input onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />



          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
          >Send reset email</button>



        </form>


      </div>
    </div>
  )
}

export default Reset