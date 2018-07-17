import React, { Fragment }from 'react'
import DocumentTitle from 'react-document-title'

export default ({ cart }) =>

<Fragment>
<DocumentTitle title='Cart'></DocumentTitle>

    <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Price</th>
                        <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(({id,item,quantity,price}) => 
                    <tr key={id}>
                        <td>{item}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{quantity*price}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div className="offset-md-8">
                <h2>Total: 20</h2>
            </div>
    </div>
    
</Fragment>
