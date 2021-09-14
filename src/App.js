import './App.css';
import SideBar from './components/Sidebar/SideBar';
import TypingArea from './components/Typingarea/TypingArea';
import NavBar from './components/Navbar/NavBar';
import StatsBar from './components/Statsbar/StatsBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <body className="no-select">
        <Container fluid>
          <Row>
            <SideBar />
            <TypingArea />
            <StatsBar />
          </Row>
        </Container>
      </body>

    </div>
  );
}

export default App;
