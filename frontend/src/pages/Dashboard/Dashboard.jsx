import { useEffect, useState } from 'react'
import  { useHistory } from 'react-router-dom'
import classNames from './Dashboard.module.css'

function Dashboard(props) {
    const [lessons, setLessons] = useState([])
    const history = useHistory()
    const show = path => {
        history.push(path)
    }
  
    useEffect( () => {
        const fetchLessons = async() => {
        const response = await fetch ('http://localhost:3001/lessons')
        const data = await response.json()
        setLessons(data)
        } 
        fetchLessons()
    }, [])
    return (
        <main className = {classNames.mainContainer}>
            <div className = {classNames.container}>
                <div className = {classNames.title}>
                    <h2>Dashboard Admin</h2>
                </div>“
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lessons.map(lesson =>
                            <tr>

                                <td>{ lesson.title }</td>
                                <td>{ lesson.description }</td>
                                <td>
                                    <button onClick={ () => show ("/lessons/"+lesson._id) }>Afficher</button>
                                
                                    <button>Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Dashboard
