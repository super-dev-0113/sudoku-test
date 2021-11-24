import React, {Component} from "react";
import {Table} from "react-bootstrap";
import Cell from "../containers/CellContainer";
import Actions from "./Actions";

class Game extends Component {

    render() {
        const {onLevelSelect, board} = this.props

        return (
            <div>
                <button onClick={(e) => onLevelSelect("EASY")} className="start-btn">Click here to start the new game.</button>

                {
                    <Table className='sudoku-table'>
                        <tbody>
                        {
                            board.rows.map((line, index) => {
                                return (
                                    <tr key={index}>
                                        {line.cells.map((cell, index) => {
                                            return <Cell cell={cell} key={index}/>
                                        })}
                                    </tr>)
                            })}
                        </tbody>
                    </Table>

                }
                <Actions board={board}/>
            </div>
        )
    }
}


export default Game



