import React, { useState, useRef, useEffect } from "react"
import { FaPlay } from "react-icons/fa"
import {
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoStop,
  IoPause,
} from "react-icons/io5"
import classes from "./App.module.css"
import Screen from "./components/Screen/Screen"

function App() {
  const audioElement = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const [songs] = useState([
    {
      artist: "Coldplay",
      song: "Yellow",
      img: "/songs-images/coldplay.jpg",
      src: "/songs/yellow.mp3",
    },
    {
      artist: "Gayle",
      song: "abcdefu",
      img: "/songs-images/gayle.jpg",
      src: "/songs/gayle-abcdfu.mp3",
    },
    {
      artist: "The Cranberries",
      song: "Zombie",
      img: "/songs-images/zombie.jpg",
      src: "/songs/zombie.mp3",
    },
    {
      artist: "Muslum Gurses",
      song: "Tanrı Istemezse",
      img: "/songs-images/muslum-gurses.jpg",
      src: "/songs/muslum.mp3",
    },
    {
      artist: "Snoop Dogg",
      song: "Sweat",
      img: "/songs-images/snoopdog.jpg",
      src: "/songs/snoopdog.mp3",
    },
  ])
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play()
    } else {
      audioElement.current.pause()
    }
  })

  const playMusic = () => {
    setIsPlaying(true)
  }

  const pauseMusic = () => {
    setIsPlaying(false)
  }

  const stopMusic = () => {
    setIsPlaying(false)
    audioElement.current.currentTime = 0
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
      </div>
      <div className={classes.buttons}>
        <button onClick={backwardMusic}>
          {" "}
          <IoPlaySkipBack />{" "}
        </button>
        <button onClick={pauseMusic}>
          {" "}
          <IoPause />{" "}
        </button>
        <button onClick={playMusic}>
          {" "}
          <FaPlay />{" "}
        </button>
        <button onClick={stopMusic}>
          {" "}
          <IoStop />{" "}
        </button>
        <button onClick={forwardMusic}>
          <IoPlaySkipForward />
        </button>
      </div>
    </div>
  )
}

export default App
