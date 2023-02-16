import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import e1 from '../../assets/images/page-img/e1.png'
import e2 from '../../assets/images/page-img/e2.png'

const Electorate =() =>{
  return(
     <>
        <Container>
        <Row>
            <Col lg="6">
                <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Electorate</h4>
                    </div>
                </Card.Header>
                <Card.Body>
                   <img src={e1} alt="post2" className="img-fluid rounded w-100"/>
                </Card.Body>
                </Card>
            </Col>
            <Col lg="6">
                <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Senators</h4>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="acc-edit">
						<img src={e2} alt="post2" className="img-fluid rounded w-100"/>   
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
		<Row>

                <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Mayors</h4>
                    </div>
                </Card.Header>
                <Card.Body>
                   
                </Card.Body>
                </Card>
        </Row>
    </Container>
     </>
  )

}

export default Electorate;