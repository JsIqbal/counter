import React, { Component } from 'react';
import Box from './Box.component';

class App extends Component{
    state = {
        arra: [1,2,3]
    }

    onIncremeant = (id) => {
        const arr = [...this.state.arra];
        arr[id]++;
        this.setState({arra : arr});
    }

    onDecremeant = (id) => {
        const arr = [...this.state.arra];
        arr[id]--;
        this.setState({arra : arr});
    }

    createBox = () => {
        const { arra } = this.state;
        this.setState({arra: [...arra, 0]});
    }

    onDelete = (id) => {
        function filterArra(number, index) {
            if (id === index) return false;
            else return true;
        }

        const updatedArra = this.state.arra.filter(filterArra);
        this.setState({arra : updatedArra});
    }

    render() {
        return (
            <div className='col-lg-6 me-auto ms-auto text-center mt-4'>
                <button className='btn btn-primary' onClick={this.createBox}>Add Box</button>
                {
                    (
                        () =>this.state.arra.map(
                            (number, index) =>(
                                <div key = {index} className='singlebox'>
                                    <Box
                                        number = {number}
                                        id = {index}
                                        onIncremeant = {this.onIncremeant}
                                        onDecremeant = {this.onDecremeant}
                                        onDelete = {this.onDelete}
                                    />
                                </div>
                            )  
                        )
                    )()
                }
            </div>
        );
    }
}

export default App;