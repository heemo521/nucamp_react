import { Card, CardImg, CardText, CardBody } from 'reactstrap';

const RenderCampsite = ({ campsite }) => {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default RenderCampsite;
