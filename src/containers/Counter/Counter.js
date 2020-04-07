import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}
/**
 * Our wy to configuring which kind of information we need
 * @param {*} state
 * @returns map()
 */
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

/**
 * connect() is a function that returns a function
 */
export default connect(mapStateToProps)(Counter);
