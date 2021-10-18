import React from 'react'
import classNames from './BlueBox.module.css'

function BlueBox() {
    return (
        <section className = {classNames.blueBox}>
            <div className = {classNames.imgBox}>
                <img className = {classNames.img}src="learn.svg" alt="learn"/>
            </div>
            <div className = {classNames.textBox}>
                <h1 className = {classNames.titleBox}>Parler anglais est a votre portée
                </h1>
                <br></br>
                <p>
                C'est ici que tout commence ! 
                Prenez plaisir à apprendre et appréciez votre progression. Vous avez toujours comprendre l'anglais que ce soit pour regarder vos série préférée en VO, pour un prochain voyage ou meme pour PROFESSIONEEL.
                Avec nous tout deviens possible.
                </p>
            </div>
        </section>
    )
}

export default BlueBox
