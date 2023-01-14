import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Paula Jeziorska',
    };

    this.listRef = React.createRef();
  }

  //static getDerivedStateFromProps(nextProps, prevState) {
  //console.log('FIRE: getDerivedStateFromProps');
  //console.log('nextProps', nextProps);
  //console.log('prevState', prevState);

  //if (prevState.count === 3) {
  //return { name: 'Paula Drechsler' };
  //}
  //return null;
  //}

  componentDidMount() {
    console.log('Component mounted!');
    this.props.callWhenReady();
  }

  //shouldComponentUpdate(nextProps, nextState) {
  //console.log('shouldComponentUpdate', { nextProps, nextState });
  //if (
  //nextState.name === this.state.name &&
  //this.state.count === nextState.count
  //) {
  //return false;
  //}
  //return true;
  //}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', { prevProps, prevState });
    const listItemNo = this.listRef.current.children.length;
    console.log('listItemNo', listItemNo);
    return listItemNo;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', { prevProps, prevState });
    console.log('SNAPSHOT', snapshot);
  }

  componentWillUnmount() {
    console.log('COMPONENT WILL UNMOUNT :((');
  }

  componentDidCatch(error, info) {}

  render() {
    console.log('Render!');
    if (this.state.count > 5) {
      throw new Error('I crushed!!! :3');
    }
    return (
      <div>
        <h2>Counter: Name: {this.state.name}</h2>
        <h3>Counter count: {this.state.count}</h3>
        <ul ref={this.listRef}>
          {Array.from({ length: this.state.count }, (_, index) => {
            return <li key={index}> ok {index + 1}</li>;
          })}
        </ul>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment by 1
        </button>
        <button onClick={() => this.setState({ name: 'Piotr Drechsler' })}>
          Set name to Piotr
        </button>
      </div>
    );
  }
}
