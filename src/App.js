import { Container } from "react-bootstrap";
import "./App.css";
import Carousels from "./Components/Carousels";
import Menu from "./Components/Menu";
import CollapsibleExample from "./Components/Navbar";
import About from "./Components/About";
import OFFers from "./Components/OFFers";
import OFFersParts from "./Components/OFFersParts";
import Rent_Text from "./Components/Rent_Text";
import Rent_Card from "./Components/Rent_Card";
import Productlike from "./Components/Productlike";
import ProductLikecontent from "./Components/ProductLike-content";
import More from "./Components/More";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Menu />
      <Container>
        <Carousels />
        <About />
        <OFFers />
        <OFFersParts />
        <Rent_Text />
        <Rent_Card />
        <Productlike />
        <ProductLikecontent />
        <More/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
