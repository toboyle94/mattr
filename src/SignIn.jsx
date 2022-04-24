import React from 'react'
import { Button } from "@mui/material"
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from './firebaseConstants'


export const SignIn = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        try {            
            signInWithPopup(auth, provider)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Button variant="contained" onClick={googleSignIn}>Sign In</Button>
    )
}

export const SignOut = () => {
    return (
        <Button variant="contained" onClick={() => signOut(auth)}>Sign Out</Button>
    )
}