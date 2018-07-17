import React, { Component } from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes.js';
import Fish from './Fish.js';

class App extends Component {
    
    state = {
        fishes: {}, // array for list of fish, number - 0 or null, string for empty string
        order: {}
    };

    addFish = (fish) => {
        // 1. take a copy of the existing state as to not cause mutation
        const fishes = { ...this.state.fishes };
        // 2. add new fish to that fishes variable
        fishes[`fish${ Date.now() }`] = fish;
        // 3. set new fishes object to state
        this.setState({
            fishes: fishes
        });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    }

    render() {
        // object.keys = allows us to loop over all the fish
        return (
        <div className='catch-of-the-day'>
            <div className='menu'>
                <Header tagline='Fresh Seafood Market'/>
                <ul className="fishes">
                { Object.keys(this.state.fishes).map(key => <Fish key={ key } details={ this.state.fishes[key] }/>) }
                </ul>
            </div>
            <Order />
            <Inventory addFish={ this.addFish } loadSampleFishes={ this.loadSampleFishes }/>
        </div>
        )
    }
}

export default App;