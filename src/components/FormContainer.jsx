import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <button 
                className=""
                onClick={() => this.props.onClick('testings' + this.props.value)}
            >
            {this.state.value}
            </button>
        );
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //squares: Array(9).fill(null)
            //squares: [1,2,3,4,5,6,7,8,9]
        };
    }

    handleClick(i, type) {
        console.log(type, 'type');
        console.log(i);
        //const squares = this.state.squares.slice();
        //squares[i] = 'X';
        //this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square 
                    value={i}
                    onClick={(type) => this.handleClick(i, type)}
                />
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                adsad
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}

export default Game;
