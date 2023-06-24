import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8" className="">
            لديك 4 مواعيد اليوم
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle">

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
