import styles from './styles.module.css';
import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';

export const StartMenu = ({ onStartClick }) => {
  return (
  <StartMenuContainer>
  <div className="animated-border" id="borderElement">

  </div>
    <button className={styles.startButton} onClick={onStartClick}>
      Start Game
    </button>
  </StartMenuContainer>
  );
}

const changeColor = keyframes`
  0% { border-color: red; }
  25% { border-color: blue; }
  50% { border-color: green; }
  75% { border-color: yellow; }
  100% { border-color: red; }
`;

const changeType = keyframes`
  0%, 100% { border-style: solid; }
  25%, 75% { border-style: dashed; }
  50% { border-style: dotted; }
`;

const StartMenuContainer = styled.div`
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-style: solid;
  transition: all 0.5s ease-in-out;
  animation: ${changeColor} 4s infinite alternate, ${changeType} 4s infinite alternate;
`;