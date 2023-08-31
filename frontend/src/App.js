import './App.css';
import React, { useState, useEffect } from 'react'
import{
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { UseridContext } from './components/App.Context';

function App() {
  const [userId, setUserId] = useState(null)
  useEffect( () => {
    const fetchToken = async() => {
      const appToken = localStorage.getItem('token')
      const response = await fetch (`${process.env.REACT_APP_API_URL}profile`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${appToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      const data = await response.json()
    setUserId(data)
    console.log(typeof(appToken))
    console.log(data)
    }
    fetchToken()
}, [])
  return (
    <UseridContext.Provider value={userId}>
      <Router>
        <Header />
        <Routes />
        <Contact />
        <Footer />
      </Router>
    </UseridContext.Provider>
  );
}

export default App;