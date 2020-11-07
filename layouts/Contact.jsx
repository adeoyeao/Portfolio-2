import Copy from "../components/Copy"
import styles from "../styles/layouts/contact.module.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

const ContactLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      const iconStyle = {
            fontSize: 32,
            margin: "0 auto",
            marginBottom: "1rem",
            color: "#E7EBC5"
      }

      return (
            <section 
            style={shrinkStyle}
            className={styles.contact}>
                  <div>
                  <Copy 
                  type="primary"
                  head="Contact Me"
                  text="I am currently available for freelance opportunities so please feel free to drop me an email via the link below."/>
                  <a href="mailto:alfred.adeoye@cantab.net" className={styles.email}>Let's Get In Touch</a>
                  </div>
                  <div className={styles.socialbuttons}> 
                        <a href="https://github.com/adeoyeao/" target="_blank" className={styles.social}>
                              <GitHubIcon style={iconStyle}/>
                              <p>View my GitHub Profile</p>
                        </a>
                        <a href="https://www.linkedin.com/in/alfred-adeoye-37509b81" target="_blank" className={styles.social}>
                              <LinkedInIcon style={iconStyle}/>
                              <p>View my LinkedIn Profile</p>
                        </a>
                  </div>
            </section>
      )
}

export default ContactLayout