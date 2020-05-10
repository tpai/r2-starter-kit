import React from 'react';

import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles['default']}>
      <i className="ts huge negative heart icon"></i>
      <div className="ts big header">Nya Found</div>
      <div className="ts container very narrow segment">
        <img
          src="https://placekitten.com/500/300"
          className="ts fluid rounded image"
          alt="kitty"
        />
      </div>
    </div>
  );
}
