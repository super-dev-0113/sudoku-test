import React, {Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import Game from "../containers/GameContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Sudoku using React, Redux</h1>
                </header>
                <Game/>
            </div>
        );
    }
}

export default App;
