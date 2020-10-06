import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAlt, faCommentDots, faShareAlt, faBookmark} from '@fortawesome/free-solid-svg-icons';

function Card({data}){
    return(
        <div className="col-lg-4 col-md-6">
            <div className="my-2 shadow-sm user-card">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="user p-3">
                            <FontAwesomeIcon className="d-block mx-auto" size="3x" icon={faUserAlt} />
                        </div>
                        <div className="ml-3 mt-2">
                            <h6 className="font-weight-bold">{data.buyer_name}</h6>
                            <p className="small mb-0 font-weight-bold">
                            Buyer, Sunshine Apparel Pvt. Ltd.
                            </p>
                            <p className="small mb-0 font-weight-bold">
                            Bangalore, Karnataka, India
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 details">
                        <div className="d-flex">
                            <p className="font-weight-bold">Requirement :</p>
                            <div className="ml-5">
                                <p className="small text-muted mb-0">Posted : March 2, 2020</p>
                                <p className="small text-muted mb-0">Expires : July 2, 2020</p>
                            </div>
                        </div>
                        <p><span className="font-weight-bold">Product :</span>{data.product_name}</p>
                        <div className="d-flex">
                            <p><span className="font-weight-bold">Weight :</span> {data.weight_gsm} gsm</p>
                            <p><span className="font-weight-bold ml-5">Length :</span> {data.quantity} mtrs</p>
                        </div>
                        <p><span className="font-weight-bold">Price :</span> INR {data.price_rs} / mtr</p>
                        <p><span className="font-weight-bold">Lead Time Provision :</span> {data.lead_time} months</p>
                        <p className="mb-0"><span className="font-weight-bold">Delivery Location :</span> New Delhi, India</p>
                    </div>
                </div>
                <div className="d-flex pt-3 pb-4">
                    <FontAwesomeIcon className="d-block mx-auto pointer" size="lg" icon={faUserAlt} />
                    <FontAwesomeIcon className="d-block mx-auto pointer" size="lg" icon={faCommentDots} />
                    <FontAwesomeIcon className="d-block mx-auto pointer" size="lg" icon={faShareAlt} />
                    <FontAwesomeIcon className="d-block mx-auto pointer" size="lg" icon={faBookmark} />
                </div>
            </div>
        </div>
    );
}

export default Card; 