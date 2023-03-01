import React from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form (props) {
    const [userData, setUserData] = React.useState({      username: '', 
    password: '' , password2:''
    });
    const [signin, setSignin] = React.useState(true)
    const [errors, setErrors] = React.useState({
        username: '', 
        password: '',
        password2:''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            },signin)
        )
    }

    const handleSubmitSignup = (e) => {
        e.preventDefault();
       if(errors.password==null && errors.username==null && errors.password2==null){
       
        props.signup(userData)
        setSignin(true)}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return(
      <div className="container">
         {signin && 
            <form onSubmit={handleSubmit}>
                <label className="input texto">Username:</label>
                <input className="input"
                type='text'
                name='username'
                value={userData.username}
                onChange={handleInputChange}
                />
                <p className="texto">{errors.username}</p>

                <label className="input texto">Password:</label>
                <input className="input"
                type='password'
                name='password'
                value={userData.password}
                onChange={handleInputChange}
                />
                <p className='texto'>{errors.password}</p>

                <button type="submit">Login</button>
                <button onClick={()=>{setSignin(false)}}>Sign Up</button>
            </form>}
            {!signin && 
            <form onSubmit={handleSubmitSignup}>
            <label className="input texto">New User:</label>
            <input className="input"
            type='text'
            name='username'
            value={userData.username}
            onChange={handleInputChange}
            />
            <p className="texto">{errors.username}</p>

            <label className="input texto">New Password:</label>
            <input className="input"
            type='password'
            name='password'
            value={userData.password}
            onChange={handleInputChange}
            />
            <p className='texto'>{errors.password}</p>
            <label className="input texto">Repeat Password:</label>
            <input className="input"
            type='password'
            name='password2'
            onChange={handleInputChange}
            />

 <p className='texto'>{errors.password2}</p>
            <button type="submit">Sign up</button>
        </form>}
        </div>
    )
}

