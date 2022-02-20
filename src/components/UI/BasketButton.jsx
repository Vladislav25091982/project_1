import React from 'react'
import classes from './BasketButton.module.scss'
const BasketButton = (props) => {
  return (
    <button className={classes.button} {...props}>{props.children}</button>
  )
}

export default BasketButton