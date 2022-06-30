import React from "react"
import classes from "./Screen.module.css"
import { CSSTransition } from "react-transition-group"

function Screen(props) {
  return (
    <div className={classes.screen}>
      <CSSTransition
        in={props.skip}
        timeout={300}
        className={classes.transition}
      >
        <img src={props.songs.img} alt={props.songs.artist}></img>
      </CSSTransition>
      <div className={classes.text}>
        <h3>
          {props.songs.artist}-{props.songs.song}
        </h3>
      </div>
    </div>
  )
}

export default Screen
