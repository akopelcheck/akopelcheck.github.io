import './home-card.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, AnimatePresence } from 'framer-motion';

function HomeCard(props){
    return(
        <motion.p
            className="mt-3 fw-normal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: .5}}
        >
        <Card className="card" style={{ width: '80%' }}>
            <Card.Title className='title-card'>{props.title}</Card.Title>
            <Card.Body className='home-card-body'>
                <Row className="g-0 justify-content-center">
                    <Col md={5} className='d-flex align-items-center justify-content-center pdf-item flex-1'>
                        {props.pdf1}
                    </Col>
                    <div className="vr doc-sep justify-content-center "></div>
                    <Col md={5} className='d-flex align-items-center justify-content-center pdf-item flex-1'>
                    {props.pdf2}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </motion.p>
    );
}

export default HomeCard