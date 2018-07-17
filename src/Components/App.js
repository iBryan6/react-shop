import React, { Component, Fragment} from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Catalog from './Catalog'
import Item from './Catalog/Item'
import Cart from './Cart'

//LANDING PAGE
function Homebody (){
    return (
        <div>
        <div className="sticky-top sticky-nav">
            <div className="row text-center">
                <div className="col-md title">
                    <h1>Landing Page</h1><br/>
                </div>
            </div>
        </div>
        <div className="container text-center">
        <DocumentTitle title='Home'></DocumentTitle>
            <Link to="/catalog" className="text-center"><button type="button" className="btn btn-outline-dark">CLICK ME TO CONTINUE</button></Link>
        </div>
        </div>
    )
}
class App extends Component {
    /*Constructor*/
    constructor(cart){
        super(cart)
        this.state = {
            tickets: [],
            cart:[]
        }
        this.DeletefromCart = this.DeletefromCart.bind(this)
    }
    /*Fetch Backend data*/
    async componentDidMount(){
        const tickets = await (await fetch('http://localhost:3004/tickets')).json()
        this.setState({tickets})
        const cart = await (await fetch('http://localhost:3004/cart')).json()
        this.setState({cart})
    }

    /*Delete from Cart*/
    DeletefromCart(id){
        const cart = this.state.cart
        const filtered = cart.filter(cart =>{
            return cart.id !== id;
        })
        this.setState({ cart: filtered })
    }

    render() {
        /*Set Variables from states*/
        const {tickets} = this.state
        const {cart} = this.state


        /*Count items length*/
        const membersToRender = this.state.cart
        const numRows = membersToRender.length

        /*Page*/
        return <BrowserRouter>
            <Fragment>
                {/*LANDING*/}
                <Route exact path="/" component={Homebody} />

                {/*CATALOG*/}
                <Route exact path="/catalog" render = {
                    props => <Catalog {...props} tickets={tickets} numRows={numRows} />
                }/>

                {/*ITEM W/ REDIRECTS TO NON EXISTING ITEMS*/}
                <Route exact path={`/catalog/:catalogId`} render = {
                    ({match}) => {
                        const nonitem = tickets.find(item => item.id === match.params.catalogId) 
                        if (!nonitem){
                            return <Redirect to="/catalog/404" />
                        }
                        return <Item {...nonitem}
                        numRows={numRows}
                        />
                    }                    
                }/>
                
                {/*CART*/}
                <Route exact path={`/cart`} render = {
                    props => <Cart {...props} cart={cart} numRows={numRows} DeletefromCart={this.DeletefromCart} />
                }/>
            </Fragment>
        </BrowserRouter>
    }
}

export default App
