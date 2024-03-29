import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={styles.container}>
          <span className={styles.loader}></span>
          <h2 className={styles.text} >Loading . . .</h2>
      </div>
    </>
  )
}

export default Loading