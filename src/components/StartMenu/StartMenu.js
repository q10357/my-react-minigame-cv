import styles from './styles.module.css';
import styled, { keyframes } from 'styled-components';

export const StartMenu = ({ onStartClick }) => {
  return (
  <StartMenuContainer>
    <button className={styles.startButton} onClick={onStartClick}>
      Start Game
    </button>
  </StartMenuContainer>
  );
}

const changeColor = keyframes`
  0% { border-color: blue;}
  
`;

const changeType = keyframes`
  25%, 75% { border-style: dashed; }
  50% { border-style: dotted; }
`;

const StartMenuContainer = styled.div`
  width: 45%;
  height: 25%;
  border-width: 2px;
  border-style: solid;
  background-color: white;
  border-radius: 12px;
  transition: all 100s ease-in-out;
  animation: ${changeColor} 20s infinite alternate, ${changeType} 20s infinite alternate;
`;