import React, { Component } from "react";

class Counter extends Component {
  //   handleIncreament = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDecreament(this.props.counter)}
          className="btn btn-secondary btn-sm m-3"
          disabled={this.props.counter.value == 0}
        >
          Decreament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  //changes class if Zero
  getBadgeClasses() {
    let classes = "badge  m-3 badge-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  }
}

export default Counter;
