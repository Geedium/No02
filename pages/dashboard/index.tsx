import Head from "next/head"

import Sidebar from "components/Sidebar"
import {Navbar, Nav} from "components/Navbar"

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

  <div>

  </div>
  </>)
}