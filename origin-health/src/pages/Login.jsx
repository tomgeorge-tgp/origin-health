import { useRef, useState, useEffect } from 'react';
import { auth ,db } from "../config/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {doc ,collection,query, where, getDocs} from "firebase/firestore";
import useAuth from '../hooks/useAuth';


function Login (){
    const { setAuth } = useAuth();
    const test=useAuth();
    console.log(test);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();
    const userCollection=collection(db,"users");

    const [user,setUser]=useState();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [role,setRole] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
                
                await signInWithEmailAndPassword(auth, email, pwd);
                console.log('Logged in successfully');
                console.log(auth.currentUser.email);
                const userEmail=auth.currentUser.email;

                // Create a query for the user with the specified email address
                const q = query(userCollection, where('email', '==',userEmail));
                getDocs(q)
               .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                // Loop through the query results and log the data
                querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
                setUser(doc.data())
                const roles=doc.data().role;
                console.log(roles)
                setAuth({ email, pwd, roles  });  //roles
                if (roles==="2001"){
                    navigate("/dashboard", { replace: true });
                }
                else{

                    navigate("/admin-dashboard", { replace: true });
                }
      });
    } else {
      console.log('No matching documents found.');
    }
  })
  .catch((error) => {
    console.log('Error getting documents:', error);
  });
                
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    {/* <Link to="/register">Sign Up</Link> */}
                </span>
            </p>
        </section>

    )
}

export default Login
