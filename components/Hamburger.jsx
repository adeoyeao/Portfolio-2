import { useState } from "react"
import styles from "../styles/components/hamburger.module.scss"

const Hamburger = (props) => {
      const [ menu, setMenu ] = useState("hamburger")

      const toggleMenu = () => {
            props.handleClick()
            menu === "hamburger" ? setMenu("close") : setMenu("hamburger")
      }

      return (
            <img 
            src={`/icons/${menu}.svg`} 
            onClick={toggleMenu}
            className={styles.hamburger}/>
      )
}

export default Hamburger