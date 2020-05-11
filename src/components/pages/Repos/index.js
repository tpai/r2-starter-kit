import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cx from 'classnames';

import styles from './styles.module.scss';

export default function Repos({
  handleDidMount,
  loadMore,

  repos,
  user,
}) {
  const el = useRef(null);

  useEffect(() => {
    handleDidMount();

    const handler = _.debounce(() => {
      if (window.scrollY + window.innerHeight > el.current.offsetHeight) {
        loadMore();
      }
    }, 300);
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className={styles['default']}>
      <img
        className="ts small rounded image"
        src={user.avatar_url}
        data-testid="avatar"
      />
      <div
        className="ts big header"
        data-testid="name"
      >
        {user.name}
      </div>
      {repos.length > 0 && <div ref={el} className="ts container very narrow segment">
        <div className="ts divided items" data-testid="repos">
          {repos.map(({
            id,
            name,
            description,
            html_url,
            stargazers_count
          }) => (
            <div
              key={`repo${id}`}
              className={cx('item', styles['link'])}
              onClick={() => window.open(html_url)}
              data-testid={`repo${id}`}
            >
              <div className="content">
                <div className="header">
                  {name}
                </div>
                {stargazers_count ? (
                  <span className={styles['icon']}>
                    <i className="star icon"></i>
                    {stargazers_count}
                  </span>
                ): null}
                <div className="description">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
}

Repos.propTypes = {
  handleDidMount: PropTypes.func,
  loadMore: PropTypes.func,

  repos: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};

Repos.defaultProps = {
  handleDidMount: () => {},
  loadMore: () => {},

  repos: [],
  user: {},
};
