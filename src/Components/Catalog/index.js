import React, { Fragment }from 'react'
import {Link} from 'react-router-dom'
import DocumentTitle from 'react-document-title'

export default ({ match:{url}, tickets, numRows })=>
<Fragment>
    {/*TITLE*/}
    <DocumentTitle title='Ticket Catalog'></DocumentTitle>

    {/*HEADER*/}
    <div className="sticky-top sticky-nav">
            <div className="row text-center">
                <div className="col-md title">
                        <h1>Ticket Catalog</h1>
                    </div>
                </div>
            <div className="row">
                <div className="offset-md-10">
                    <Link to="/cart"><button type="button" className="btn btn-outline-dark">{numRows} Items in the Cart <i className="fas fa-shopping-cart"></i></button></Link>
                </div>
            </div><br/>
    </div>

    {/*BODY*/}
    <div className="card-columns row">
        {tickets.map(({id,artist,image}) =>
        <div key={id} className="col-md-4">
            <div className="card text-center">
                <Link to={`${url}/${id}`}>
                    <img className="card-img-top text-center" src={image} alt={"Logo of " + artist}></img>
                    <div className="card-body">
                    <h5 className="card-title text-center">{artist} <i className="fas fa-cart-plus"></i></h5>
                    </div>
                </Link>
            </div>
        </div>
        )}
    </div>
</Fragment>
