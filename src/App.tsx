import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import styles from './App.module.css'
import { Draw } from './components'

export const App: React.FC = () => {
  const [numberList, setNumberList] = useState([1, 2, 3, 4, 5, 6])
  useEffect(() => {
    setInterval(() => {
      console.log('-------')
      setNumberList([
        rand(10),
        rand(10),
        rand(10),
        rand(10),
        rand(10),
        rand(10),
      ])
    }, 2000)
  }, [])
  function rand(n) {
    return Math.floor(Math.random() * n)
  }
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <div className={styles['draw-bg']}>
          {numberList.map((res) => {
            return <Draw count={res} />
          })}
        </div>
      </header>
    </div>
  )
}

export default App
