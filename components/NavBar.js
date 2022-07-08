import React, { useEffect, useState } from 'react'
import NavBarStyleClass from '../componentsStyle/NavBarStyle';

const metaverseIcon =  "icons/metaverse_logo.png";
const NavBarStyle = new NavBarStyleClass();

let NavBar = () => {

    const [scrollDown, setScrollDownVar] = useState(false);
    const changeScrollDownVar = () => {
        if(window.scrollY >= 50){
            setScrollDownVar(true);
        }else{
            setScrollDownVar(false);
        }
    };
    
    const mouseLeave = (e) => {
        e.target.style.color = "#f13d74"
    }
    
    const mouseOver = (e) => {
         e.target.style.color = "#8ed0e6";
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScrollDownVar);
    })

    return (
        <header style={scrollDown ? NavBarStyle.navHeaderScrollStyle : NavBarStyle.navHeaderStyle}>
            <nav style={NavBarStyle.navStyle}>
                <a href="#">
                    <img src={metaverseIcon} style={{height: '8vh', width: 'auto'}}></img> 
                </a>
                <a href="#2" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Metaverses</a>
                <a href="#3" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Crypto Exchanges</a>
                <a href="#4" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Crypto Staking</a>
                <a href="#5" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Crypto Investments</a>
                <a href="#6" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Our Services</a>
                <a href="#7" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>P2E NFTGaming</a>
                <a href="#8" style={NavBarStyle.linkNavStyle} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Contact</a>
            </nav>
        </header>
    )
}

export default NavBar;