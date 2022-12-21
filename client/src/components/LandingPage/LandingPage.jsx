import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={styles.background}>
      <h1>LandingPage</h1>
      <Link to='/home' >Start</Link>
    </div>
  )
}

export default LandingPage;