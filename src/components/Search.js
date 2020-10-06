import React, {useRef, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

function Search({selected, details, setToggle, setDataobj, dataobj}){
    const reffer = useRef();
    const [listt, setListt] = useState([]);
    const onclick = () => {
        setToggle(toggle => !toggle);
    }
    const sub = () => {
        let name = reffer.current.value;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        setDataobj(dataobj => ({
            ...dataobj,
            buyer_name: name
        }));
        setToggle(toggle => !toggle);
        reffer.current.value = "";
    }
    useEffect(() => {
        setListt([]);
        for(let key in dataobj){
            let sufix = "";
            if(key === "weight_gsm"){
                sufix = "gsm"
            }else if(key === "length_mtr"){
                sufix = "mtrs"
            }else if(key === "fabric_quality"){
                sufix = "months"
            }
            if(dataobj[key]){
                setListt(listt => [...listt, {value : dataobj[key], sufix, key}]);
            }
        }
    }, [dataobj]);
    const clearr = () => {
        setDataobj({
            buyer_name: null, 
            product_name: null,  
            weight_gsm: null,
            fabric_quality: null,
            length_mtr: null
        });
        setToggle(toggle => !toggle);
    }
    const clearone = (key) => {
        setDataobj(dataobj => ({
            ...dataobj,
            [key] : null
        }))
        setToggle(toggle => !toggle);
    }
    return(
        <div className="container">
            <div className="d-block mx-auto mt-4 p-3 search-box shadow-sm">
                <p className="font-weight-bold ml-3">Search Filter</p>
                <div className="form-row sel">
                    <div className="form-group col">
                        <select name="buyer_name" onChange={selected} id="inputState" className="form-control">
                            <option>Buyer</option>
                            {
                                details.buyer_name && details.buyer_name.map((x, i) => {
                                    if(x){
                                        return(
                                            <option key={i}>{x}</option>
                                        );
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <select name="product_name" onChange={selected} id="inputState" className="form-control">
                            <option>Product</option>
                            {
                                details.product_name && details.product_name.map((x, i) => {
                                    if(x){
                                        return(
                                            <option key={i}>{x}</option>
                                        );
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <select name="weight_gsm" onChange={selected} id="inputState" className="form-control">
                            <option>Weight</option>
                            {
                                details.weight_gsm && details.weight_gsm.map((x, i) => {
                                    if(x){
                                        return(
                                            <option key={i}>{x}</option>
                                        );
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <select name="fabric_quality" onChange={selected} id="inputState" className="form-control">
                            <option>Quality</option>
                            {
                                details.fabric_quality && details.fabric_quality.map((x, i) => {
                                    if(x){
                                        return(
                                            <option key={i}>{x}</option>
                                        );
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <select name="length_mtr" onChange={selected} id="inputState" className="form-control">
                            <option>Length</option>
                            {
                                details.length_mtr && details.length_mtr.map((x, i) => {
                                    if(x){
                                        return(
                                            <option key={i}>{x}</option>
                                        );
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <button onClick={onclick} className="btn btn-sm btn-outline-secondary rounded-pill ml-2" type="button">Apply Filters</button>
                    </div>
                </div>
            </div>
            <div className="d-flex mx-auto search-2">
                <div className="input-group mb-3 mt-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text blue" id="basic-addon1"></span>
                    </div>
                    <input ref={reffer} name="buyer_name" type="text" className="form-control" placeholder="Search with name" aria-label="Username" aria-describedby="basic-addon1" />
                    <div onClick={sub} className="input-group-append">
                        <span className="input-group-text white">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>
                <button className="btn mt-3 shadow d-inline-block btn-outline-secondary rounded-pill ml-3" type="button">Post Product Requirements</button>
            </div>
            <div className="filter d-flex py-3">
                <p className="font-weight-bold">Search Filters:</p>
                {
                   listt.map((x, i) => (
                            <div onClick={() => clearone(x.key)} className="clear font-weight-light small py-1 px-3 rounded-pill ml-3" key={i}>
                                {x.value}
                                {x.sufix && ` ${x.sufix}`}
                                <FontAwesomeIcon className="ml-2" icon={faTimes} size="sm" />
                            </div>
                        ))
                }
                {
                    (listt.length > 0) && (
                        <div onClick={clearr} className="clear clear-main font-weight-light small py-1 px-3 rounded-pill ml-3">
                            Clear All
                            <FontAwesomeIcon className="ml-2" icon={faTimes} size="sm" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Search;