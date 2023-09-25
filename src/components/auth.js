import React, { useState } from 'react'
import {auth, googleProvider, fbProvider} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(auth?.currentUser?.email)
    // console.log(auth?.currentUser?.photoURL)

    const signIn = async() =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }        
    }

    const signInGoogle = async() =>{
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(err){
            console.log(err)
        }
    }
    // const signInFB = async() =>{
    //     try{
    //         await signInWithPopup(auth, fbProvider)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    const logout = async() => {
        try{
            await signOut(auth)
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
        <button className='bg-[#3f4cd7] text-white px-5 rounded-lg py-2 mx-2' onClick={signIn}>Sign In</button>
        <button className='bg-[#3f4cd7] text-white px-5 rounded-lg py-2 mx-2' onClick={signInGoogle}>Google In</button>
        <button className='bg-[#3f4cd7] text-white px-5 rounded-lg py-2 mx-2' onClick={logout}>Log Out</button>
        {/* <button className='bg-[#3f4cd7] text-white px-5 rounded-lg py-2 mx-2' onClick={signInFB}>Facbook In</button> */}
    </div>
  )
}
