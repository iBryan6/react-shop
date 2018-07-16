import React, { Fragment }from 'react'
import {Link} from 'react-router-dom'
import DocumentTitle from 'react-document-title'

export default ({ match:{url}, tickets })=>
<Fragment>
<DocumentTitle title='Catalog'></DocumentTitle>
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
</Fragment>
