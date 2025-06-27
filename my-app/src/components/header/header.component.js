import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './header.css'

function Header(){

    return(
        <Navbar className="header w-80">
            <Container >
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={require('../../img/icon-me.png')} 
                    width="70"
                    height="70"
                    className="d-inline-block align-center text-white me-4"
                    />{''}
                </Navbar.Brand>
                <Navbar.Brand className="text-white nav-element me-4" href="#home">About Me!</Navbar.Brand>
                
                <div class="vr me-4 nav-separator"></div>

                <img
                    alt=""
                    src={require('../../img/experience-icon.png')} 
                    width="30"
                    height="30"
                    className="d-inline-block align-center text-white me-4"
                    />
                <Navbar.Brand className="text-white nav-element me-4" href="#home">Experience</Navbar.Brand>
                
                <div class="vr me-4 nav-separator"></div>
                <img
                    alt=""
                    src={require('../../img/skills-icon.png')} 
                    width="30"
                    height="30"
                    className="d-inline-block align-center text-white me-4"
                    />
                    
                <Navbar.Brand className="text-white nav-element me-4" href="#home">Skills</Navbar.Brand>
               <div class="vr me-4 nav-separator"></div>
                <img
                    alt=""
                    src={require('../../img/project-icon.png')} 
                    width="30"
                    height="30"
                    className="d-inline-block align-center text-white me-4"
                    />
                <Navbar.Brand className="text-white nav-element me-4" href="#home">Projects</Navbar.Brand>

            </Container>
        </Navbar>
    );
}
export default Header;