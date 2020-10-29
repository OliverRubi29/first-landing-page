import React from 'react'
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'


function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute>Contact Us</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
