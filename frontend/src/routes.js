import React from 'react'
import {Route, Switch} from "react-router"
import GetId from './components/FormationItem/GetId'
import AddLesson from './pages/AddLesson/AddLesson'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound.jsx/NotFound'
import Payment from './pages/Payment/Payment'
import RegisterForm from './pages/RegisterForm/RegisterForm'

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
            <Route path='/lessons/:id' component={GetId}>
            </Route>                     
            <Route path='/user/new' >
                <RegisterForm />
            </Route>           
            <Route path='/payment' exact >
                <Payment />
            </Route>           
            <Route path='/notfound' exact >
                <NotFound />
            </Route>           
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes