import React, { Component, Fragment } from 'react';
import { NewItemForm } from './NewItem/NewItemForm';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(content) {
        axios.post(localStorage, {content: content}).then((result) => {
            console.log(result.data);
            this.setState({items: [...this.state.items]})
        })
    }

    render() {
        return (
            <Fragment>
                {/* <Home /> */}
                <NewItemForm />
                    
                    
            </Fragment>
        )
    }
}

export default Container;


// an array of objects, each item. 

