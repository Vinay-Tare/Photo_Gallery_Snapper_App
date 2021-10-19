import { useState } from "react";
import { Row, Col, Container, Form, Button, Input } from "reactstrap";

function Header({handleSearch}) {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="header">
      <Container>
        <Row className="text-center">
          <Col xs="12" md="4">
            <Row className="align-items-center">
              <Col xs="12" md="2">
                <span className="fa fa-camera-retro fa-3x pr-2"/>
              </Col>
              <Col xs="12" md="10">
                <h1> 
                  Snappy Gallery 
                </h1>
              </Col>
            </Row>
          </Col>
          <Col xs="12" md={{ size: "7", offset: "1" }}>
            <Form onSubmit={(event) => handleSearch(event, searchQuery)}>
                <Row form>
                  <Col xs="12" md="8" className="p-2">
                    <Input
                      type="search"
                      name="searchBar"
                      id="searchBar"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter Keywords . . ."
                    />
                  </Col>
                  <Col xs="12" md="4" className="p-2"> 
                    <Button block color="light" disabled={searchQuery===""}><span className="fa fa-search"> Search Photos</span></Button>
                  </Col>
                  </Row>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
