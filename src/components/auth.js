import React, { useState } from 'react'
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(auth?.currentUser?.email)

    const signIn = async() =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }
        
        
    }


  return (
    <div>
        <input placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-[#3f4cd7] text-white px-5 rounded-lg py-2 ml-2' onClick={signIn}>Sign In</button>
    </div>
  )
}
