import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateLesson from './UpdateLesson'

function GetId() {
    const { id } = useParams()
    return (
        <div>
            <UpdateLesson lessonId={id} />
        </div>
    )
}

export default GetId
