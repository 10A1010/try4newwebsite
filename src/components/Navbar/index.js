import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBtn>
            <NavBtnLink to='/'>Islamic Resources in Somali</NavBtnLink>
          </NavBtn>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='Quran'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Quran
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='Tafsiir'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Tafsiir
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='Hadith'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Hadith
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='Books'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Books
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo to='/'> بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
