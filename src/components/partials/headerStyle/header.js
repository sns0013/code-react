import React from 'react'
import { Navbar, Dropdown, Nav, Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FaHome, FaMapMarkerAlt, FaGraduationCap, FaBell, FaEnvelope } from "react-icons/fa";

//image
import logo from '../../../assets/images/logo-dark.png'
import user1 from '../../../assets/images/user/1.jpg'
import user2 from '../../../assets/images/user/02.jpg'
import user3 from '../../../assets/images/user/03.jpg'
import Button from "../../../../node_modules/@restart/ui/esm/Button";

const Header = () => {


    return (
        <>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <Navbar expand="lg" variant="light" className="p-0">
                        <div className="iq-navbar-logo d-flex justify-content-between">
                            <Link to="/">
                                <Image src={logo} className="img-fluid" alt=""/>
                            </Link>
                        </div>
                        <Navbar.Collapse>
                            <Nav as="ul" className="ms-auto navbar-list">
								<Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="/" as={Button} className="d-flex align-items-center" variant="search-toggle">
                                        <FaGraduationCap color='#D86017'/>
                                    </Dropdown.Toggle>
                                </Dropdown>
                                
								<Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="/electorate" as={Button} className="d-flex align-items-center" variant="search-toggle">
                                        <FaMapMarkerAlt color='#D86017'/>
                                    </Dropdown.Toggle>
                                </Dropdown>
                                
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="/" as={Button} className="d-flex align-items-center" variant="search-toggle">
                                        <FaHome color='#D86017'/>
                                    </Dropdown.Toggle>
                                </Dropdown>
                                
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                                        <FaBell color='#D86017'/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop" aria-labelledby="group-drop">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="d-flex justify-content-between bg-primary">
                                                <div className="header-title bg-primary">
                                                    <h5 className="mb-0 text-white">All Notifications</h5>
                                                </div>
                                                <small className="badge bg-light text-dark">4</small>
                                            </Card.Header>
                                            <Card.Body className="p-0">
                                                <Link to="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <Image className="avatar-40 rounded" src={user1} alt=""/>
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Emma shared your contribution.</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <small className="float-right font-size-12">Just Now</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <Image className="avatar-40 rounded" src={user2} alt=""/>
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">New Comment</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <Image className="avatar-40 rounded" src={user3} alt=""/>
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Senator Updated</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                                        <FaEnvelope color='#D86017'/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop dropdown-menu" aria-labelledby="mail-drop">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="d-flex justify-content-between bg-primary">
                                                <div className="header-title bg-primary">
                                                    <h5 className="mb-0 text-white">All Message</h5>
                                                </div>
                                                <small className="badge bg-light text-dark">4</small>
                                            </Card.Header>
                                            <Card.Body className="p-0 ">
                                                <Link to="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <Image className="avatar-40 rounded" src={user1} alt=""/>
                                                        </div>
                                                        <div className=" w-100 ms-3">
                                                            <h6 className="mb-0 ">Community Member</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <Image className="avatar-40 rounded" src={user2} alt=""/>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} bsPrefix="d-flex align-items-center search-toggle" >
                                        <Image src={user1} className="img-fluid rounded-circle me-3" alt="user"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="bg-primary">
                                                <div className="header-title">
                                                    <h5 className="mb-0 text-white">Hello User Name</h5>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="p-0 ">
                                                <Link to="/profile" className="iq-sub-card iq-bg-primary-hover d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="rounded card-icon bg-soft-primary">
                                                            <i className="ri-file-user-line"></i>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="mb-0 ">My Profile</h6>
                                                            <p className="mb-0 font-size-12">View personal profile details.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/user-account-setting" className="iq-sub-card iq-bg-info-hover d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="rounded card-icon bg-soft-info">
                                                            <i className="ri-account-box-line"></i>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="mb-0 ">Account settings</h6>
                                                            <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/user-privacy-setting" className="iq-sub-card iq-bg-danger-hover d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="rounded card-icon bg-soft-danger">
                                                            <i className="ri-lock-line"></i>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="mb-0 ">Privacy Settings</h6>
                                                            <p className="mb-0 font-size-12">Control your privacy parameters.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="d-inline-block w-100 text-center p-3">
                                                    <Link className="btn btn-primary iq-sign-btn" to="/auth/sign-in" role="button">Sign out
                                                        <i className="ri-login-box-line ms-2"></i>
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Header
