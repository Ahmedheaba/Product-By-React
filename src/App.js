import React, { Component } from 'react';

class Product extends Component {
    // state = { 
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    //  }
     getClasses(){
        return this.props.product.count <= 10 ? 'badge badge-warning m-2' : 'badge badge-primary m-2';
     }
    //  cheakNamesInList(){
        //  if (this.props.product.names.length === 0){
            //  return <h2> Sorry Sir No Names To Show </h2>
        //  }
        //  return(
            //  <ul>
                //  {this.state.names.map(name =>(
                    //  <li key={name}>{name}</li>
                //  ))}
            //  </ul>
        //  )
    render() { 
        return ( 
            <div>
                {this.props.children}
                <span> {this.props.product.name} </span>
                <span className= {this.getClasses()}> {this.props.product.count} </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.product)}
                    className='btn btn-primary btn-lg m-3'>
                    +
                </button>
                <button
                    onClick={() =>this.props.onDecrement(this.props.product)}
                    className='btn btn-danger btn-lg'>
                    -
                </button>
                <span onClick={() => this.props.onDelete(this.props.product)}>
                <i className="fas fa-trash m-3"></i>
                </span>
                {/* {this.state.names.length === 0 && <h4>No Names</h4>} */}
                  {/* <ul> */}
                    {/* {this.state.names.map(name =>( */}
                        {/* <li key={name}>{name}</li> */}
                    {/* ))} */}
                  {/* </ul> */}

            </div>
         );
    }
}
 
export default Product;