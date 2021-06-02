import { useRouter } from 'next/router'
import styles from "../styles/components/projectcard.module.scss"
import Copy from './Copy'

const ProjectCard = (props) => {
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href)
    }

    return (
        <div
        className={`${styles.projectcard} ${styles[props.type]}`}
        >
            <Copy
            type='secondary' 
            head={props.head}
            text={props.text}
            />
            <button onClick={() => handleClick(props.route)}>View Work</button>
        </div>
    )
}

export default ProjectCard