import React, { Fragment }from 'react'
import DocumentTitle from 'react-document-title'

export default ({artist, image, genre,description,price}) =>
<Fragment>
<DocumentTitle title={artist}></DocumentTitle>
    <div className="container text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h3 class="my-0 font-weight-normal">{artist}</h3>
          </div>
          <div class="card-body">
            <img src={image} alt={"Logo of " + artist}></img><br/><br/>
            <h1 class="card-title pricing-card-title">{price}</h1>
            <small class="text-muted">{genre}</small><br/><br/>
            <p className="text-justify card-text">{description}</p>
            <button type="button" class="btn btn-lg btn-block btn-outline-dark">Add to Cart</button>
          </div>
        </div>
    </div>
</Fragment>
