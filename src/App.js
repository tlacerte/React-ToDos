import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import Body from './components/Body'
import Header from './components/Header'
import Counter from './components/Counter'

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <Body />
        <Counter />
      </div>
    );
  }
}

export default App;
