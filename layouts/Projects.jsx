import PROJECTS_DATA from '../data/projects.json'
import Copy from '../components/Copy'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'

import styles from "../styles/layouts/projects.module.scss"

const ProjectsLayout = (props) => {


      return (
            <section
            className={styles.projects}>
            <Copy
            type='primary'
            head='Projects'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
                              {
                        PROJECTS_DATA.map(project => (
                              <ProjectCard 
                              head={project.name}
                              text={project.description}
                              imgUrl={`./images/${project.ref}/main.jpg`}
                              route={`projects/${project.ref}`}
                              />
                        ))
                  }
                                    <Button 
                        route="/services"
                        name="See How I Can Help"/>
            </section>
      )
}

export default ProjectsLayout