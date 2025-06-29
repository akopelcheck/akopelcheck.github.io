import './projectCard.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, AnimatePresence } from 'framer-motion';


function ProjectCard(props) {
    return(

            <motion.p
                                        className="mt-3 fw-normal"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: .5}}
                                      >
        <Card className="card" style={{ width: '80%' }}>
            <Row className="g-0">
                <Col md={3} className='d-flex align-items-center m-4'>
                    <Card.Img className='project-card-img' variant="top" src={require('../../img/' + props.imgName)} />
                </Col>
                <div class="vr me-4 item-separator"></div>
                <Col md={5} className='d-flex align-items-center'>
                    <Card.Body>
                        <Card.Title className='title-card'>{props.name}</Card.Title>
                        <Card.Subtitle className='subtitle-card'>{props.year}</Card.Subtitle>
                        <Card.Text className='desc'>
                            {props.desc}
                        </Card.Text>
                    </Card.Body>
                </Col>
                <div class="vr me-4 item-separator"></div>
                <Col md={2} className='d-flex align-items-center'>
                    <Card.Body>
                        <Card.Title className='title-card'>Skills Gained</Card.Title>
                        <Card.Text className='desc' style={{whiteSpace: 'pre-line'}}>
                            {props.skills}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        </motion.p>
    );
}

export default ProjectCard