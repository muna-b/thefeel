import React from 'react'
import Card from '../../components/Card/Card'
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
                        <Card 
                        image ="computer.svg"
                        alt ="learn"
                        title ="Apprenez de n'importe ou"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                        <Card 
                        image ="teaching.png"
                        alt ="learn"
                        title ="Progressez à votre rythme"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                        <Card 
                        image ="feel.png"
                        alt ="learn"
                        title ="Progressez à votre rythme"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                    </div>
                    <div className = {classNames.box2}>
                        <div className = {classNames.paragraphBox}>
                            <h3 className = {classNames.titleH2}>Présentation</h3>
                            <p>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                            </p>
                        </div>
                        <div className = {classNames.videoBox}>
                            VIDEO
                        </div>
                    </div>
                    <div className = {classNames.box}></div>                        

                </div>
        </div>
    )
}

export default Home
