import './home-page.css';
import Card2 from '../../components/card/card.component'
import useLocalStorage from 'use-local-storage'
import Header from '../../components/header/header.component'
import ImageCard from '../../components/img-card/img-card.component';
import resume from "../../pdfs/Alexandra-Kopelcheck-Resume-2025 (1).pdf"
import transcript from "../../pdfs/unoffical-transcript-2025.pdf"
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeCard from '../../components/home-page-card/home-card.component';

function Home() {

 const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="Home" data-theme='dark'>
      <div className='home-page'>
        <h1 className='title'>Alexandra Kopelcheck</h1>
         <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
        <Card2 
          title="About Me!" 
          description="I'm a recent graduate from The Ohio State University, 
                      where I earned my degree in Computer Science
                      and Engineering with a minor in Information Security, 
                      finishing with a GPA of 3.8.
                      
                      During my time at OSU, I engaged in 
                      research at the Ohio State University Driving Simulation Lab,
                      where I used Python to create a data analysis UI application for 
                      looking at driving behavioral data. I also developed custom 
                      driving scenarios for simulation studies that focused on driver 
                      safety and human factors.
                      
                      During my summers, I completed internships at Nationwide and WillowTree, 
                      gaining hands-on experience in web and app development, 
                      accessibility-focused design improvements, and presenting 
                      technical solutions to stakeholders.
                      
                      These experiences helped me develop strong technical and 
                      collaborative skills. I have a strong interest in software 
                      engineering roles, specifically in web development, where I 
                      can continue learning and contributing in fast-paced, 
                      team-oriented environments."
          hasImg={true}
          imgName="smile.JPG"
          imgW="200"
          imgH="200"
        />
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
        <HomeCard
          title="Documents"
          pdf1=
           <motion.div
                    whileHover={{ scale: 1.2}}>
            <a href={resume} target="_blank">
                        <Button  variant="outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                          </svg>
                          Alexandra-Kopelcheck-Resume-2025
                          </Button>
                      </a>
            </motion.div>
          pdf2=
          <motion.div
                    whileHover={{ scale: 1.2}}>
          <a href={transcript} target="_blank">
                    <Button  variant="outline-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                      </svg>
                      unoffical-transcript-2025
                    </Button>
                  </a>
                </motion.div>
        />
        {/* <Card2 
          title="Documents" 
          description={
            <>
            <Row className='doc-row'>
              <Col className='doc-col'>
                
                  <Row>
                      <a href={resume} target="_blank">
                        <Button  variant="outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                          </svg>
                          Alexandra-Kopelcheck-Resume-2025
                          </Button>
                      </a>
                  </Row>
              </Col>
              <Col></Col>
              <Col>
            
                <Row>
                  <a href={transcript} target="_blank">
                    <Button  variant="outline-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                      </svg>
                      unoffical-transcript-2025
                    </Button>
                  </a>
                </Row>
              </Col> 
            </Row>
            </>
          } 
          hasImg={false}
        /> */}
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
        <Card2 
          title="Socials" 
          description={
            <>
              LinkedIn: <a href="https://www.linkedin.com/in/alexandra-kopelcheck" target="_blank">https://www.linkedin.com/in/alexandra-kopelcheck</a>
              <br></br>
              GitHub: <a href="https://github.com/akopelcheck" target="_blank">https://github.com/akopelcheck</a>
            </>
          } 
          hasImg={false}
        />
        </motion.div>
     </div>
    </div>
  );
}

export default Home;
