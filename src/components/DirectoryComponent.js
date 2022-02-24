import DirectoryCard from './directory/DirectoryCard';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderDirectoryItem = ({ campsite }) => {
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

const Directory = (props) => {
    const directory = props.campsites.campsites.map((campsite) => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    if (props.campsites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.campsites.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">{directory}</div>
        </div>
    );
};

export default Directory;

// <div>
//   <Card inverse>
//     <CardImg
//       alt="Card image cap"
//       src="https://picsum.photos/318/270"
//       width="100%"
//     />
//     <CardImgOverlay>
//       <CardTitle tag="h5">
//         Card Title
//       </CardTitle>
//       <CardText>
//         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//       </CardText>
//       <CardText>
//         <small className="text-muted">
//           Last updated 3 mins ago
//         </small>
//       </CardText>
//     </CardImgOverlay>
//   </Card>
// </div>
