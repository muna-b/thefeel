import { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import classNames from './Login.module.css'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [token, setToken] = useState("")
    const onChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')
        const response = await fetch(`${process.env.REACT_APP_API_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }, [])
        const data = await response.json()
        if (data.error){
            emailError.innerHtml = data.message
            passwordError.innerHtml = data.message
            console.log(data.message);
        } 
        // else {
            //     window.location = ('/')
            // }
            // setToken(data.token)
        }
        const history = useHistory()
        const redirect = path => {
            history.push(path)
        }
    
    
	// if(token){
	// 	return <Redirect to = "/"/>
	// }

    return (
        <main className={classNames.mainContainer}>
            <div className={classNames.container}>
                <h4 className={classNames.title}>Identifiez vous !</h4>
                <form onSubmit={onSubmitHandler}>
                    <div className={classNames.inputDiv}>
                        <input 
                            type="email"
                            placeholder="identifiant"
                            name="email"
                            value={email}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                    <div className="email error"></div>
                    <div className={classNames.inputDiv}>
                        <input 
                            type="password"
                            placeholder="mot de passe"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                        />
                    </div>
                    <div className="password error"></div>
                    <div>
                        <button type="submit" className={classNames.button}>Se connecter</button>
                        <p onClick={ () => redirect ("/registration")}>S'abonner</p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
