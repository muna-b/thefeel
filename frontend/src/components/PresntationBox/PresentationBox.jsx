import React from 'react'
import classNames from './PresentationBox.module.css'
import Player from './../Player/Player'

function PresentationBox() {
    return (
        <section className = {classNames.container}>
            <div className = {classNames.paragraphBox}>
                <h3 className = {classNames.titleH2}>Je me présente</h3>
                <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </p>
            </div>
            <Player />
        </section>
    )
}

export default PresentationBox
