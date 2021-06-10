import styles from "../styles/components/navbar.module.scss"
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
      const router = useRouter()

      const [visible, setVisible] = useState(false)
      const [activeLink, setActiveLink] = useState(router.pathname.slice(1,router.pathname.length))
  
      const changeVisible = () => {
          setVisible(!visible)
      }

      const handleClick = (href) => {
            router.push(href)
            setActiveLink(href)
            setVisible(false)
      }

      const StyledNavigation = styled.nav`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      z-index: 1000;
      height: 70px;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #E5E5E5;
      align-items: center;

      background: ${(props) => props.backgroundColor};
      padding: ${(props) => `0 ${props.paddingSide}vw`};

      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr auto;

      img {
          height: 2rem;
          align-self: center;
          cursor: pointer;
      }

      .menuButton {
          width: 1.25rem;
          height: 1.25rem;
          align-self: center;
          appearance: none;
          outline: none;
          border: none;
          cursor: pointer;
          background-color: transparent;
          background-image: ${(props) => `url(${props.menu})`};
          background-size: cover;
      }

      ul {
          display: ${visible ? 'block' : 'none'};
          flex-direction: column;
          position: absolute;
          top: 70px;
          width: 100vw;
          box-shadow: 0px 1px rgba(0,0,0,0.1);
          background: #F7FBFF;

          li {
              list-style-type: none;
              padding-top: 1rem;
              padding-bottom: 1rem;
              text-align: center;
              border: none;

              &:hover {
                  background: ${(props) => props.accentColor};

                  button, a {
                      color: ${(props) => props.white};
                  }
              }

              button, a {
                  appearance: none;
                  outline: none;
                  border: none;
                  background: none;  
                  cursor: pointer;
                  color: ${(props) => lighten(0.2, props.black)};
                  height: 100%;
                  width: 100%;
                  text-decoration: none;
              }
          }

          .active button {
              color: ${(props) => props.accentColor};
              font-weight: bold;
          }
      }

      @media screen and (min-width: 700px) {
          grid-template-columns: ${(props) => {
              const alignment = {
                  left: `auto 1fr`,
                  middle: `1fr auto 1fr`,
                  right: `1fr auto`
              }
              return alignment[props.align]
          }};

          .menuButton {
              display: none;
          }

          ul {
              display: flex;
              flex-direction: row;
              grid-gap: 2rem;
              align-self: center;
              position: unset;
              top: unset;
              width: unset;
              box-shadow: unset;

              li {
                  background: unset;
                  padding-top: unset;
                  padding-bottom: unset;
                  position: relative;

                  &:hover {
                      background: unset;
                      
                      button, a {
                          color: ${(props) => lighten(0.2, props.accentColor)};
                      }
                  }

                  &::after {
                      content: '';
                      position: absolute;
                      display: block;
                      height: 4px;
                      background: ${(props) => lighten(0.2, props.accentColor)};
                      width: 0%;
                      bottom: -19px;
                      transition: width 0.5s ease-in-out;
                  }

                  &:hover::after {
                      width: 100%;
                  }
              }
          }
      }
  `

  const args = {
      backgroundColor: '#F7FBFF',
      accentColor: '#33CCFF',
      paddingSide: 5,
      align: 'right',
      links: [
            { name: 'Services', route: '/services'},
            { name: 'Projects', route: '/projects'},
      ],
      menu: 'https://static.thenounproject.com/png/659803-200.png',
      visible: false,
      white: '#F7FBFF',
      black: '#202125',
  }

  useEffect(() => console.log(activeLink), [activeLink])

      return (
            <StyledNavigation {...args}>
                  <div onClick = {() => handleClick("/")}>
                        <Logo />
                  </div>
                  <button 
                  className='menuButton'
                  onClick={changeVisible}
                  />
                  <ul>
                  {args.links.map(link => (
                        <li className={activeLink === link.route ? `active` : `inactive`}>
                              <button
                              onClick={() => { 
                              handleClick(link.route)
                              }}
                              >{link.name}</button>
                        </li>
                  )) }
                  <li>
                        <a href="mailto:alfred.adeoye@cantab.net?subject=Website Development Enquiry">Contact</a>
                  </li>
                  </ul>
            </StyledNavigation>
      )
}

export default Navbar

