import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function Loading() {
  return (
    <div className={cx('ts', 'active', 'inverted', 'dimmer', styles.container)}>
      <div className="ts text loader">Loading...</div>
    </div>
  );
}
