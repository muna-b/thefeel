import { useEffect, useState } from 'react'

function EditLesson({lessonId}) {
    const [lesson, setLesson] = useState([])
    useEffect(() => {
	const fetchLesson = async () => {
	const response = await fetch('http://localhost:3001/lessons/'+lessonId,{
            method: 'PATCH',
        })
		const data = await response.json()
		console.log(data)
		setLesson(data)
	}
    fetchLesson()
    })
    const [edit, setEdit] = (false)
    const [text, setText] = ("")
    const handleEdit = (e) => {
        
    }
    
    return (   
        <section>
            
				{ 
                <div>
                    <h3>{lesson.title}</h3>
                    <div>{lesson.video}</div>
                    <p>{lesson.content}</p>
                    </div>}
                
			
        </section>
    )
}

export default EditLesson
