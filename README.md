# react-challenges
# Tic Tac Toe - React App

A Tic Tac Toe game built with React. It tracks game history, allows users to navigate between moves, and determines a winner.

## Features
- Play Tic Tac Toe with two players.
- Tracks game history and allows undoing moves.
- Displays the winner when the game ends.
- Uses React functional components, props, and state.

## How It Works

### Components
1. Square - A button representing one cell on the board.
2. Board - The main game grid, handling player moves.
3. Game - Manages game history, turns, and past moves.

### Props and State
- Props allow components to receive data, such as the current player or board state.
- State (useState) keeps track of game history and the current move.
- When a square is clicked, the state updates, triggering a re-render.

### Winner Calculation
The `calculateWinner()` function checks for three matching symbols in a row.


