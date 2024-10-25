import React from 'react';
import styles from './Information.module.css';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
    let message;
    
    if (isDraw) {
      message = 'Ничья';
    } else if (isGameEnded) {
      message = `Победа: ${currentPlayer === 'X' ? '0' : 'X'}`;
    } else {
      message = `Ходит: ${currentPlayer}`;
    }
  
    return <div className={styles.information}>{message}</div>;
};