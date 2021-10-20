import { useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { Container, Row, Col } from 'reactstrap';
import Photo from './PhotoComponent';
import Loading from './LoadingComponent';

function SnappedPhotoGallery({ query }) {
  const { images, loading, doSearch } = useContext(AppContext);

  useEffect(() => {
    doSearch(query);
  }, [query]);

  const PhotoGallery = () => images.map((queried_image) => {
    let farm = queried_image.farm;
    let server = queried_image.server;
    let id = queried_image.id;
    let secret = queried_image.secret;
    let title = queried_image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return(
      <Col xs="12" sm="6" md="3" className="p-3">
        <Photo url={url} title={title} key={id} />
      </Col>
    );
  });

  return(
    <div className="snapped_photo_gallery">
      <Container>
        <Row>
            {loading ? <Loading /> : <PhotoGallery /> }
        </Row>
      </Container>
    </div>
  );

}

export default SnappedPhotoGallery;
