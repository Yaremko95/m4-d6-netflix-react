import React, { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import links from "../constants/links";

class NetflixNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }

  searchStringHandler = (e) => {
    this.setState({ searchString: e.target.value });
  };
  onSearch = () => {
    const { searchString } = this.state;
    this.props.onSearch && this.props.onSearch(searchString);
  };
  render() {
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand href="/">
          <img
            src="assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {links.map((link) => (
              <Nav.Link as={Link} to={link.path}>
                <span
                  className={
                    this.props.location.pathname === link.path ? "active" : ""
                  }
                >
                  {link.label}
                </span>
              </Nav.Link>
            ))}
          </Nav>
          <span className="d-none d-md-flex align-items-center">
            <InputGroup className="icons">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={(e) => e.key === "Enter" && this.onSearch()}
                onChange={this.searchStringHandler}
                value={this.state.searchString}
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NetflixNavbar);
