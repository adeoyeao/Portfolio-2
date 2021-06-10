
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import styled from 'styled-components'
import styles from "../styles/layouts/project.module.scss"

const ProjectLayout = (props) => {

    const StyledCard = styled.div`
    border-radius: 1rem;
    height: 250px;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-size: cover;
    background-position: ${(props) => props.top ? 'top' : 'bottom'};
    border: 2px solid #E5E5E5;

    &:hover {
        box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.15);
    }

    @media screen and (min-width: 700px) {
        grid-column: 1/3;
        height: 300px;
    }
`

      return (
            <section
            className={styles.project}>
            <Heading
            type='primary'
            head={props.head}
            />
            <div>
                <a href={`https://${props.url}`} target="_blank">View Live Website</a>
            </div>
            <Paragraph
            text={props.about}
            />
            <StyledCard 
            imgUrl={props.imgUrl}
            />
            <StyledCard 
            imgUrl={props.imgUrl}
            top
            />
            </section>
      )
}

export default ProjectLayout