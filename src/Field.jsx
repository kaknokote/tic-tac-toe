import React from 'react';
import styles from './Field.module.css';

export const Field = ({ field, setField, currentPlayer, setCurrentPlayer, setIsGameEnded, setIsDraw }) => {
    const handleClick = (index) => {
        if (field[index]) {
            return;
        }
        if (setIsGameEnded == true) {
            return;
        }
        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);
        checkGameState(newField, currentPlayer);
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    };
  
    const checkGameState = (newField, player) => {
      const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      for (let pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;
        if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
          setIsGameEnded(true);
          return;
        }
      }
  
      if (newField.every(cell => cell !== '')) {
        setIsDraw(true);
      }
    };
  
    return (
      <div className={styles.field}>
        {field.map((cell, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
    );
};
  