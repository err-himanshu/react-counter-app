import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncreament,
      onAdd,
      onDecreament
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-3" onClick={onReset}>
          Reset
        </button>
        <button
          className="btn btn-success btn-sm text-center m-3"
          onClick={onAdd}
        >
          ADD{" "}
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
