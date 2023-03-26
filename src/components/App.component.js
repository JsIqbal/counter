import { useState } from "react";
import Box from "./Box.component";

function App() {
    const [state, setState] = useState([1, 2, 3]);

    const onIncremeant = (id) => {
        const arr = [...state];
        arr[id]++;
        setState(arr);
    };

    const onDecremeant = (id) => {
        const arr = [...state];
        arr[id]--;
        setState(arr);
    };

    const createBox = () => {
        setState([...state, 0]);
    };

    const onDelete = (id) => {
        function filterArra(number, index) {
            if (id === index) return false;
            else return true;
        }

        const updatedArra = state.filter(filterArra);
        setState(updatedArra);
    };

    return (
        <div className="col-lg-6 me-auto ms-auto text-center mt-4">
            <button className="btn btn-primary" onClick={createBox}>
                Add Box
            </button>
            {(() =>
                state.map((number, index) => (
                    <div key={index} className="singlebox">
                        <Box
                            number={number}
                            id={index}
                            onIncremeant={onIncremeant}
                            onDecremeant={onDecremeant}
                            onDelete={onDelete}
                        />
                    </div>
                )))()}
        </div>
    );
}

export default App;
