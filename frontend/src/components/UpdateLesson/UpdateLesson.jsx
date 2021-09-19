import {useState} from 'react'

const UpdateLesson = ({ lesson }) => {
    const [isEditing, setIsEditing] = useState(false)
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
            {isEditing ? (
                <input
                onChange = {(e)=> setEditedTitle(e.target.value)}
                defaultValue = { editedTitle ? editedTitle : lesson.title }
                />
            ):
            ( <p>
                {editedTitle ? editedTitle : lesson.title}
            </p>)
            }

            <label htmlFor="">Description</label>
            {isEditing ? (
                <input
                onChange = {(e)=> setEditedDescription(e.target.value)}
                defaultValue = { editedDescription ? editedDescription : lesson.description }
                />
            ):
            ( <p>
                {editedDescription ? editedDescription : lesson.description}
            </p>)
            }
            <label htmlFor="">Video</label>
            {isEditing ? (
                <input
                onChange = {(e)=> setEditedVideo(e.target.value)}
                defaultValue = { editedVideo ? editedVideo : lesson.video }
                />
            ):
            ( <p>
                {editedVideo ? editedVideo : lesson.video}
            </p>)
            }
            <label htmlFor="">Contenu</label>
            {isEditing ? (
                <input
                onChange = {(e)=> setEditedContent(e.target.value)}
                defaultValue = { editedContent ? editedContent : lesson.content }
                />
            ):
            ( <p>
                {editedContent ? editedContent : lesson.content}
            </p>)
            }
            <button type="submit" onClick={ () => setIsEditing(true)}>Modifier la leçon</button>
        </form>
    )
}

export default UpdateLesson
