import React from 'react'
import ReactPlayer from 'react-player'
import classNames from './Player.module.css'

function Player() {
    return (
        <div className = {classNames.playerWrapper}>
            <ReactPlayer 
                url = 'https://www.youtube.com/watch?v=5Peo-ivmupE'
                className="react-player"
                width= "100%"
                height= "100%"
            />
        </div>
    )
}

export default Player
