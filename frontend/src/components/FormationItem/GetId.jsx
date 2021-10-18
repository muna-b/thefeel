import React from 'react'
import { useParams } from 'react-router-dom'
import FormationItem from './FormationItem'

function GetId() {
    const { id } = useParams()
    return (
        <div>
            <FormationItem lessonId={id}/>
            
        </div>
    )
}

export default GetId
