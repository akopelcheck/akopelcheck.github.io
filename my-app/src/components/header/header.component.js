import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";
import { useState } from "react";

import './header.css'

function Header(){


    return(
        <div className='nav-container'>
            <Navbar className="header w-80">
                <Container >
                    <Navbar.Brand 
                        href="/">
                            <img
                                alt=""
                                src={require('../../img/icon-me.png')} 
                                width="50"
                                height="50"
                                className="d-inline-block align-sub text-white me-4" 
                            />
                    </Navbar.Brand>
                      <motion.div
                    whileHover={{ scale: 1.2}}>
                    <Navbar.Brand 
                        className="text-white nav-element me-4" 
                        href="/"
                        //onClick={showSelector("Experience")}
                        // onMouseOver={() => setHoveredPath(item.path)}
                        // onMouseLeave={() => setHoveredPath(pathname)}
                        >About Me!
                    </Navbar.Brand>
                    </motion.div>
                    <div class="vr me-4 nav-separator"></div>

                    <div>
                      <motion.div
                        whileHover={{ scale: 1.2}}>
                        <Navbar.Brand href="#/experience">

                        <img
                            alt=""
                            src={require('../../img/experience-icon.png')} 
                            width="25"
                            height="25"
                            className="d-inline-block align-sub text-white me-4"
                            />

                        <Navbar.Brand className="text-white nav-element me-4" href="#/experience">Experience</Navbar.Brand>
                    </Navbar.Brand>
                    </motion.div>
                    </div>
                    <div class="vr me-4 nav-separator"></div>
                    <div>
                    <motion.div
                        whileHover={{ scale: 1.2}}>
                        <Navbar.Brand href="#/skills">

                        <img
                            alt=""
                            src={require('../../img/skills-icon.png')} 
                            width="25"
                            height="25"
                            className="d-inline-block align-sub text-white me-4"
                            />
                            
                        <Navbar.Brand className="text-white nav-element me-4" href="#/skills">Skills</Navbar.Brand>
                        </Navbar.Brand>
                    </motion.div>
                    </div>
                <div class="vr me-4 nav-separator"></div>
                <div>
                <motion.div
                        whileHover={{ scale: 1.2}}>
                    <Navbar.Brand href="#/projects">

                    <img
                        alt=""
                        src={require('../../img/project-icon.png')} 
                        width="25"
                        height="25"
                        className="d-inline-block align-sub text-white me-4"
                        />
                    <Navbar.Brand className="text-white nav-element me-4" href="#/projects">Projects</Navbar.Brand>
                    </Navbar.Brand>
                    </motion.div>
                    </div>
                </Container>
                
            </Navbar>
        </div>
    );
}
export default Header;