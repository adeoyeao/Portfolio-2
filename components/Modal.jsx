import styles from "../styles/components/modal.module.scss"
import { useState, useEffect } from "react"

const Modal = ({ children }) => {
      const [ innerHeight, setInnerHeight ] = useState() 
      const handleResize = () => setInnerHeight(window.innerHeight)
      
      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return (() => window.removeEventListener("resize", handleResize))
      })

      const modalStyle = {
            height: `${innerHeight - 16}px`
      }

      return (
            <div className={styles.modal} style={modalStyle}>
                  { children }
            </div>
      )
}

export default Modal