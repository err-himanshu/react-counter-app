import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counter from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    isIncreamentTrue: false
  };

  handleIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    const thisValue = counters[index].value;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    let objLength = this.state.counters.length;
    let lastObjId = 1;
    if (objLength > 0) {
      lastObjId = this.state.counters[objLength - 1].id + 1;
    }
    let counters = this.state.counters;
    counters.push({ id: lastObjId, value: 0 });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalIndexValues={this.totalValues(this.state.counters, "value")}
        />
        <main className="container">
          <Counter
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onDecreament={this.handleDecreament}
          />
        </main>
      </React.Fragment>
    );
  }

  totalValues(items, property) {
    return items.reduce(function(a, b) {
      return a + b[property];
    }, 0);
  }
}

export default App;
