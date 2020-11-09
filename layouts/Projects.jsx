import Folder from "../components/Folder"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

import styles from "../styles/layouts/projects.module.scss"

const ProjectsLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      return (
            <section style={shrinkStyle}
            className={styles.projects}>
                  <div className={styles.folders}>
                        <Folder type="application"/>
                        <Folder type="website"/>
                        <Folder type="dashboards"/>
                  </div>
            </section>
      )
}

export default ProjectsLayout