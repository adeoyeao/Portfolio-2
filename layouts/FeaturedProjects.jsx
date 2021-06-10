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
                  text='Audio Products E-Commerce Website'
                  imgUrl='./images/audiophile.jpg'
                  />
                  <ProjectCard
                  type='secondary'
                  head='Coffee Roasters'
                  text='Subscription Service Website'
                  imgUrl='./images/coffeeroasters.jpg'
                  />
                  <ProjectCard
                  type='primary'
                  head='Designo'
                  text='Creative Agency Marketing Website'
                  imgUrl='./images/designo.jpg'
                  />
                  <ProjectCard
                  type='secondary'
                  head='Dine'
                  text='Restaurant Booking Website'
                  imgUrl='./images/dine.jpg'
                  />
            </section>
      )
}

export default FeaturedProjectsLayout