import Copy from "../components/Copy"
import Service from '../components/Service'
import Button from "../components/Button"
import { useState, useEffect } from "react"
import AboutLayout from './About'
import FeaturedProjectsLayout from './FeaturedProjects'
import styles from "../styles/layouts/index.module.scss"

const IndexLayout = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      const indexStyle = {
            height: viewHeight
      }

      const services = [
            {
                  name: 'design',
                  head: 'Responsive Design'
            },
            {
                  name: 'development',
                  head: 'Web Development'
            },
            {
                  name: 'optimisation',
                  head: 'SEO Optimisation'
            },
            {
                  name: 'ecommerce',
                  head: 'eCommerce Development'
            }
      ]

      return (
            <>
            <section 
            style={indexStyle}
            className={styles.index}>
                  <div>
                  <Copy 
                  type="primary"
                  head="I help businesses stand out online."
                  text="I'm a freelance web developer based in London, who designs and builds websites for SMEs and self-employed professionals. "/>
                  <Button 
                  route="projects"
                  name="View Recent Projects"/>
                  </div>
            </section>
            <AboutLayout/>
            <section className={styles.services}>
                  { services.map(service => (
                        <Service
                              service={service.name}
                              head={service.head}
                        />
                  )) }
                  <Button 
                  route='services'
                  name='See How I Can Help'
                  />
            </section>
            <FeaturedProjectsLayout />
            </>
      )
}

export default IndexLayout