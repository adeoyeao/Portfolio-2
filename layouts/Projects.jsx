import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect, useState } from "react"

import styles from "../styles/layouts/projects.module.scss"

const ProjectsLayout = (props) => {


      return (
            <section
            className={styles.projects}>
                  Projects
            </section>
      )
}

export default ProjectsLayout