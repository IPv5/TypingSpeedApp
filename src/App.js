import './App.css';
import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import TypingArea from './components/Typingarea/TypingArea';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <SideBar />
          <TypingArea />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
