import React from 'react'
import classNames from './NotFound.module.css'

function NotFound() {
    return (
        <main className={classNames.mainContainer}>
            <img src="notfound.svg" alt="404 not found"/>
        </main>
    )
}

export default NotFound
