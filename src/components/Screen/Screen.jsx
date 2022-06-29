import React, { Fragment } from "react"

function Screen(props) {
  return (
    <Fragment>
      <img src={props.songs.img} alt={props.songs.artist}></img>
      <h3>
        {props.songs.artist}-{props.songs.song}
      </h3>
    </Fragment>
  )
}

export default Screen
