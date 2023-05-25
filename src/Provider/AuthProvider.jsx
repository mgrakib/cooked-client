import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext({});
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/friebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // auth 
    const auth = getAuth(app);
    // sing up user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const updataUser = (fullName, userPhoto) => {
        return updateProfile(auth.currentUser, {
			displayName: fullName,
			photoURL: userPhoto,
		});
    }

    // sing in 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // userLogout
    const logOut = () => {
        return signOut(auth);
    }

    // google login 
    const googleProvider = new GoogleAuthProvider();
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // gitHub login
    const gitHubProvider = new GithubAuthProvider();
    const gitHubSingIn = () => {
       return signInWithPopup(auth, gitHubProvider);
    }

    // hero img data load 
    const [heroImg, setHeroImg] = useState([]);
    useEffect(() => {
        fetch(`https://ten-assignment-server-mgrakib.vercel.app/hero-img`)
			.then(res => res.json())
			.then(data => setHeroImg(data));
    }, [])

    // all chefs data load 
    const [allChefsData, setAllChefsData] = useState([])
    useEffect(() => {
        fetch(`https://ten-assignment-server-mgrakib.vercel.app/all-chefs`)
			.then(res => res.json())
			.then(data => setAllChefsData(data.chefs));
    }, [])
    
    //user feedback 
    const [userFeedback, setUserFeedback] = useState([]);
    useEffect(() => {
        fetch(`https://ten-assignment-server-mgrakib.vercel.app/user-feedback`)
			.then(res => res.json())
			.then(data => setUserFeedback(data));
    },[])



    // recipies data load 
    const [recipsData, setRecipsData] = useState([]);
    useEffect(() => {
        fetch(`https://ten-assignment-server-mgrakib.vercel.app/chef-recipes`)
			.then(res => res.json())
			.then(data => setRecipsData(data));
    }, [])

    const authInfo = {
		heroImg,
		createUser,
		updataUser,
		logIn,
        user,
        loading,
		logOut,
		googleSingIn,
		gitHubSingIn,
        allChefsData,
        userFeedback,
		recipsData,
	};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;