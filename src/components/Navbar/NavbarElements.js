import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
export const Nav = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    height: 80px;
    z-index: 10;
    justify-content: center;
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    color: #fff;
    align-items: center;
    margin-top: -80px;
    font-size: 1rem;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    justify-self: flex-start;
    font-size: 1.5rem;
    align-items: center;
    display: flex;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -22px;
  padding: 0; 
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

`