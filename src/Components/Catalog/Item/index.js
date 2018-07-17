import React, { Fragment }from 'react'
import DocumentTitle from 'react-document-title'

export default ({artist, image, genre,description,price}) =>
<Fragment>
<DocumentTitle title={artist +" Ticket Detail"}></DocumentTitle>
    <div className="container text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h3 className="my-0 font-weight-normal">{artist}</h3>
          </div>
          <div className="card-body">
            <img src={image} alt={"Logo of " + artist}></img><br/><br/>
            <h1 className="card-title pricing-card-title">${price}</h1>
            <small className="text-muted">{genre}</small><br/><br/>
            <p className="text-justify card-text">{description}</p>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark">Add to Cart</button>
          </div>
        </div>
    </div>
</Fragment>
