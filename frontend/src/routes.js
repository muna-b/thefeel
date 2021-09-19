import React from 'react'
import {Route, Switch} from "react-router"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const Routes = () => {
    return (
        <Switch>
            
            <Route path='/login' exact>
                <Login />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes