import React, { Fragment }from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'

export default ({cart}) =>

<Fragment>
    {/*TITLE*/}
    <DocumentTitle title='Cart'></DocumentTitle>

    {/*HEADER*/}
    <div className="sticky-top sticky-nav">
        <div className="row text-center">
            <div className="col-md title">
                <h1>Cart</h1>
                <Link to="/catalog"><kbd><i className="fas fa-chevron-left"></i> GO BACK</kbd></Link>
            </div>
        </div><br/>
    </div>

    {/*BODY*/}
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Price</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(({id,item,quantity,price}) => 
                <tr key={id}>
                    <td>{item}</td>
                    <td>{quantity}</td>
                    <td>${price}</td>
                    <td>${quantity*price}</td>
                    <td><button type="button" className="btn btn-sm btn-danger">Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
        <div className="offset-md-8">
            <h2>Total: </h2>
        </div>
    </div>
</Fragment>
