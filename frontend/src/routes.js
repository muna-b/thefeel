import React from 'react'
import {Route, Switch} from "react-router"
import FormationItem from './components/FormationItem/FormationItem'
import AddLesson from './pages/AddLesson/AddLesson'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const Routes = () => {
    return (
        <Switch>
            
            <Route path='/login' exact>
                <Login />
            </Route>
            <Route path='/addlessons' exact>
                <AddLesson />
            </Route>
            <Route path='/dashboard' exact>
                <Dashboard />
            </Route>           
            <Route path='/lessons/:id' >
                <FormationItem />
            </Route>           
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes