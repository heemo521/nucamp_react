import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import RenderComments from './campsiteinfo/RenderComments';
import RenderCampsite from './campsiteinfo/RenderCampsite';

const CampsiteInfo = (props) => {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/directory">Directory</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
};

export default CampsiteInfo;

// <div className="row">
// {/* <div className="col-md-5 m-1">{this.state.selectedCampsite && this.renderSelectedHandler(this.state.selectedCampsite)}</div> */}
// <div className="col-md-5 m-1">{this.renderSelectedHandler(this.state.selectedCampsite)}</div>
// </div>
