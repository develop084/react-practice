import React,{useContext} from 'react'
import { MyContext } from '../App'

function Login() {
 const {name} = useContext(MyContext);

  return (

    <div>{name}</div>
  )
}

export default Login