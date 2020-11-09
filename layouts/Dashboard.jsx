import { useState } from "react"
import SkillForm from "../components/SkillForm"
import ProjectForm from "../components/ProjectForm"
import Modal from "../components/Modal"
import CloseButton from "../components/CloseButton"
import styles from "../styles/layouts/dashboard.module.scss"

const DashboardLayout = () => {
      const [ views, setViews ] = useState("menu")

      const handleClick = () => setViews("menu")

      return (
            <section className={styles.dashboard}>
                  {views === "menu" ? 
                  <span>
                  <button onClick={() => setViews("skills")}><p>Add New Skill</p></button>
                  <button onClick={() => setViews("projects")}><p>Add New Project</p></button>
                  </span> :
                  views === "skills" ? 
                  <Modal>
                        <CloseButton handleClick={handleClick}/>
                        <SkillForm close={handleClick}/>
                  </Modal> :
                  views === "projects" ?
                  <Modal>
                        <CloseButton handleClick={handleClick}/>
                        <ProjectForm close={handleClick}/>
                  </Modal> : false }
            </section>
      )
}

export default DashboardLayout