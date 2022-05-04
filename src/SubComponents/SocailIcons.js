import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import {DarkTheme} from '../components/Thems'

const Icons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    position:fixed;
    bottom:0;
    left:2rem;
    z-index:3;

    &>*:not(:last-child){
        margin:0.3rem 0;
    }
`

const Line = styled.span`
    width:2px;
    height:8rem;
    background-color:${props => props.color === 'dark' ? DarkTheme.text :DarkTheme.body};
`

const SocailIcons = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/ma7moudemam"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text :DarkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/m7moud_emam2"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text :DarkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/m7moud.emam97/"}}>
                <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text :DarkTheme.body}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com/channel/UCClY1WL2OzCR2ACgzM-RAww"}}>
                <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text :DarkTheme.body}/>
            </NavLink>
        </div>
        <Line color={props.theme}/>
    </Icons>
  )
}

export default SocailIcons