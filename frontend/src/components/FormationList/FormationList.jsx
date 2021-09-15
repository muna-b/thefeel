import { useState, useEffect } from 'react'
import classNames from './FormationList.module.css'
import FormationItem from "../FormationItem/FormationItem"

const FormationList = () => {
    const [lessons, setLessons] = useState([])
    
    useEffect( () => {
        const fetchLessons = async() => {
        const response = await fetch ('http://localhost:3001/lessons')
        const data = await response.json()
        setLessons(data)
        } 
        fetchLessons()
    })

    return (
        <section className = {classNames.container}>
            <h2 className = {classNames.title}>Notre formation</h2>            
            {lessons.map (lesson => <div className = {classNames.lessons}> 
                                        <h4>{lesson.title}</h4>
                                        <p>{lesson.description}</p>
                                    </div>)}
            <button className = {classNames.button}> S'abonner </button>
        
        </section>
    )
}

export default FormationList
