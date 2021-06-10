import { useState, useEffect } from "react"
import { GetStaticPaths, GetSTaticProps } from 'next'
import PROJECT_DATA from '../../data/projects.json'
import { useRouter } from "next/router"
import ProjectLayout from '../../layouts/Project'

const Project = ( { PROJECT_DATA } ) => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)

      const router = useRouter()

      const findQuery = () => {
            const query = router.query.project
            const keys = PROJECT_DATA.map(project => project.ref)
            return keys.indexOf(query)
      }

      const queryIndex = findQuery()

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

      const mainStyle = {
            minHeight: viewHeight,
      }

      return (
            <main style={mainStyle}>
                  <ProjectLayout
                  head={PROJECT_DATA[queryIndex].name}
                  url={PROJECT_DATA[queryIndex].url}
                  about={PROJECT_DATA[queryIndex].about}
                  imgUrl={`../images/${PROJECT_DATA[queryIndex].ref}/main.jpg`}
                  />
            </main>
      )
}

export const getStaticProps = async () => {
    return {
        props: {
            PROJECT_DATA
        }
    }
}

export const getStaticPaths = async () => {
    const paths = PROJECT_DATA.map((project) => ({
          params: { project: project.ref }
    }))  

    return {
        paths,
        fallback: false
    } 
}

export default Project