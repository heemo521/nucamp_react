import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const DirectoryCard = ({ campsite }) => {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg src={campsite.image} alt={campsite.name} width="100%" />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
};

export default DirectoryCard;
