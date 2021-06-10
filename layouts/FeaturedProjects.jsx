import Heading from "../components/Heading"
import ProjectCard from '../components/ProjectCard'
import styles from "../styles/layouts/featuredprojects.module.scss"
import PROJECTS_DATA from '../data/projects.json'

const FeaturedProjectsLayout = () => {
      return (
            <section 
            className={styles.featuredProjects}>
                  <Heading 
                  type='primary'
                  head='Featured Projects'
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
            </section>
      )
}

export default FeaturedProjectsLayout