import React, { Fragment }from 'react'

export default ({artist, image, genre,description,price}) =>
<Fragment>
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="offset-md-8">
                <h2>Total: 20</h2>
            </div>
    </div>
</Fragment>
