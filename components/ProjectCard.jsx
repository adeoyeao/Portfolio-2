import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import { useRouter } from 'next/router'
// import styles from "../styles/components/projectcard.module.scss"
import styled from 'styled-components'
import Copy from './Copy'
import Paragraph from './Paragraph'

const ProjectCard = (props) => {
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href)
    }

    const StyledCard = styled.div`
        border-radius: 1rem;
        height: 250px;
        background-image: ${(props) => `url(${props.imgUrl})`};
        background-size: cover;
        background-position: top center;
        border: 2px solid #E5E5E5;

        &:hover {
            box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.15);
            .overlay {
                display: block;
                background: rgba(32, 33, 37, 0.9);
                padding: 2rem;
                border-radius: 1rem;
                height: 100%;
                width: 100%;
                border: 2px solid #E5E5E5;

                p {
                    width: 100% !important;
                }
            }
        }

        button {
            border: none;
            outline: none;
            appearance: none;
            cursor: pointer;
            background: none;
        }

        .overlay {
            display: none;
        }

        h2, p, button {
            color: #F7FBFF;
        }

        @media screen and (min-width: 700px) {
            grid-column: 1/3;
            height: 300px;
        }
    `

    return (
        <StyledCard {...props}>
            <button className='overlay' onClick={() => handleClick(props.route)}>
                <Copy
                type='secondary' 
                head={props.head}
                text={props.text}
                />
            </button>
        </StyledCard>
    )
}

export default ProjectCard

