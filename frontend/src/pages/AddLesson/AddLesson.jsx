import { useState } from 'react'

function AddLesson() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [video, setVideo] = useState("")
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onChangeVideo = (e) => {
        setVideo(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3001/lessons", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                content,
                video
            })
        })
        await response.json()
    }

    // if(isSubmitted){
    //     return(
    //         <div>YEEEEEEEEEEEEESSSSSS</div>
    //     )
    // }

    return (
        <main>
            <div>
                <h3>Pour ajouter un nouveau cours rempli le formulaire ci dessous !</h3>
                <form onSubmit = { onSubmitHandler }>
                    <div>
                        <input 
                            type="text"
                            placeholder= "Title"
                            name= "title"
                            value = {title}
                            onChange = {onChangeTitle}
                            required    
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder= "Description"
                            name= "description"
                            value = {description}
                            onChange = {onChangeDescription}
                            required    
                        />
                    </div>
                    <div>
                        <textarea
                            type="text"
                            placeholder= "Contenu"
                            name= "content"
                            value = {content}
                            onChange = {onChangeContent}
                            required    
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder= "Vidéo"
                            name= "video"
                            value = {video}
                            onChange = {onChangeVideo}
                            required    
                        />
                    </div>
                    <div>
                        <button type="submit"> Ajouter </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddLesson
