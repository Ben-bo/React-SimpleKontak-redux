import { Container } from "react-bootstrap";
import "./App.css";
import KontakComponent from "./component/kontak/KontakComponent";
import NavbarComponent from "./component/navbar/NavbarComponent";
function App() {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <KontakComponent />
      </Container>
    </div>
  );
}

export default App;
