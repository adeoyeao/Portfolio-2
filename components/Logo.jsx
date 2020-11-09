import styles from "../styles/components/logo.module.scss"

const Logo = () => {
      return (
            <span className={styles.logo}>
                  <svg
                        className="logo"
                        viewBox="0 0 157 136"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                  >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeWidth="2"
                    d="M69.2624 16L78.5 0L87.7376 16L147.638 119.75L156.875 135.75H138.4H18.5999H0.124702L9.36231 119.75L69.2624 16ZM27.8375 119.75L78.5 32L129.162 119.75H112.419L112.131 119.25L87.7376 77L78.5 61L69.2624 77L44.93 119.25L44.5807 119.75H27.8375ZM63.3446 119.25L78.5 93L93.6554 119.25H63.3446Z"
                  />
                  </svg>
            </span>
      )
}

export default Logo