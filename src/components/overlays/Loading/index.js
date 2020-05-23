import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import styles from './styles.module.scss';

export default function Loading({ isLoading }) {
  const el = useRef(document.createElement('div'));

  const root = document.getElementById('overlay');
  useEffect(() => {
    root.appendChild(el.current);
    return () => {
      root.removeChild(el.current);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      disableBodyScroll(el);
    } else {
      enableBodyScroll(el);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isLoading]);

  return ReactDOM.createPortal(
    isLoading ?
      <div data-testid="loader" className={styles['default']}>
        <div className="ts active inverted dimmer">
          <div className="ts loader"></div>
        </div>
      </div> : null,
    el.current
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};
