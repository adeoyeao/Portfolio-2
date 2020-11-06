import styles from "../styles/components/transition.module.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Logo from "./Logo"

const Transition = () => {
      const [ viewHeight, setViewHeight ] = useState()
      const visible = useSelector(state => state.transition.shrink)

      const handleResize = () => {
            setViewHeight(window.innerHeight)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return (() => {
                  window.removeEventListener("resize", handleResize)
            })
      })

      const transitionStyle = {
            height: `${viewHeight}px`,
            zIndex: 10
      }

      return (
            <div>
            { visible && <div
            style={transitionStyle}
            className={styles.transition}> 
                  <img src="/icons/logo-secondary.svg" />
                  <p>What a wonderful day</p>
                  <span />
            </div> }
            </div>
      )
}

export default Transition