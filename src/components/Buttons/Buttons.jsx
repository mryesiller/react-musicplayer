import React from "react"
import classes from "./Buttons.module.css"
import { FaPlay, FaRandom, FaPause } from "react-icons/fa"
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5"
import { VscDebugRestart } from "react-icons/vsc"

function Buttons({
  playMusic,
  forwardMusic,
  backwardMusic,
  restartMusic,
  randomMusic,
  music,
}) {
  return (
    <div className={classes.buttons}>
      <button onClick={restartMusic}>
        <VscDebugRestart />
      </button>
      <button onClick={backwardMusic}>
        <IoPlaySkipBack />
      </button>
      <button onClick={playMusic}>{music ? <FaPause /> : <FaPlay />}</button>
      <button onClick={forwardMusic}>
        <IoPlaySkipForward />
      </button>
      <button onClick={randomMusic}>
        <FaRandom />
      </button>
    </div>
  )
}

export default Buttons
