import React, { Component } from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes.js';
import Fish from './Fish.js';
import base from '../base.js';

class App extends Component {
    
    state = {
        fishes: {}, // array for list of fish, number - 0 or null, string for empty string
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    };

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId, 
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    };


    addFish = (fish) => {
        // 1. take a copy of the existing state as to not cause mutation
        const fishes = { ...this.state.fishes };
        // 2. add new fish to that fishes variable
        fishes[`fish${ Date.now() }`] = fish;
        // 3. set new fishes object to state
        this.setState({ fishes: fishes });
    }

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. update that state
        fishes[key] = updatedFish;
        // 3. set that to state
        this.setState({ fishes: fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    }

    addToOrder = (key) => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. add to order or update the number in order
        order[key] = order[key]+ 1 || 1;
        // 3. call setState to update our order
        this.setState({ order: order});
    }

    render() {
        // object.keys = allows us to loop over all the fish
        return (
        <div className='catch-of-the-day'>
            <div className='menu'>
                <Header tagline='Fresh Seafood Market'/>
                <ul className='fishes'>
                { Object.keys(this.state.fishes).map(key => (
                <Fish 
                    key={ key } 
                    index={ key }
                    details={ this.state.fishes[key] }
                    addToOrder={this.addToOrder}
                />
                ))}
                </ul>
            </div>
            <Order fishes={ this.state.fishes } order={ this.state.order } />
            <Inventory 
                addFish={ this.addFish } 
                updateFish={ this.updateFish }
                loadSampleFishes={ this.loadSampleFishes }
                fishes={ this.state.fishes }
            />
        </div>
        )
    }
}

export default App;