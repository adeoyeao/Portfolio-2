import styles from "../styles/components/job.module.scss"

const Job = (props) => {
      return (
            <div className={styles.job}>
                  <h3>{props.company}</h3>
                  <p>{props.job}</p>
                  <h3>{props.years}</h3>
            </div>
      )
}

export default Job