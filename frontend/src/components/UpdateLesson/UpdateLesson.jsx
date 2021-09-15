import {useState} from 'react'

const UpdateLesson = ({ lesson }) => {
    const [editedTitle, setEditedTitle] = useState('')
    const [editedDescription, setEditedDescription] = useState('')
    const [editedContent, setEditedContent] = useState('')
    const [editedVideo, setEditedVideo] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:3001/lessons/${lesson.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: editedTitle ? editedTitle : lesson.title,
                description: editedDescription ? editedDescription : lesson.description,
                content: editedContent ? editedContent : lesson.content,
                video: editedVideo ? editedVideo : lesson.video,
            })
        })
        const data = await response.json
        console.log(data);
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <label htmlFor="">Titre</label>
            <input> {lesson.title} </input>
            <label htmlFor="">Description</label>
            <input> {lesson.description} </input>
            <label htmlFor=""></label>
            <input> {lesson.content} </input>
            <label htmlFor=""></label>
            <input> {lesson.video} </input>
            <button type="submit">Modifier la leçon</button>
        </form>
    )
}

export default UpdateLesson
