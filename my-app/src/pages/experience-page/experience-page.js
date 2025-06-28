import './experience-page.css';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';


function Experience() {

  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="Experience" data-theme='dark'>
      <div className='exp-page'>
        <h1 className='title'>My Experience</h1>
          <Container className="timeline-container py-5">
            <div className="timeline-line" />
            <Card.Body className='timeline-year-1'>
              <Card.Title>2025</Card.Title>
            </Card.Body>
             <Card.Body className='timeline-year-2'>
              <Card.Title>2024</Card.Title>
            </Card.Body>
            <Card.Body className='timeline-year-3'>
              <Card.Title>2023</Card.Title>
            </Card.Body>

            <Row className="timeline-row" key={0}>                
                <Col md={6} className="timeline-col-dsl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}

                  >
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title>Ohio State Driving Simulation Lab</Card.Title>
                        <Card.Subtitle className="mb-2 text-white">Fall 2022 - Summer 2025</Card.Subtitle>
                        <AnimatePresence>
                          {openIndex === 3 && (

                          <motion.p
                            className="mt-3 fw-normal"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                                ▪ Develop simulation scenarios using SimCreator and JavaScript to help advance driving-related research       
                                <br></br>
                                <br></br>
                                ▪ Capture and consolidate driving data such as lane position and speed with Python to discover relevant insights and trends 
                                <br></br>
                                <br></br>
                                ▪ Developed an application for driving data analysis using Python 
                          </motion.p>  
                          )}
                        </AnimatePresence>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>

                

                <Col md={6} className="timeline-col-willowtree">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}

                  >
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title>WillowTree</Card.Title>
                        <Card.Subtitle className="mb-2 text-white">Summer 2024</Card.Subtitle>
                        <AnimatePresence>
                          {openIndex === 2 && (

                          <motion.p
                            className="mt-3 fw-normal"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: .5}}
                          >
                           ▪ Helped develop and maintain the frontend codebase for the website of Ohio's leading liquor distributor        
                           <br></br>
                            <br></br>
                           ▪ Utilized React, SCSS, TypeScript, HTML and followed Agile software development methodology       
                           <br></br>
                            <br></br>
                           ▪ Wrote unit tests for various React components to ensure code quality and efficiency       
                           <br></br>
                            <br></br>
                           ▪ Researched and created a React Native project for an upcoming WillowTree app       
                           <br></br>
                            <br></br>
                           ▪ Collaborated with a cross-functional team utilizing project management tools such as Jira 
                          </motion.p>  
                          )}
                        </AnimatePresence>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>

                <Col md={6} className="timeline-col-nwsw">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}

                  >
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title>Nationwide Student Worker</Card.Title>
                        <Card.Subtitle className="mb-2 text-white">Fall 2023</Card.Subtitle>
                        <AnimatePresence>
                        {openIndex === 1 && (
                          <motion.p
                            className="mt-3 fw-normal"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: .5 }}
                          >
                          ▪ Continued development on an internally facing 
                            vendor logo page for Nationwide associates
                            <br></br>
                            <br></br> 
                          ▪ Presented the designs to the Nationwide CTO   
                          </motion.p>  
                        )}
                        </AnimatePresence>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>

                <Col md={6} className="timeline-col-nationwide">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                  >
                    <Card className="border-0 shadow-sm">
                      <Card.Body>
                        <Card.Title>Nationwide</Card.Title>
                        <Card.Subtitle className="mb-2 text-white">Summer 2023</Card.Subtitle>
                        <AnimatePresence>
                            {openIndex === 0 && (

                          <motion.p
                            className="mt-3 fw-normal"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            ▪ Enhanced leadership and project management 
                            skills through completion of Lean Six Sigma 
                            Yellow Belt certification               
                            <br></br>
                            <br></br>
                            ▪ Completed extensive research on generative
                             artificial intelligence technologies emerging 
                             in Fortune 500 companies
                            <br></br>
                            <br></br>
                            ▪ Led development on an internally facing 
                            vendor logo page for Nationwide associates 
                            using Figma 
                          </motion.p>  
                            )}
                        </AnimatePresence>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
          </Container>
      </div>
    </div>
  );
}

export default Experience;
