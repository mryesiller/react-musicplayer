import React, { Fragment, useState, useEffect } from "react"
import classes from "./Effect.module.css"

function Effect({ music }) {
  const [isHidden, setIsHidden] = useState(false)

  const effectElement = `${classes.effect} ${isHidden ? classes.visible : ""}`

  useEffect(() => {
    music ? setIsHidden(true) : setIsHidden(false)
  }, [music])

  return (
    <Fragment>
      <span className={effectElement}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </span>
    </Fragment>
  )
}

export default Effect
