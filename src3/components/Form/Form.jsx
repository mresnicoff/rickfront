import React, {useState, useEffect} from 'react'
import styles from "./Form.module.css"
import validate from "./../validation.js"
import { useNavigate } from "react-router-dom";


const Form = () => {
  const username = "ejemplo@gmail.com";
  const navigate = useNavigate()
  const password = "1password";
  const [access, setAccess] = useState(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [errors, setErrors] = React.useState({ username: '', password: '' });
  const handleSubmit=(e)=>{e.preventDefault()
    const arrayErrors= Object.keys(errors)
  if (arrayErrors.length==0) {login(userData)}
else{window.alert(errors.password)}}
  const handleChange=(e)=>{
      setUserData({...userData, [e.target.name]: e.target.value})
      setErrors(
        validate({
           ...userData,
           [e.target.name]: e.target.value,
        })
     );
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <div>        <label>  Nombre: </label> 
    <input className={errors.userName && styles.danger} onChange={handleChange} name="username" type="text" value={userData.username} placeholder="Ingrese su nombre"/>
    <label>  Password: </label> 
    <input onChange={handleChange} name="password" type="password" value={userData.password} placeholder="Ingrese su clave"/>
    <button type="submit">Enviar</button></div>
    </form>
  )
}

export default Form
