<<<<<<< HEAD
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

=======
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

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
export default Modal