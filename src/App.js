import logo from './logo.svg';
import './App.css';
import Title from './useCallback/Title';
import ParentComponent from './useCallback/ParentComponent';
import Counter from './use memo/Counter';
import CounterContainer from './reduxContainer/CounterContainer';

function App() {
  return (
    <div className="App">
      <h1> Redux App</h1>
      {/* <ParentComponent /> */}
      <CounterContainer />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
