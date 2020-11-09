import styles from "../styles/components/card.module.scss"

const Card = (props) => {
      const cardStyle = props.category === "Website" ? 
      {background: "linear-gradient(90deg, #36d1dc, #5b86e5)" } :
      props.category === "Application" ?
      {background: "linear-gradient(90deg, #02aab0, #00cdac)" } :
      {background: "linear-gradient(90deg, #4568dc, #b06ab3)" }

      return (
            <article className={styles.card} style={cardStyle}>
                  <h3>{props.project}</h3>
                  <p>{props.description}</p>
                  <span className={styles.tech}>
                        <p>{props.tech1}</p><div className={styles.dot} />
                        <p>{props.tech2}</p><div className={styles.dot} />
                        <p>{props.tech3}</p>
                  </span>
                  <span className={styles.links}>
                        <a href={props.code} target="_blank">View Code</a>
                        <a href={props.website} target="_blank">Live Demo</a>
                  </span>
            </article>
      )
}

export default Card