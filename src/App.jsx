import Dashboard from "./Dashboard";
import Category from "./Component/Category";
import { Routes, Route } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

function DashboardHome() {
  return (
    <>
      <h4 className="mb-3">Welcome</h4>

      <p className="text-muted mb-4">
        Left panel se "Products" ya "Category" select karein.
      </p>

      <Row className="g-3">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text className="fs-3 fw-semibold">
                128
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <Card.Text className="fs-3 fw-semibold">
                12
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text className="fs-3 fw-semibold">
                340
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
    
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;