import React from 'react'

const FormationItem = (props) => {
    const { lessonInfo } = props
    return (
        <section>
            <article>
                <p>Titre: {lessonInfo.title}</p>
            </article>
            
        </section>
    )
}

export default FormationItem
