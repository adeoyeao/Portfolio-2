import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect, useState } from "react"

import styles from "../styles/layouts/projects.module.scss"

const ProjectsLayout = (props) => {
      const dispatch = useDispatch()
      const [ view, setView ] = useState("menu")
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      const handleClick = (type = "menu") => {
            setView(type)
      }

      return (
            <section style={shrinkStyle}>
          
            </section>
      )
}

export default ProjectsLayout