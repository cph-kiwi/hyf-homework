// MyComponent.js

import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("My class component mounted");

    /*
        fetch('my url')
        .then(res => res.json())
        .then(result => {
            console.log('result', )
        })
        */
  }

  componentDidUpdate(prevProps) {
    console.log("My class component updated", this.props, prevProps);

    if (this.props.test !== prevProps.test) {
      // run some code when test update
    }
  }

  componentWillUnmount() {
    console.log("My class component unmounted");
  }

  render() {
    return <div>My class component</div>;
  }
}

export default MyComponent;
