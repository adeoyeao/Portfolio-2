import styles from "../styles/components/copy.module.scss"

const Copy = (props) => {
      return (
            <div className={styles.copy}>
                  { props.type == "primary" ? 
                  <h1>{props.head}</h1> :
                  props.type === "secondary" ?
                  <h2>{props.head}</h2> : 
                  <h3>{props.head}</h3>} 
                  <p>{props.text}</p>
            </div>
      )
}

export default Copy