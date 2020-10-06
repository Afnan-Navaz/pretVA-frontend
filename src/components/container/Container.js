import React from 'react';
import Card from './Card';

function Container({productlist}){
    return(
        <div className="container mt-1">
            <div className="row">
                {productlist.map((x, i) => (
                    <Card key={i} data={x} />
                ))}
            </div>
        </div>
    );
}

export default Container; 