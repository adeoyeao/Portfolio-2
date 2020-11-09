import Folder from "../components/Folder"
import Card from "../components/Card"
import CloseButton from "../components/CloseButton"

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
            <section style={shrinkStyle}
            className={styles.projects}>
                  { view === "menu" ?
                  <div className={styles.folders}>
                        <Folder type="application" handleClick={handleClick}/>
                        <Folder type="website" handleClick={handleClick}/>
                        <Folder type="dashboard" handleClick={handleClick}/>
                  </div> :
                  view === "application" ?
                  <div>
                        <CloseButton handleClick={handleClick}/>
                        <div className={styles.projectCards}>
                              {props.projects.map(project => project.category === "Application" && 
                              <Card 
                              project={project.project}
                              description={project.description}
                              tech1={project.technology1}
                              tech2={project.technology2}
                              tech3={project.technology3}
                              code={project.code}
                              website={project.website}
                              category={project.category}
                              />)}
                        </div>
                  </div>  :
                  view === "website" ?
                  <div className={styles.projectCards}>
                        <CloseButton handleClick={handleClick}/>
                        <div className={styles.projectCards}>
                              {props.projects.map(project => project.category === "Website" && 
                              <Card 
                              project={project.project}
                              description={project.description}
                              tech1={project.technology1}
                              tech2={project.technology2}
                              tech3={project.technology3}
                              code={project.code}
                              website={project.website}
                              category={project.category}
                              />)}
                        </div>
                  </div> :
                  view === "dashboard" ?
                  <div className={styles.projectCards}>
                        <CloseButton handleClick={handleClick}/>
                        <div className={styles.projectCards}>
                              {props.projects.map(project => project.category === "Dashboard" && 
                              <Card 
                              project={project.project}
                              description={project.description}
                              tech1={project.technology1}
                              tech2={project.technology2}
                              tech3={project.technology3}
                              code={project.code}
                              website={project.website}
                              category={project.category}
                              />)}
                        </div>
                  </div> : false
                  }           
            </section>
      )
}

export default ProjectsLayout