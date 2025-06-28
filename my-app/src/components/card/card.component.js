import ImageCard from '../img-card/img-card.component';
import './card.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Card2(props){
    let imgAddition = <div></div>

    if(props.hasImg){
        imgAddition = 
            <Col md={4} className='d-flex align-items-center'>
                <Card.Img className='card-img' variant="top" src={require('../../img/' + props.imgName)} />
            </Col>
    }

    return(
        <Card className="card" style={{ width: '80%' }}>
            <Row className="g-0">
                <Col md={8} className='d-flex align-items-center'>
                    <Card.Body>
                        <Card.Title className='title-card'>{props.title}</Card.Title>
                        <Card.Text className='desc'>
                            {props.description}
                        </Card.Text>
                    </Card.Body>
                </Col>
                {imgAddition}
            </Row>
        </Card>
    );
}

export default Card2;