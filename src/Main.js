import React from "react";
import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';

const trufs = require('./assets/json/acima-10-reais.json');

export default function Main(props) {
    return  <div>
                <div className="border-bottom text-center p-3">
                    <h5 className="fw-bold">Meu carrinho</h5>
                </div>
                {trufs.items.map(items => (
                    <Products trufimg={items.imageUrl} trufname={items.name} trufpriceby={Math.min((items.listPrice)/100)} trufprice={items.sellingPrice*0.01}/>
                ))}
                <div className="container border-bottom">
                    <div className="row">
                        <div className="col fw-bold">Total</div>
                        <div className="col text-end fw-bold">R$ {trufs.value*0.01}</div>
                    </div>
                    {trufs.value >= 1000 ? (
                        <div className="text-center">
                            <div className="alert alert-success rounded-pill p-2 m-2 fw-bold">Parabéns, sua compra tem frete grátis!</div>
                        </div>
                        ) : null
                    }    
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg fw-bold p-2 m-2 mt-3 w-100">Finalizar compra</button>
                </div>
            </div>   
}