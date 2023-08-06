
import { useRef, useState, useEffect } from 'react';
import { auth ,db } from "../config/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {doc ,collection,addDoc,setDoc} from "firebase/firestore";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  //const [gender,setgender]=useState()

 const handlerole=(e)=>{
    setRole(e.target.value)
  }

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      

      // Create the user in Firebase Authentication
      const {user} = await createUserWithEmailAndPassword(auth,email,password);
      // Set the user's role in Cloud Firestore
      console.log("users uid",user.uid);
      const userRef = doc(db, 'users', user.uid);
      console.log("user ref",userRef);
      await setDoc(userRef, {
        email: user.email,
        role: role
      });

      console.log('User created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (<> 
  <h1>Sign In</h1>
    <form onSubmit={handleSignup}>
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <div>
          <label>Role:</label>
          <input type="radio" name="user" value="2001" onChange={handlerole} />
          user
          <input type="radio" name="admin" value="5150" onChange={handlerole}/>
          admin
        </div>
      <button type="submit">Signup</button>
    </form>
    </>
  );
}
export default Register;