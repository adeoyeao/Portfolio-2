import styles from "../styles/layouts/header.module.scss"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Hamburger from "../components/Hamburger"
import Socials from "../components/Socials"

import { useState, useEffect } from "react"

const Header = () => {
      const [ visible, setVisible ] = useState(true)

      const handleResize = () => {
            window.innerWidth < 700 ? 
            setVisible(false) :
            setVisible(true)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return (() => {
                  window.removeEventListener("resize", handleResize)
            })
      }, [])

      const handleClick = () => setVisible(!visible)

      return (
            <header className={styles.header}>
                  <Logo />
                  { visible && <Navbar /> }
                  <Hamburger handleClick={handleClick}/>
                  <Socials />
            </header>
      )
}

export default Header