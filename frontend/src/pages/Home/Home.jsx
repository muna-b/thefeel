import React from 'react'
import Header from './../../components/Header/Header'
import classNames from './Home.module.css'

function Home() {
    return (
        <div>
            <Header />
                <div className = {classNames.container}>
                    <div className = {classNames.blueBox}>
                        <div className = {classNames.imgBox}>
                            <img className = {classNames.img}src="learn.svg" alt=""/>
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
                    </div>
                    <div className = {classNames.box}>
                        <div className = {classNames.cardContainer}>
                            <div className = {classNames.computerBox}>
                                <img src="computer.svg" alt=""/>
                            </div>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                        <div className = {classNames.cardContainer}>
                            <div className = {classNames.computerBox}>
                                <img src="computer.svg" alt=""/>
                            </div>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                        <div className = {classNames.cardContainer}>
                            <div className = {classNames.computerBox}>
                                <img src="computer.svg" alt=""/>
                            </div>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                        </div>
                    </div>
                    <div className = {classNames.box}></div>
                    <div className = {classNames.box}></div>                        

                </div>
        </div>
    )
}

export default Home
