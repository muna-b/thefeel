import { useState } from 'react'
import classNames from './RegisterForm.module.css'

function RegisterForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [adress, setAdress] = useState("")
    //const [isSubmited, setIsSubmited] = useState()
        
    const onChangeUserName = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onChangeDateOfBirth = (e) => {
        setDateOfBirth(e.target.value)
    }

    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }

    // if (typeof onChangePassword.value === "undefined" && onChangeConfirmPassword.value === "undefined"){
    //     if(onChangePassword !== onChangeConfirmPassword){
    //         console.log('erreur')
    //     }
    // }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3001/users',{
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify({
                username,
                email,
                password,
                dateOfBirth,
                adress
            })
        })
        await response.json()
    }
    // if(isSubmited){
    //     return <Redirect to= "/dashboard"/>
    // }

    return (
        <main className={classNames.mainContainer}>
            <div className={classNames.container}>
                <form onSubmit={onSubmitHandler}>
                <h4 className={classNames.title}>Inscrivez vous !</h4>
                    <div className={classNames.inputDiv}>
                        <input
                            placeholder = "Login" 
                            type="text" 
                            name="username"
                            value={username}
                            onChange={onChangeUserName}
                            required
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input 
                            placeholder = "Email"
                            type="email" 
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            required
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input
                            placeholder = "Mot de passe"
                            type="password" 
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input
                            placeholder = "Confirmer le mot de passe"
                            type="password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                            required
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input
                            placeholder = "Date de naissance"
                            type="text" 
                            name="dateOfBirth"
                            value={dateOfBirth}
                            onChange={onChangeDateOfBirth}
                        />
                    </div>
                    <div className={classNames.inputDiv}>
                        <input
                            placeholder = "Adresse" 
                            type="text" 
                            name="adress"
                            value={adress}
                            onChange={onChangeAdress}
                        />
                    </div>
                    <button type="submit"className={classNames.button}> Creer mon compte</button>
                </form>
            </div>
        </main>
    )
}

export default RegisterForm
