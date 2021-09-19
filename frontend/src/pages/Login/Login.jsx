import { useState } from 'react'
import { Redirect } from 'react-router'
import classNames from './Login.module.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const onChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        setToken(data.token)
    }

    if(token){
		return <Redirect to = "/"/>
	}

    return (
        <main className={classNames.mainContainer}>
            <div className={classNames.container}>
                <label className={classNames.title}>Identifiez vous !</label>
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
                    <div>
                        <button type="submit" className={classNames.button}>Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
