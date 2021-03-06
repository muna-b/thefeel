import {useState, useEffect} from 'react'
import UpdateLesson from '../UpdateLesson/UpdateLesson'


const FormationItem = ({lessonId}) => {
    const [lesson, setLesson] = useState([])
    
    useEffect(() => {
	const fetchLesson = async () => {
	const response = await fetch('http://localhost:3001/lessons/'+lessonId,{
            method: 'GET',
        })
		const data = await response.json()
		console.log(data)
		setLesson(data)
	}
    fetchLesson()
    }, [])
    
    return (   
        <section>
            
				{ 
                <div>
                    <h3>{lesson.title}</h3>
                    <div>{lesson.video}</div>
                    <p>{lesson.content}</p>
                    </div>}
                    <UpdateLesson />
                
			
        </section>
    )
}

export default FormationItem
