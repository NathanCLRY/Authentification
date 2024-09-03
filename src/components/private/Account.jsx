import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

const Account = () => {
    const logout = () => {
        signOut(auth)
    }
  return (
    <div>
        <h1>Compte</h1>
        <button onClick={logout}>Déconnecter</button>
    </div>
  )
}

export default Account
