import styles from "../styles/components/socials.module.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Socials = () => {
      const socialStyle = {
            fontSize: 24,
            color: "#8F9491"
      }

      return (
            <span className={styles.socials}>
                  <a href="https://github.com/adeoyeao/" target="_blank"><GitHubIcon style={socialStyle}/></a>
                  <a href="www.linkedin.com/in/alfred-adeoye-37509b81" target="_blank"><LinkedInIcon style={socialStyle} /></a>
            </span>
      )
}

export default Socials