import React, { Component } from 'react';
import App from './App'
class ShoppingCard extends Component {
    state = { 
        products : [
            {id : 1, name: "Burger", count: 3 },
            {id : 2, name: "Frais", count: 1 },
            {id : 3, name: "Cola", count: 2 },
            {id : 4, name: "Pizza", count: 5 },
        ]
     }
     handelDelete = (product) =>{
         const newProduct = this.state.products.filter(p => p.id !== product.id)
         this.setState({
             products:newProduct
         })
     }
     handleReset = () =>{
        //clone
        let products = [...this.state.products]
        //edit
        products = products.map(p =>{
            p.count = 0
            return p
        })
        //setState
        this.setState({products})
    }
    incrementNum = product =>{
        const products = [...this.state.products]
        const index = products.indexOf(product);
        products[index] = {...products[index]}
        products[index].count++;
        this.setState({products})
    }
    decrementNum = product =>{
        const products = [...this.state.products]
        const index = products.indexOf(product)
        products[index] = {...products[index]}
        products[index].count--;
        this.setState({products})
    }


    render() { 
        return ( 
            <React.Fragment>
                <h1>Shopping Card</h1>
                <button onClick={this.handleReset} className='btn btn-secondary btn-lg m-2'>RESET</button>
                {this.state.products.map(product =>(
                    <App
                    key={product.id}
                    onDelete={this.handelDelete}
                    onIncrement={this.incrementNum}
                    onDecrement = {this.decrementNum}
                    product={product}
                    />
                ))}

            </React.Fragment>
         );
    }
}

 
export default ShoppingCard;
