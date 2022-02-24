import DirectoryCard from './directory/DirectoryCard';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Directory = (props) => {
    const directory = props.campsites.map((campsite) => {
        return (
            <div className="col-md-5 m-1" key={campsite.id}>
                {/* <DirectoryCard campsite={campsite} onClick={props.onClick} /> */}
                <DirectoryCard campsite={campsite} />
            </div>
        );
    });

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
