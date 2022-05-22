import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
export default function () {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="collapse navbar-collapse justify-content-between"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div
    //   className="collapse navbar-collapse justify-content-between"
    //   id="navbarSupportedContent"
    // >
    //   <ul className="navbar-nav d-flex justify-content-between">
    //     <li className="nav-item only-desktop">
    //       <a className="nav-link" id="side-nav-open" href="#">
    //         <span className="lnr lnr-menu"></span>
    //       </a>
    //     </li>
    //     <div className="d-flex flex-lg-row flex-column">
    //       <li className="nav-item active">
    //         <a className="nav-link" href={logo}>
    //           Home <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="about.html">
    //           About
    //         </a>
    //       </li>

    //       <li className="nav-item dropdown">
    //         <a
    //           className="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdown"
    //           role="button"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           Special Dishes
    //         </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //           <a className="dropdown-item" href="special-dishes.html">
    //             Beef Steak Sauce
    //           </a>
    //           <a className="dropdown-item" href="special-dishes.html">
    //             Salmon Zucchini
    //           </a>
    //         </div>
    //       </li>
    //     </div>
    //   </ul>

    //   <a
    //     className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
    //     href="#"
    //   >
    //     <img src={logo} alt="" />
    //   </a>
    //   <ul className="navbar-nav d-flex justify-content-between">
    //     <div className="d-flex flex-lg-row flex-column">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="menu.html">
    //           Menu
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="team.html">
    //           Team
    //         </a>
    //       </li>

    //       <li className="nav-item dropdown">
    //         <a className="nav-link" href="reservation.html">
    //           Reservation
    //         </a>
    //       </li>
    //     </div>
    //     <li className="nav-item">
    //       <a id="side-search-open" className="nav-link" href="#">
    //         <span className="lnr lnr-magnifier"></span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
