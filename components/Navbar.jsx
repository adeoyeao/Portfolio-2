import styles from "../styles/components/navbar.module.scss"
import HomeIcon from '@material-ui/icons/HomeRounded';
import PersonIcon from '@material-ui/icons/PersonRounded';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesRounded';
import CreateIcon from '@material-ui/icons/CreateRounded';
import ChatIcon from '@material-ui/icons/ChatRounded';

import { useState, useEffect } from "react"

const Navbar = () => {
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

      const handleClick= () => console.log(id)

      return (
            <nav className={styles.navbar}>
                  <span>
                        <HomeIcon 
                        style={iconStyle.home} 
                        onMouseEnter={() => {
                              const home = "home";
                              handleMouseOver(home)
                        }}
                        onMouseLeave={() => {
                              const home = "home";
                              handleMouseOut(home)
                        }}
                        /></span>
                  <span>
                        <PersonIcon 
                        style={iconStyle.about}
                        onMouseEnter={() => {
                              const about = "about";
                              handleMouseOver(about)
                        }}
                        onMouseLeave={() => {
                              const about = "about";
                              handleMouseOut(about)
                        }}    
                        /></span>
                  <span>
                        <ImportantDevicesIcon 
                        style={iconStyle.skills}
                        onMouseEnter={() => {
                              const skills = "skills";
                              handleMouseOver(skills)
                        }}
                        onMouseLeave={() => {
                              const skills = "skills";
                              handleMouseOut(skills)
                        }}  
                        /></span>
                  <span>
                        <CreateIcon 
                        style={iconStyle.projects}
                        onMouseEnter={() => {
                              const projects = "projects";
                              handleMouseOver(projects)
                        }}
                        onMouseLeave={() => {
                              const projects = "projects";
                              handleMouseOut(projects)
                        }}    
                        /></span>
                  <span>
                        <ChatIcon 
                        style={iconStyle.contact}
                        onMouseEnter={() => {
                              const contact = "contact";
                              handleMouseOver(contact)
                        }}
                        onMouseLeave={() => {
                              const contact = "contact";
                              handleMouseOut(contact)
                        }}  
                        /></span>
            </nav>
      )
}

export default Navbar