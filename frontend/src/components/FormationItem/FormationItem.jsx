import {useState, useEffect} from 'react'


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
    })
    
    return (   
        <section>
            
				{[lesson].map(l => 
                <div>
                    <h3>{l.title}</h3>
                    <div>{l.video}</div>
                    <p>{l.content}</p>
                    </div>)}
                
			
        </section>
    )
}

export default FormationItem
