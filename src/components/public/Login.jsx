import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("")

    //Enregistre les changement sur le champ email
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    //Enregistre les changement sur le champ password
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const connexion = async() => {
        
        await signInWithEmailAndPassword(auth, email, password);
    }

  return (
    <div>
        <h1>Login</h1>
        <label htmlFor="email">Email : </label>
        <input type="text" name='email' onChange={handleChangeEmail} />
        <br />
        <label htmlFor="password">Mot-de-passe : </label>
        <input type="password" name="password" id="" onChange={handleChangePassword} />
        <br />
        <button onClick={connexion}>Connexion</button>
    </div>
  )
}

export default Login
