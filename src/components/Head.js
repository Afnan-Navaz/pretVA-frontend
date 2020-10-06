import React from 'react';

function Head(){
    return(
        <div className="container">
            <div className="my-5">
                <p><span className="font-weight-bold">Search</span> / Search Buyer Requirements</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="box px-4 py-2 bx1 mr-1">
                    <p>Search Supplier Product</p>
                </div>
                <div className="box px-4 py-2 bx2 shadow">
                    <p>Search Buyer Product</p>
                </div>
            </div>
        </div>
    );
};

export default Head;