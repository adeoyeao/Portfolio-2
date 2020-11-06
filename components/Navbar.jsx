import styles from "../styles/components/navbar.module.scss"
import HomeIcon from '@material-ui/icons/HomeRounded';
import PersonIcon from '@material-ui/icons/PersonRounded';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesRounded';
import CreateIcon from '@material-ui/icons/CreateRounded';
import ChatIcon from '@material-ui/icons/ChatRounded';

import { pageEnter, pageExit } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
      const router = useRouter()
      const dispatch = useDispatch()

      const pageLoad = useSelector(state => state.transition.shrink)

      const defaultStyle = {
            color: "#8F9491",
            fontSize: 32,
            cursor: "pointer",
            display: "block"          
      }

      const [ iconStyle, setIconStyle] = useState({
            home: defaultStyle,
            about: defaultStyle,
            skills: defaultStyle,
            projects: defaultStyle,
            contact: defaultStyle,
      })

      const handleMouseOver = (icon) => {
            setIconStyle(prev => ({
                  ...prev,
                  [icon]: {
                        ...prev[icon],
                        color: "#2352FA"
                  }
            }))
      }

      const handleMouseOut = (icon) => {
            setIconStyle(prev => ({
                  ...prev,
                  [icon]: defaultStyle
            }))           
      }

      const handleClick = (href) => {
            dispatch(pageExit())
            setTimeout(() => router.push(href), 750)
      }

      return (
            <nav className={styles.navbar}>
                  <span>
                        <HomeIcon 
                        style={iconStyle.home} 
                        onMouseEnter={ () => handleMouseOver("home") }
                        onMouseLeave={ () => handleMouseOut("home") }
                        onClick = { () => handleClick("/") }
                        />
                  </span>
                  <span>
                        <PersonIcon 
                        style={iconStyle.about}
                        onMouseEnter={ () => handleMouseOver("about") }
                        onMouseLeave={ () => handleMouseOut("about") } 
                        onClick = { () => handleClick("/about") }   
                        />
                  </span>
                  <span>
                        <ImportantDevicesIcon 
                        style={iconStyle.skills}
                        onMouseEnter={ () => handleMouseOver("skills") }
                        onMouseLeave={ () => handleMouseOut("skills") }  
                        onClick = { () => handleClick("/skills") } 
                        />
                  </span>
                  <span>
                        <CreateIcon 
                        style={iconStyle.projects}
                        onMouseEnter={ () => handleMouseOver("projects") }
                        onMouseLeave={ () => handleMouseOut("projects") } 
                        onClick = { () => handleClick("/projects") }    
                        />
                  </span>
                  <span>
                        <ChatIcon 
                        style={iconStyle.contact}
                        onMouseEnter={ () => handleMouseOver("contact") }
                        onMouseLeave={ () => handleMouseOut("contact") }
                        onClick = { () => handleClick("/contact") } 
                        />
                  </span>
            </nav>
      )
}

export default Navbar

