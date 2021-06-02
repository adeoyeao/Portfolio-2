import Heading from "../components/Heading"
import ProjectCard from '../components/ProjectCard'
import styles from "../styles/layouts/featuredprojects.module.scss"

const FeaturedProjectsLayout = () => {
      return (
            <section 
            className={styles.featuredProjects}>
                  <Heading 
                  type='primary'
                  head='Featured Projects'
                  />
                  <div/>
                  <ProjectCard
                  type='primary'
                  head='Audiophile'
                  />
                  <ProjectCard
                  type='secondary'
                  head='Coffee Roasters'
                  />
                  <ProjectCard
                  type='primary'
                  head='Designo'
                  />
                  <ProjectCard
                  type='secondary'
                  head='Dine'
                  text='Restaurant booking website'
                  />
            </section>
      )
}

export default FeaturedProjectsLayout