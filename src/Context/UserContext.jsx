import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, ProviderId, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthProvider = createContext()

const auth = getAuth(app)
const googleAuth = new GoogleAuthProvider()
const githubAuth = new GithubAuthProvider()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    //sign-Up
    const signUpAuth = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign-In
    const signInAuth = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //email-varify
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser,)
    }
    //update-profile
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //log-out
    const logOutAuth = () => {
        setLoading(true)
        return signOut(auth)
    } 
    //google Auth provider
    const google= () =>{
        return signInWithPopup(auth,googleAuth)
    }
    // github auth provider
    const github = () =>{
        return signInWithPopup(auth,githubAuth)
    }
    //auth-observer
    useEffect(() => {
        const subcription = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser)
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => subcription();
    }, [])
   
    const userInfo = { user, signUpAuth, signInAuth, userProfileUpdate, logOutAuth, loading, varifyEmail,google,github }
    return (
        <div>
            <AuthProvider.Provider value={userInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default UserContext;