import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/public/Login'
import Signup from './components/public/Signup'
import Account from './components/private/Account'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


function App() {
  const [count, setCount] = useState(0)
  const [connect, setConnect] = useState(false);
  useEffect(() => {
    console.log("charger");
    onAuthStateChanged(auth, (user) => {
      if(user){
        setConnect(true);
      }else{
        setConnect(false);
      }
    })
  },[]);
  return (
    <>
    {connect ? <Account /> : <Login />}
      {/* <Signup /> */}
    </>
  )
}

export default App
