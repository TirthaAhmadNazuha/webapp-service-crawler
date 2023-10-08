import { StateComponent } from 'amber';
import '../styles/index.sass';

const App = class extends StateComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to AmberJs</h1>
        <p>JavaScript Web Bases Component, make easly create interface.</p>
        <button onClick={() => this.setState({
          count: this.state.count.valueOf() + 1
        })}>Increase Count: {this.state.count}</button>
      </div >
    );
  }
};

export default App;
