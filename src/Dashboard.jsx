import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="px-3">
        <Navbar.Brand>Dashboard</Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>

          {/* Sidebar */}
          <Col
            xs={2}
            className="bg-light vh-100 border-end p-0"
          >
            <Nav className="flex-column pt-3">

              <Nav.Link
                as={Link}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/dashboard/category"
              >
                Category
              </Nav.Link>

            </Nav>
          </Col>

          {/* Main content */}
          <Col xs={10} className="p-4">
            <Outlet />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Dashboard;