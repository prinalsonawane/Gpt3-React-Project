import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo1 from '../../assets/logo1.png'
import './Navbar.css'

const Menu = () => {
    return <div>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is GPT?</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
    </div>
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo1'>
                    <img src={logo1} alt='logo1' height='100px' width='100px'/>
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
                <div className='gpt3__navbar-sign'>
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                </div>
                <div className='gpt3__navbar-menu'>
                    {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}></RiCloseLine>
                    :  <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}></RiMenu3Line>}
                    {toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        )
}

export default Navbar;