import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="main">
        <button className="button_class" style={{backgroundColor:"#357b3f"}} onClick={this.IncrementItem}>Click to increment by 1</button>
        <button  className="button_class" style={{backgroundColor:"#35397b"}}   onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button  className="button_class" style={{backgroundColor:"#0895a0"}}  onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h1>{ this.state.clicks }</h1> : '' }
      </div>
    );
  }
}

export default App;