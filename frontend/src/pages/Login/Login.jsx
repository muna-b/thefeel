import React from 'react'
import classNames from './Login.module.css'

function Login() {
    return (
        <main className={classNames.mainContainer}>
            <div className={classNames.container}>
                <label className={classNames.title}>Identifiez vous !</label>
                <form>
                    <div className={classNames.inputDiv}>
                        <input 
                        type="email"
                        placeholder="identifiant"
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input 
                        type="email"
                        placeholder="mot de passe"
                        />
                    </div>
                    <div>
                        <button className={classNames.button}>Se connecter</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
