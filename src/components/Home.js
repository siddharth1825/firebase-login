import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
    const { user,logOut } = useUserAuth();
    const handleLogOut = async ()=>{
        try{
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <>
    <div className='flex flex-col h-screen justify-center items-center text-center'>Welcome {user && user.email}
    <button className='rounded p-4 bg-black text-white' onClick={handleLogOut}>Log out</button>
    </div>
    
    </>
  )
}

export default Home