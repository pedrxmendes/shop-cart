import React from 'react';
import ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products(props) {
    return (
        <div className="row p-3 border-bottom">
            <div className="col-4 p-2">
                <img className='w-100' src={props.trufimg} alt=''></img>
            </div>
            <div className="col-8">
                <p className='fw-bold fs-6'>{props.trufname}</p>
                <small className='text-muted'>R$ {props.trufpriceby}</small>
                <p className='fw-bold '>R$ {props.trufprice}</p>
            </div>
        </div>        
    );
    
}
