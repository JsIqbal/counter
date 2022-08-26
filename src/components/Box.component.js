import React, { Component } from 'react';

class Box extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        minus: 'btn btn-warning m-2',
        newMinus: 'btn btn-danger m-2',
    }

    increament = () => {
        // const newState = {
        //     number: this.props.number + 1,
        //     minus: 'btn btn-warning m-2',
        // }

        // this.setState(newState);
        this.props.onIncremeant(this.props.id)
    }

    decreament = () => {
        // const newState = {
        //     number: this.props.number - 1,
        // }

        // const checkNumber = this.props.number;

        // if (checkNumber === 1) {
        //     const colorState = {
        //         number: this.props.number - 1,
        //         minus: this.state.newMinus
        //     }

        //     this.setState(colorState);
        // }
        // if (checkNumber === 0) {

        // }

        // else {
        //     this.setState(newState);
        // }
        this.props.onDecremeant(this.props.id)
    }

    delete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <div className='box-box'>
                <button className={ this.state.minus } onClick={ this.decreament }>minus</button>
                    {
                        this.props.number
                    }
                <button className='btn btn-success m-2' onClick={ this.increament }>plus</button>
                <button className='btn btn-danger m-2' onClick={ this.delete }>delete</button>
            </div>
        );
    }
}

export default Box;