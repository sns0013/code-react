import React, {useState}  from 'react'
import { Row, Col, Container, Dropdown, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CustomToggle from '../components/dropdowns'
import ShareOffcanvas from '../components/share-offcanvas'

//image
import user1 from '../assets/images/user/1.jpg'
import user01 from '../assets/images/user/01.jpg'
import user2 from '../assets/images/user/02.jpg'
import user3 from '../assets/images/user/03.jpg'
import user4 from '../assets/images/user/04.jpg'
import img1 from '../assets/images/small/07.png'
import img2 from '../assets/images/small/08.png'
import img3 from '../assets/images/small/09.png'
import img4 from '../assets/images/small/10.png'
import img5 from '../assets/images/small/11.png'
import img6 from '../assets/images/small/12.png'
import img7 from '../assets/images/small/13.png'
import img8 from '../assets/images/small/14.png'
import g2 from '../assets/images/page-img/graph2.png'
import g3 from '../assets/images/page-img/graph3.png'
import p1 from '../assets/images/page-img/p1.jpg'
import p2 from '../assets/images/page-img/p2.jpg'
import p3 from '../assets/images/page-img/p3.jpg'
import p4 from '../assets/images/page-img/p4.jpg'
import p5 from '../assets/images/page-img/p5.jpg'
import icon1 from '../assets/images/icon/01.png'
import icon2 from '../assets/images/icon/02.png'
import icon3 from '../assets/images/icon/03.png'
import icon4 from '../assets/images/icon/04.png'
import icon5 from '../assets/images/icon/05.png'
import icon6 from '../assets/images/icon/06.png'
import icon7 from '../assets/images/icon/07.png'



const Index = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} className="row m-0 p-0">
                        <Col sm={12} >
                            <Card id="post-modal-data" className="card-block card-stretch card-height">
                                <Card.Body >
                                    <div className="d-flex align-items-center">
                                        <div className="user-img">
                                            <img src={user1} alt="user1" className="avatar-60 rounded-circle"/>
                                        </div>
										<form className="comment-text d-flex align-items-center ms-3 w-100" onClick={handleShow}>
                                            <input type="text" className="form-control rounded" placeholder="Let your voice be heard!"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
 
                                    </div>
                                </Card.Body>
                                <Modal size="lg" className=" fade" id="post-modal" onHide={handleClose} show={show} >
                                    <Modal.Header  className="d-flex justify-content-between">
                                        <Modal.Title id="post-modalLabel">Contribute to a Issue</Modal.Title>
                                        <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                            </div>
										<form className="comment-text d-flex align-items-center ms-3 w-100" onClick={handleShow}>
                                            <input type="text" className="form-control rounded" placeholder="Let your voice be heard!"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                        </div>
                                        <hr/>
										<div className="d-flex align-items-center">
										<form className="comment-text d-flex align-items-center ms-3 w-100" onClick={handleShow}>
                                            <input type="text" className="form-control rounded" placeholder="Start typing to tag your issue..."/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                            </div>
                                        </form>
										</div>
                                        <button type="submit" className="btn btn-primary d-block w-100 mt-3">Contribute</button>
                                    </Modal.Body>
                                </Modal>
                            </Card>
                        </Col>
						<Col sm={12}>
							<Card className=" card-block card-stretch card-height">
								<Card.Body>
								
									<div className="d-flex justify-content-between">
									<div>
									<h4>View what matters to you:</h4>
									</div>
									<div>
										<Dropdown color='#D86017'>
										  <Dropdown.Toggle id="dropdown-basic">
											Issue
										  </Dropdown.Toggle>

										  <Dropdown.Menu>
											<Dropdown.Item href="#/action-1">All</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Hunger</Dropdown.Item>
											<Dropdown.Item href="#/action-3">LGTBQIA+</Dropdown.Item>
											<Dropdown.Item href="#/action-4">Racial Equality</Dropdown.Item>
											<Dropdown.Item href="#/action-5">Gender Equality</Dropdown.Item>
											<Dropdown.Item href="#/action-6">Accessability</Dropdown.Item>
										  </Dropdown.Menu>
										</Dropdown>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
                        <Col sm={12}>
                            <Card className=" card-block card-stretch card-height">
                                <Card.Body>
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={user01} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Anna Sthesia</h5>
                                                        <span className="mb-0 ps-1 d-inline-block">Add New Post</span>
                                                        <p className="mb-0 text-primary">Just Now</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                            <i className="ri-more-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-notification-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Notifications</h6>
                                                                                <p className="mb-0">Turn on notifications for this post</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                        </div>
                                        <div className="user-post">
                                            <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                                <div className="row-span-2 row-span-md-1">
                                                    <img src={p2} alt="post1" className="img-fluid rounded w-100"/>
                                                </div>
                                                <div className="row-span-1">
                                                    <img src={p1} alt="post2" className="img-fluid rounded w-100"/>
                                                </div>
                                                <div className="row-span-1 ">
                                                    <img src={p3} alt="post3" className="img-fluid rounded w-100"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-area mt-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block position-relative d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="like-data">
                                                            <Dropdown>
                                                                <Dropdown.Toggle  as={CustomToggle} >
                                                                    <img src={icon1} className="img-fluid" alt=""/>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className=" py-2">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                140 Likes
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div className="total-comment-block">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            20 Comment
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <ShareOffcanvas />
                                            </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12}>
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={user3} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex  justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Barb Ackue</h5>
                                                        <span className="mb-0 ps-1 d-inline-block">Added New Image in a Post</span>
                                                        <p className="mb-0 text-primary">1 hour ago</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                                <i className="ri-more-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Notifications</h6>
                                                                            <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <Link to="#"><img src={p4} alt="post1" className="img-fluid rounded w-100"/></Link>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <Dropdown>
                                                            <Dropdown.Toggle  as={CustomToggle} >
                                                                <img src={icon1} className="img-fluid" alt=""/>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className=" py-2">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            140 Likes
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                        20 Comment
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <ShareOffcanvas />
                                        </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex ">
                                                    <div className="user-img">
                                                        <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex ">
                                                    <div className="user-img">
                                                        <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>    
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={user4} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className=" d-flex  justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Ira Membrit</h5>
                                                        <p className="mb-0 ps-1 d-inline-block">Update her Status</p>
                                                        <p className="mb-0 text-primary">6 hour ago</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                                <i className="ri-more-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Notifications</h6>
                                                                            <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <Dropdown>
                                                            <Dropdown.Toggle  as={CustomToggle} >
                                                                <img src={icon1} className="img-fluid" alt=""/>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className=" py-2">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            140 Likes
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                        20 Comment
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <ShareOffcanvas />
                                        </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex ">
                                                    <div className="user-img">
                                                        <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="post-item">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid avatar-60" src={user1} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">User Name</h5>
                                                        <p className="ms-1 mb-0 ps-1 d-inline-block">Changed Profile Picture</p>
                                                        <p className="mb-0">3 day ago</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="bg-transparent border-white">
                                                            <i className="ri-more-fill"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="h4">
                                                                        <i className="ri-save-line"></i>
                                                                    </div>
                                                                    <div className="data ms-2">
                                                                        <h6>Save Post</h6>
                                                                        <p className="mb-0">Add this to your saved items</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className= "p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                    <i className="ri-close-circle-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Hide Post</h6>
                                                                        <p className="mb-0">See fewer posts like this.</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                    <i className="ri-notification-line h4"></i>
                                                                    <div className="data ms-2">
                                                                        <h6>Notifications</h6>
                                                                        <p className="mb-0">Turn on notifications for this post</p>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-post text-center">
                                    <Link to="#"><img src={p5} alt="post1" className="img-fluid rounded w-100 mt-3"/></Link>
                                </div>
                                <div className="comment-area mt-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="like-block position-relative d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div className="like-data">
                                                    <Dropdown>
                                                        <Dropdown.Toggle  as={CustomToggle} >
                                                            <img src={icon1} className="img-fluid" alt=""/>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className=" py-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="total-like-block ms-2 me-3">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                        140 Likes
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="total-comment-block">
                                                <Dropdown>
                                                    <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                    20 Comment
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                        <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <ShareOffcanvas />
                                    </div>
                                    <hr/>
                                    <ul className="post-comments list-inline p-0 m-0">
                                        <li className="mb-2">
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                </div>
                                                <div className="comment-data-block ms-3">
                                                    <h6>Monty Carlo</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                                        <Link to="#">like</Link>
                                                        <Link to="#">reply</Link>
                                                        <Link to="#">translate</Link>
                                                        <span> 5 min </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                </div>
                                                <div className="comment-data-block ms-3">
                                                    <h6>Paul Molive</h6>
                                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                                        <Link to="#">like</Link>
                                                        <Link to="#">reply</Link>
                                                        <Link to="#">translate</Link>
                                                        <span> 5 min </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <form className="comment-text d-flex align-items-center mt-3" >
                                        <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                        <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={user2} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">Paige Turner</h5>
                                                        <p className="mb-0 ps-1 d-inline-block">Added New Video in his Timeline</p>
                                                        <p className="mb-0 text-primary">1 day ago</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                                <i className="ri-more-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Notifications</h6>
                                                                            <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <div className="ratio ratio-16x9">
                                            <iframe title="vedio" src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0f" ></iframe>
                                        </div>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                <img src={icon1} className="img-fluid" alt=""/>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className=" py-2">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            140 Likes
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                        20 Comment
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <ShareOffcanvas />
                                        </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex flex-wrap">
                                                    <div className="user-img">
                                                        <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex flex-wrap">
                                                    <div className="user-img">
                                                        <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#">reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3">
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-mic-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Issues</h4>
                                </div>	
                            </div>
							<img src={g2} alt="post2" className="img-fluid rounded w-100"/>
                            <Card.Body>
                                <ul className="media-story list-inline m-0 p-0">
                                    
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Electorate at a Glance</h4>
                                </div>
                            </div>
							<img src={g3} alt="post2" className="img-fluid rounded w-100"/>
                            <Card.Body>
                                <ul className="media-story list-inline m-0 p-0">

                                </ul>
                            </Card.Body>
                        </Card>
                      
                    </Col>
                </Row>
            </Container>                
        </>
    )
}

export default Index
