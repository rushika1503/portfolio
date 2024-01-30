import React from 'react';
import './navbar.css';
import portfolioLogo from '../../assets/logo-no-background.png'
// import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink className={({ isActive }) =>
                    isActive
                        ? 'activeclassName'
                        : 'desktopMenuListItem'
                }  style={{ fontSize: '1.75rem', fontWeight: 'bold' }} as={Link} to="/home" > RUSHIKA SIRIGADDE</NavLink>

            <div className='desktopMenu'>
                {/* <Link className='desktopMenuListItem'>Home</Link> */}
                <NavLink className={({ isActive }) =>
                    isActive
                        ? 'activeclassName'
                        : 'desktopMenuListItem'
                } to="/project" >PROJECTS</NavLink>
                <NavLink  className={({ isActive }) =>
                    isActive
                        ? 'activeclassName'
                        : 'desktopMenuListItem'
                } to="/work">WORK</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? 'activeclassName'
                        : 'desktopMenuListItem'
                } to="/skills">SKILLS</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? 'activeclassName'
                        : 'desktopMenuListItem'
                } to="/contact">CONTACT</NavLink>
            </div>
            {/* <button className='desktopMenuBtn'>
        <img src={contactImg} alt="contactImg" className='desktopMenuBtnImg'/>Contact Me
    </button> */}
        </nav>
    )
}

{/* <NavLink className='desktopMenuListItem'  style={{fontSize:'1.75rem', fontWeight : 'bold'}}  as={Link} to="/home" > RUSHIKA SIRIGADDE</NavLink> */ }


export default navbar;