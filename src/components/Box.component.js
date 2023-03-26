function Box(props) {
    const minus = "btn btn-warning m-2";
    const newMinus = "btn btn-danger m-2";

    const increament = () => {
        props.onIncremeant(props.id);
    };

    const decreament = () => {
        props.onDecremeant(props.id);
    };

    const deleteItem = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="box-box">
            <button
                disabled={props.number === 0}
                className={props.number === 0 ? newMinus : minus}
                onClick={decreament}
            >
                minus
            </button>
            {props.number}
            <button className="btn btn-success m-2" onClick={increament}>
                plus
            </button>
            <button className="btn btn-danger m-2" onClick={deleteItem}>
                delete
            </button>
        </div>
    );
}

export default Box;
