import styles from "../styles/components/copy.module.scss"

const Copy = (props) => {
      const HeadingTypes = {
            "primary": <h1>{props.head}</h1>,
            "secondary": <h2>{props.head}</h2>,
            "tertiary": <h3>{props.head}</h3>
      }

      return (
            <div className={styles.copy}>
                  { HeadingTypes[props.type]} 
                  <p>{props.text}</p>
            </div>
      )
}

export default Copy