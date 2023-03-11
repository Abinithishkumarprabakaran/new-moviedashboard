import { useState } from "react";
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import { Button } from "@mui/material";

export function TicTacToe() {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

    const [isXTurn, setIsXTurn] = useState(true)

    const { width, height } = useWindowSize()

    const handClick = (index) => {
        console.log(index)

        // If no winner && If its Untouched -> Allow Update
        if( !winner && board[index] === null ){
            const boardCopy = [...board];          // Copy
            boardCopy[index] = isXTurn ? "X" : "O";   // Set
            setBoard(boardCopy);   //Update
            // Toggle | Alternate Turn
            setIsXTurn(!isXTurn);
        }
    }

    const decideWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if( board[a] !== null && board[a] === board[b] && board[b] === board[c]){
                console.log("Winner", board[a]);
                return board[a];
            }
        }
        return null;
    };

    const winner = decideWinner(board);

    const restartGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setIsXTurn(true);   
    };

    return (
    <div className="tic-tac-toe">

        {winner ? (<Confetti width={width} height={height}/>) : null}

        <h1>TicTacToe Game</h1>
        <div className="board">
            {board.map((val, index) => (
                <GameBox val={val} onPlayerClick={() => handClick(index)}/>
            ))}
        </div>
        <Button onClick={restartGame} variant="contained">Restart</Button>
        {winner ? <h1>The winner is: {winner}</h1> : null }
    </div>);
}

function GameBox({ val, onPlayerClick }){
    // const [val, setVal] = useState("")
    
    const styles = {
        color: val === "X" ? "green" : "red"
    }

    return (
    <div 
        style={styles} 
        className="game-box" 
        onClick={onPlayerClick}>
        {val}
    </div>);

}


// First of all we need ingrdients
// 1. 3 x 3 boxes
// (We create 1 box, so we can call it and made is as 9 boxes)

// How to create a single box,
// one div and css borders
