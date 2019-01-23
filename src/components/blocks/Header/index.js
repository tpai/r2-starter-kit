import React from 'react';

import api from 'assets/images/api.png';
import github from 'assets/images/github.svg';
import styles from './styles.scss';

export default function Header () {
  return (
    <div className={styles.default}>
      <a
        href="https://github.com/tpai/r2-starter-kit"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.github}
      >
        <div dangerouslySetInnerHTML={{ __html: github }} />
      </a>
      <a
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={api} className={styles.api} />
      </a>
    </div>
  );
}
