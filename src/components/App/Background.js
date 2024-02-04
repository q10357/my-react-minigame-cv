// Background.js
// https://www.vecteezy.com/photo/30658813-in-the-style-of-a-1990s-video-game-a-2d-pixelated

import React from 'react';
import styles from './styles.module.css';

export const Background = ({ characterPosition }) => {
  /*const backgroundStyle = {
    transform: `translateX(${-characterPosition}px)`,
  };*/
  //return <div className={styles.background} style={backgroundStyle}></div>;

  return <div className={styles.background}></div>;
};
