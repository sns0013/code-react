import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Container,
  Collapse,Dropdown, Form, Card, Image
} from "react-bootstrap";
import Button from '@restart/ui/esm/Button'
import user1 from '../../../assets/images/user/1.jpg'
import user2 from '../../../assets/images/user/02.jpg'
import user3 from '../../../assets/images/user/03.jpg'
import { Link } from "react-router-dom";

import { FaHome, FaMapMarkerAlt, FaGraduationCap, FaBell, FaEnvelope } from "react-icons/fa";

// Import Logo
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

class NavbarPage extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed={this.props.top === true ? "top" : ""}
          className={this.props.navClass + " navbar-custom sticky sticky-dark"}
          id="navbar"
        >
		<Container>
			{/* LOGO */}
			<NavbarBrand className="navbar-brand logo text-uppercase" href="/">
			{this.props.imglight === true ? (
			<img src={logolight} alt="" height="22" />
			) : (
			<img src={logodark} alt="" height="22" />
			)}
			</NavbarBrand>
				<ul className="navbar-nav ml-auto navbar-center">
					<li className="nav-item">
						<Link to="/electorate"><FaMapMarkerAlt /></Link>
						<Link to="/"><FaGraduationCap /></Link> 
						<Link to="/"><FaHome /></Link>
						<Link to="/"><FaBell /></Link>
						<Link to="/"><FaEnvelope /></Link>
					</li>
				</ul>
				
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

		</Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;