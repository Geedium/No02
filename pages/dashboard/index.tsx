import Head from "next/head"

import Sidebar from "components/Sidebar"
import {Navbar, Nav} from "components/Navbar"
import { Col, Container, Row } from "react-bootstrap";

function handleSelect() {
  alert('Works!');
}

export default function Dashboard() : JSX.Element {
  return (<>
  <Head>
    <title>Dashboard</title>
  </Head>

  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>React Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link active={false} onSelect={handleSelect} href="#home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Container fluid>
    <Row>
      <Col sm={2}>1 of 1</Col>
      <Col sm={10}>2 of 2</Col>
    </Row>
  </Container>

  <style jsx global>{`
    body {
      background: #8c8f99;
    }
  `}</style>

  <div>

  </div>
  </>)
}