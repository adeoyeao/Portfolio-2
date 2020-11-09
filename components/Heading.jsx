import styles from "../styles/components/heading.module.scss"

const Heading = (props) => {
      return (
            <div className={styles.heading}>
                  { props.type == "primary" ? 
                  <h1>{props.head}</h1> :
                  props.type === "secondary" ?
                  <h2>{props.head}</h2> : 
                  <h3>{props.head}</h3>} 
            </div>
      )
}

export default Heading