import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
          <Header></Header> 
          <h1>---------------------------------------------------------------------------------------------</h1> 
          <Container>
         
      <Row>
        <Col lg={3}>
            <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
<h2>Main component</h2>

        </Col>

        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
    <h1>---------------------------------------------------------------------------------------------</h1> 
          <Footer></Footer>
        </div>
    );
};

export default Main;