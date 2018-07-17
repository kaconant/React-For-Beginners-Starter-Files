import React, { Component } from 'react';

class Fish extends Component {
    
    render() {

        const { image, name, price, desc } = this.props;

        return (
        <li className='menu-fish'>
            <img src={ image } alt={ name }/>
            <h3 className='fish-name'>{ name }
                <span className='price'> { price }</span>
            </h3>
            <p>{ desc }</p>
            <button>Add to Cart</button>
        </li>
        )
    }
}

export default Fish;