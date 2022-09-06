import { useState } from 'react'

import {http} from '../services/http'

import Cookies from 'universal-cookie'
import CryptoJs from 'crypto-js'
function Login() {



  const descifrar = (txt:string) => {
    var bytes =CryptoJs.AES.decrypt(txt, "8021947cbba")
    var txtDes = bytes.toString(CryptoJs.enc.Utf8)
    return txtDes
  }

  const cookies = new Cookies();
  const tokenCifrado = cookies.get("token");


  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tokenState, setTokenState] = useState('')

  
const handlePerfil = async(tk:any) => {
  if(tk !==undefined){
    const t = descifrar(tk)
    setTokenState(t);
  } else{
    alert('no esta logueado')
  }


  try {
    const response = await fetch(`${http}me`, {
      method: 'GET',
      headers: {
        token: tokenState
      }
    });
  
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }


}




  return (
    <div className="App">
      <label > User </label>
      <input onChange={(e) => setUserName(e.target.value)}/>
      <label > Email </label>
      <input onChange={(e) => setEmail(e.target.value)}/>
      <label > Password </label>
      <input onChange={(e) => setPassword(e.target.value)}/>

      <button onClick={() => handlePerfil(tokenCifrado)}>VER</button>

{tokenState}
    </div>
  )
}

export default Login
