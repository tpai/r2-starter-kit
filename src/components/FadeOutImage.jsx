/* global setTimeout */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class FadeOutImage extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };
  constructor(props) {
    super();
    this.state = {
      url: props.placeholder,
      blur: 5,
    };
  }
  handleImageOnload = (url) => {
    this.setState({ url, blur: 0 });
  };
  render() {
    const { url, blur } = this.state;
    const { url: selfUrl } = this.props;
    return (
      <div>
        <Image ref={(c) => (this.component = c)} url={url} blur={blur} />
        <img
          id="preload_image"
          src={selfUrl}
          onLoad={() => setTimeout(() => this.handleImageOnload(selfUrl), 500)}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}

const Image = styled.img`
  display: block;
  width: 100%;
  padding-bottom: 56.25%;
  background: ${({ url }) => `url('${url}') no-repeat center center`};
  background-size: cover;
  filter: ${({ blur }) => `blur(${blur}px)`};
  transition: 0.5s;
`;
