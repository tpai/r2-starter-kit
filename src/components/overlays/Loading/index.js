import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import styles from './styles.module.scss';

const root = document.getElementById('overlay');

export default function Loading({ isLoading }) {
  let el = useRef(document.createElement('div'));

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
      <div className={styles['default']}>
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
