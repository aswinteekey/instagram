import React,{useContext,useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import FirebaseContext from "../context/firebase"

const Login = () => {
 // const navigate=useNavigate();
 // const {firebase} =useContext(FirebaseContext)

 // const [emailAddress, setEmailAddress] = useState();
  //const [password, setPassword] = useState();
  //const [err, setError] = useState();

 // const isInvalid = password===''||emailAddress==='';
  //const handleLogin=()=>{};

  useEffect(() => {
    document.title="Login-Instagram"}, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
      <img src="/images/iphone-with-profile.jpg" alt="ipjone with instagran app"/>
      </div>
      <div className="flex flex-col w-2/5">form here</div>
    </div>
  )
}

export default Login;