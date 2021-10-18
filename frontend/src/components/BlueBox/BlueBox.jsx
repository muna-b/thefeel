import React from 'react'
import classNames from './BlueBox.module.css'

function BlueBox() {
    return (
        <section className = {classNames.blueBox}>
            <div className = {classNames.imgBox}>
                <img className = {classNames.img}src="learn.svg" alt="learn"/>
            </div>
            <div className = {classNames.textBox}>
                <h1 className = {classNames.titleBox}>LOREM
                        LOREM IPSUM
                </h1>
                <br></br>
                <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                </p>
            </div>
        </section>
    )
}

export default BlueBox
