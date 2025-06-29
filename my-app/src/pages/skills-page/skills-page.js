import './skills-page.css';
import { Container, Row, Col, Card, Button, ToggleButtonGroup } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Skills() {


  let classroomSkills = [
    ['Java','Python','Kotlin','SQL','C#','Ruby','C','XML','MatLab','Assembly','Git','Unity','Android Studio',
      'Critical Thinking','Communication','Collaboration', 'Organization', 'Time Management', 'Adaptability'
    ],
    ['Java','Python','Kotlin','SQL','C#','Ruby','C','XML','MatLab','Assembly'],
    ['Git','Unity','Android Studio'],
    ['Critical Thinking','Communication','Collaboration', 'Organization', 'Time Management', 'Adaptability']]

  let internshipSkills = [
    ['Python','JavaScript','TypeScript','CSS','HTML','Figma','React','Angular','Agile','Jira','React Native','Storybook',
      'XCode','Go','Git',
      'Critical Thinking','Team Work','Collaboration', 'Organization', 'Time Management', 'Adaptability','Professionalism',
      'Attention to Detail','Receptiveness to Feedback','Research Gathering','Decision Making'
    ],
    ['Python','JavaScript','TypeScript','CSS','HTML'],
    ['Figma','React','Angular','Agile','Jira','React Native','Storybook',
      'XCode','Go','Git'],
    ['Critical Thinking','Team Work','Collaboration', 'Organization', 'Time Management', 'Adaptability','Professionalism',
      'Attention to Detail','Receptiveness to Feedback','Research Gathering','Decision Making']]

    let personalProjectSkills = [
      ['JavaScript','Python','C#','TypeScript','React','HTML','CSS','AWS','Jira','Unity',
        'Problem Solving','Time Management','Planning','Initiative','Creativity','Adaptability',
        'Continuous Learning','Resilience'],
      ['JavaScript','Python','C#','TypeScript','HTML','CSS'],
      ['React','AWS','Jira','Unity'],
      ['Problem Solving','Time Management','Planning','Initiative','Creativity','Adaptability',
        'Continuous Learning','Resilience']]

  const [filterNum, setfilterNum] = React.useState(0);
  const filter = filterNum ?? 0;

    const radios = [
    { name: 'All', value: '0' },
    { name: 'Languages', value: '1' },
    { name: 'Technologies', value: '2' },
    { name: 'Soft Skills', value: '3' },
  ];

  return (
    <div className="Skills" data-theme='dark'>
      <div className='skills-page'>
        <h1 className='title'>My Skills</h1>
        <Row>
        {/* TODO INSERT FILTER BUTTONS*/}
        <ToggleButtonGroup className='toggle-group' type="radio" name="filter" defaultValue={0}>
        {radios.map((radio, idx) => (
          <ToggleButton
           className='toggle-button'
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-light'
            name="radio"
            value={idx}
            checked={filter === idx}
            onChange={(e) => setfilterNum(parseInt(e.currentTarget.value))}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
          <Col>
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
            <Card>
              <Card.Title>Classroom</Card.Title>
              <ListGroup variant="dark" className='list-group'>
              <AnimatePresence>
                {classroomSkills[filter].map((skill) => (
                  <motion.Item
                    className="gp-0 fw-normal"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 'auto' }}
                    transition={{ duration: 2}}
                    >
                  <ListGroup.Item className='list-element'>{skill}</ListGroup.Item>
                  </motion.Item>
                ))}
                </AnimatePresence>
              </ListGroup>
              
            </Card>
            </motion.div>
          </Col>
          <Col>
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
            <Card>
              <Card.Title>Internships</Card.Title>
              <AnimatePresence>

              <ListGroup variant="flush" className='list-group'>
                {internshipSkills[filter].map((skill) => (
                   <motion.Item
                    className="gp-0 fw-normal"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 'auto' }}
                    transition={{ duration: 2}}
                    >
                  <ListGroup.Item className='list-element'>{skill}</ListGroup.Item>
                </motion.Item>
                ))}
                
              </ListGroup>
            </AnimatePresence>

            </Card>
            </motion.div>
          </Col>
          <Col>
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
            <Card>
              <Card.Title>Personal Projects</Card.Title>
              <AnimatePresence>

              <ListGroup variant="flush" className='list-group'>
                {personalProjectSkills[filter].map((skill) => (
                  <motion.Item
                    className="gp-0 fw-normal"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 'auto' }}
                    transition={{ duration: 2}}
                    >
                  <ListGroup.Item className='list-element'>{skill}</ListGroup.Item>
                </motion.Item>
                ))}
              </ListGroup>
            </AnimatePresence>

            </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills