import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='Quran'onClick={toggle}>Quran</SidebarLink>
          <SidebarLink to='Tafsiir'onClick={toggle}>Tafsiir</SidebarLink>
          <SidebarLink to='Hadith'onClick={toggle}>Hadith</SidebarLink>
          <SidebarLink to='Books'onClick={toggle}>Books</SidebarLink>
        </SidebarMenu>
       
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
