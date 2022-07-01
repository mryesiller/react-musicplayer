import React, { Fragment } from "react"
import classes from "./Screen.module.css"

function Screen(props) {
  return (
    <Fragment>
      <img src={props.songs.img} alt={props.songs.artist}></img>
      <div className={classes.text}>
        <h3>
          {props.songs.artist}-{props.songs.song}
        </h3>
      </div>
    </Fragment>
  )
}

export default Screen
