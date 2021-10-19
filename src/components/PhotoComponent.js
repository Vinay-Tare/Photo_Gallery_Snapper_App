import { Card, CardImg } from 'reactstrap';

function Photo({url, title}) {
    return (
        <div className="photo">
            <Card>
                <CardImg width="100%" height="160px" src={url} alt={title}/>  
            </Card>
        </div> 
    );
}

export default Photo;
