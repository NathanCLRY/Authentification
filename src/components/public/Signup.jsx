import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';


const Signup = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("")

    //Enregistre les changement sur le champ email
    const handleChangeEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    //Enregistre les changement sur le champ password
    const handleChangePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    
    const inscription = async() => {
        console.log(email);
        console.log(password);
        await createUserWithEmailAndPassword(auth, email, password);
    }
    return (
    <div>
        <div>
        <h1>Sign up</h1>
        <label htmlFor="email">Email : </label>
        <input type="text" name='email' onChange={handleChangeEmail} />
        <br />
        <label htmlFor="password">Mot-de-passe : </label>
        <input type="password" name="password" id="" onChange={handleChangePassword} />
        <br />
        <button onClick={inscription}>S'inscrire</button>
    </div>
    </div>
    )
}

export default Signup
