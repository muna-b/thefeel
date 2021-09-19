import React from 'react'
import classNames from './Card.module.css'

function Card(props) {
    return (
        <div className = {classNames.container}>
            <div className = {classNames.cardImage}>
                <img 
                src={props.image} 
                alt={props.alt} 
                className = {classNames.imageSize}/>
            </div>
            <div className = {classNames.cardText}>             
                <h4>{props.title} </h4>
                <p>{props.text} </p>
            </div>
        </div>
    )
}

export default Card
