import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import AddContak from "./component/kontak/addContak";
import KontakComponent from "./component/kontak/KontakComponent";
import NavbarComponent from "./component/navbar/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <Row>
          <Col>
            <KontakComponent />
          </Col>
          <Col>
            <AddContak />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
