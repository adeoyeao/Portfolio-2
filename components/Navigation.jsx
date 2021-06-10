import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { useState } from 'react'

const Navigation = (args) => {
    const [visible, setVisible] = useState(false)
    const [activeLink, setActiveLink] = useState(args.activeLink)

    const changeVisible = () => {
        setVisible(!visible)
    }

    const handleClick = (route) => {
        setActiveLink(route)
        setVisible(false)
    }

    const StyledNavigation = styled.nav<NavigationProps>`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        height: 70px;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border-bottom: 1px solid #E5E5E5;

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
            grid-gap: 1rem;
            position: absolute;
            top: 70px;
            width: 100vw;

            li {
                list-style-type: none;
                background: ${(props) => darken(0.2, props.backgroundColor)};
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-align: center;

                &:hover {
                    background: ${(props) => props.accentColor};

                    button {
                        color: ${(props) => props.white};
                    }
                }

                button {
                    appearance: none;
                    outline: none;
                    border: none;
                    background: none;  
                    cursor: pointer;
                    color: ${(props) => lighten(0.2, props.black)};
                    height: 100%;
                    width: 100%;
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

                li {
                    background: unset;
                    padding-top: unset;
                    padding-bottom: unset;
                    position: relative;

                    &:hover {
                        background: unset;
                        
                        button {
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
                        bottom: -26px;
                        transition: width 0.5s ease-in-out;
                    }

                    &:hover::after {
                        width: 100%;
                    }
                }
            }
        }
    `

    return (
        <StyledNavigation {...args}>
            <img 
            src={args.logo}
            alt='Company Logo'/>
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
                            link.onClick(link.route)
                        }}
                        >{link.name}</button>
                    </li>
                )) }
            </ul>
        </StyledNavigation>
    )                                                                                                                                        
}

export default Navigation