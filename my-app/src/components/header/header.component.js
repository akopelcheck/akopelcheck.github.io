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
                    width="50"
                    height="50"
                    className="d-inline-block align-sub text-white me-4"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="text-white nav-element me-4" href="#home">About Me!</Navbar.Brand>
                <div class="vr me-4 nav-separator"></div>

                <div>
                    <Navbar.Brand href="#home">

                    <img
                        alt=""
                        src={require('../../img/experience-icon.png')} 
                        width="25"
                        height="25"
                        className="d-inline-block align-sub text-white me-4"
                        />

                    <Navbar.Brand className="text-white nav-element me-4" href="#home">Experience</Navbar.Brand>
                </Navbar.Brand>

                </div>
                <div class="vr me-4 nav-separator"></div>
                <div>
                    <Navbar.Brand href="#home">

                    <img
                        alt=""
                        src={require('../../img/skills-icon.png')} 
                        width="25"
                        height="25"
                        className="d-inline-block align-sub text-white me-4"
                        />
                        
                    <Navbar.Brand className="text-white nav-element me-4" href="#home">Skills</Navbar.Brand>
                    </Navbar.Brand>

                </div>
               <div class="vr me-4 nav-separator"></div>
               <div>
                <Navbar.Brand href="#home">

                <img
                    alt=""
                    src={require('../../img/project-icon.png')} 
                    width="25"
                    height="25"
                    className="d-inline-block align-sub text-white me-4"
                    />
                <Navbar.Brand className="text-white nav-element me-4" href="#home">Projects</Navbar.Brand>
                </Navbar.Brand>

                </div>
            </Container>
        </Navbar>
    );
}
export default Header;