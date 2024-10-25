import React, { useState } from 'react';
import { Information } from './Information';
import { Field } from './Field';
import styles from './Game.module.css';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));
  
	const resetGame = () => {
	  setCurrentPlayer('X');
	  setIsGameEnded(false);
	  setIsDraw(false);
	  setField(Array(9).fill(''));
	};
  
	return (
	  <div className={styles.game}>
		<Information 
		  currentPlayer={currentPlayer} 
		  isGameEnded={isGameEnded} 
		  isDraw={isDraw} 
		/>
		<Field 
		  field={field} 
		  setField={setField} 
		  currentPlayer={currentPlayer} 
		  setCurrentPlayer={setCurrentPlayer} 
		  setIsGameEnded={setIsGameEnded} 
		  setIsDraw={setIsDraw} 
		/>
		<button onClick={resetGame}>Начать заново</button>
	  </div>
	);
};
