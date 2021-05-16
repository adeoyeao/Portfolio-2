import styles from "../styles/components/heading.module.scss"

const Heading = (props) => {
      const HeadingTypes = {
            "primary": <h1>{props.head}</h1>,
            "secondary": <h2>{props.head}</h2>,
            "tertiary": <h3>{props.head}</h3>
      }

      return (
            <div className={styles.heading}>
                  { HeadingTypes[props.type] } 
            </div>
      )
}

export default Heading