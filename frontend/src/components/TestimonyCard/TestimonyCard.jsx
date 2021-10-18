import React from 'react'
import classNames from './TestimonyCard.module.css'

function TestimonyCard() {
    return (
        <section className = {classNames.section}>
            <h2 className = {classNames.title}> Quelques témoignages </h2>
            <div className = {classNames.container}>
                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}></div>
                    <div className = {classNames.commentBox}></div>
                </div>

                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}></div>
                    <div className = {classNames.commentBox}></div>
                </div>

                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}> </div>
                    <div className = {classNames.commentBox}></div>
                </div>
            </div>
        </section>
    )
}

export default TestimonyCard
