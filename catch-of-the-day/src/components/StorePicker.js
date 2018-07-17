import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends Component {
    // allows us to get information from the dom
    myInput = React.createRef();

    // method that will run before render - ES6
    // constructor() {
    //     will run Component before StorePicker
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    // property goToStore is set to arrow function to bind this
    goToStore = (event) => {
        // 1. stop form from submitting
        event.preventDefault();
        // 2. get text from input - value.value - react + js syntax together
        const storeName = this.myInput.value.value;
        // 3. change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${ storeName }`);
    }


    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={ this.goToStore }>
                    <h2>Please Enter a Store</h2>
                    <input 
                        type="text" 
                        ref={ this.myInput }
                        required 
                        placeholder="Store Name" 
                        defaultValue={ getFunName() } 
                    />
                    <button type="submit">Visit Store ></button>
                </form>
            </Fragment>
        );
    }
};

export default StorePicker;