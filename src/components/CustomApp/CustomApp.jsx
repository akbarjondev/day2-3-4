import React from "react";

class OneComponent extends React.Component {
  componentWillUnmount() {
    console.log("OneComponent unmounted");
  }

  render() {
    return <>OneComponent</>;
  }
}

class CustomApp extends React.Component {
  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
    this.state = {
      count: 0,
      remove: false,
    };
  }

  componentDidMount() {
    console.log("mounted");

    // console.log(this.mainRef);
  }

  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    return (
      <main ref={this.mainRef}>
        <h3>Custom App: {this.state.count}</h3>
        <section>{this.state.remove ? null : <OneComponent />}</section>
        <div>
          <button onClick={() => this.setState({ count: 1 })}>Click me</button>
          <button onClick={() => this.setState({ remove: true })}>
            Remove me
          </button>
        </div>
      </main>
    );
  }
}

export default CustomApp;
