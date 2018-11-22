import React, { Component, Fragment} from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Catalog from './Catalog'
import Item from './Catalog/Item'
import Cart from './Cart'

class App extends Component {
    /*Constructor*/
    constructor(cart){
        super(cart)
        this.state = {
            tickets: [],
            cart:[],
            total:0
        }
        this.DeletefromCart = this.DeletefromCart.bind(this)
        this.AddtoCart = this.AddtoCart.bind(this)
    }

    /*Fetch Backend data*/
    async componentDidMount(){
        const tickets = await (await fetch('http://localhost:3004/tickets')).json()
        this.setState({tickets})
        const cart = await (await fetch('http://localhost:3004/cart')).json()
        this.setState({cart})
    }

    /*Delete from Cart*/
    DeletefromCart(id,price){
        const cart = this.state.cart
        var total = this.state.total
        const filtered = cart.filter(cart =>{
            return cart.id !== id;
        })
        this.setState({ cart: filtered })
        // eslint-disable-next-line
        total = total - parseInt(price)
        this.setState({total})
    }

    /*Add to Cart*/
    AddtoCart(id,item,quantity,price){
        const cart = this.state.cart 
        var total = this.state.total
        const itemexists = cart.find(item => item.id === id) 
        if (!itemexists){
            cart.push({
                id,
                item,
                quantity,
                price
            })
            // eslint-disable-next-line
            total = parseInt(price) + total
        }
        else{
            alert("Ticket is already in your cart")
        }
        this.setState({cart})
        this.setState({total})
    }

    render() {
        /*Set Variables from states*/
        const {tickets} = this.state
        const {cart} = this.state
        const {total} = this.state


        /*Count items length*/
        const membersToRender = this.state.cart
        const numRows = membersToRender.length

        /*Page*/
        return <BrowserRouter>
            <Fragment>

                {/*CATALOG*/}
                <Route exact path="/" render = {
                    props => <Catalog {...props} tickets={tickets} numRows={numRows} AddtoCart={this.AddtoCart} />
                }/>

                {/*ITEM W/ REDIRECTS TO NON EXISTING ITEMS*/}
                <Route exact path={`/producto/:catalogId`} render = {
                    ({match}) => {
                        const nonitem = tickets.find(item => item.id === match.params.catalogId) 
                        if (!nonitem){
                            return <Redirect to="/" />
                        }
                        return <Item {...nonitem}
                        numRows={numRows}
                        AddtoCart={this.AddtoCart}
                        />
                    }                    
                }
                />
                
                {/*CART*/}
                <Route exact path={`/cart`} render = {
                    props => <Cart {...props} cart={cart} total={total} numRows={numRows} DeletefromCart={this.DeletefromCart} />
                }/>
            </Fragment>
        </BrowserRouter>
    }
}

export default App
