import React, { useState, useRef, useEffect } from "react"
import classes from "./App.module.css"
import Screen from "./components/Screen/Screen"
import Buttons from "./components/Buttons/Buttons"
import Effect from "./components/Effect/Effect"
import songs from "./songs"

function App() {
  const audioElement = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  //const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play()
    } else {
      audioElement.current.pause()
    }
  })

  const playMusic = () => {
    if (isPlaying) {
      audioElement.current.pause()
      setIsPlaying(false)
    } else {
      audioElement.current.play()
      setIsPlaying(true)
    }
    //console.log(audioElement.current.buffered.end(0))
  }

  const restartMusic = () => {
    audioElement.current.currentTime = 0
  }

  const randomMusic = () => {
    const song = Math.floor(Math.random() * songs.length)
    setIndex(song)
    audioElement.current.play()
  }

  const forwardMusic = () => {
    if (index < songs.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const backwardMusic = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(songs.length - 1)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.screen}>
        <audio src={songs[index].src} ref={audioElement}></audio>
        <Screen songs={songs[index]} />
        <Effect music={isPlaying} />
      </div>
      <Buttons
        playMusic={playMusic}
        forwardMusic={forwardMusic}
        backwardMusic={backwardMusic}
        randomMusic={randomMusic}
        restartMusic={restartMusic}
        music={isPlaying}
      />
    </div>
  )
}

export default App
