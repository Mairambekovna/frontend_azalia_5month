import React from "react";
import { HeaderLink, HeaderWrapper } from "../styles";

const Header = () => {

    return (
        <HeaderWrapper>
            <h1>Interactive Notes Editor</h1>
            <nav>
                <HeaderLink to='/'>Home</HeaderLink>
                <HeaderLink to='/about'>About</HeaderLink>
            </nav>
        </HeaderWrapper>
    )
}

export default Header;