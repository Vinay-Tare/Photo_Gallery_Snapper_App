import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import SnappedPhotoGallery from "./SnappedPhotoGalleryComponent";
import Header from "./HeaderComponent";
import Indicator from "./IndicatorComponent";

function Main() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    let url = `/search/${query}`;
    history.push(url);
  }, [query])

  const handleSearch = (event, searchQuery) => {
    event.preventDefault(); 
    setQuery(searchQuery);
  };

  return (
    <div className="main">
      <Jumbotron fluid className="m-0">
        <Container>
          <Row>
            <Col>
              <Header handleSearch={handleSearch}/>
            </Col>
          </Row>  
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col xs="12" className="p-0">
            { query && <Indicator message={query} />}
          </Col>
          <Col className="mt-3"> 
            <Switch>
              <Route exact path="/" render={() => <SnappedPhotoGallery query="photo_art" />} />
              <Route
                path="/search/:query" 
                render={(props) => <SnappedPhotoGallery query={props.match.params.query} />}
              />  
              <Redirect to="/" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
