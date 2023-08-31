import React from 'react'
// import ReactPlayer from 'react-player'
import classNames from './Player.module.css'

function Player() {
    return (
        <div className = {classNames.playerWrapper}>
            {/* <ReactPlayer 
                src = 'presentationthefeel.mp4'
                className="react-player"
                width= "100%"
                height= "100%"
            /> */}
            <video src="./../../public/presentationthefeel.mp4"></video>
        </div>
    )
}

export default Player
