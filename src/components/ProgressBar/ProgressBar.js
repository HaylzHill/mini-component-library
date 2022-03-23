/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const STYLES = {
  small: {
    height: '8px',
    padding: '0px',
    radius: '4px',
  },
  medium: {
    height: '12px',
    padding: '0px',
    radius: '4px',
  },
  large: {
    height: '24px',
    padding: '4px',
    radius: '8px',
  },
};

const Progress = styled.progress`
  width: 370px;
  height: ${({ styles }) => styles.height};
  appearance: none;

  ::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${({ styles }) => styles.padding};
    border-radius: ${({ styles }) => styles.radius};
  }
  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${({ styles, value }) =>
      value >= 99 ? styles.radius : styles.radius + ' 0 0 ' + styles.radius};
  }
`;

const ProgressBar = ({ value, size }) => {
  const max = 100;
  const min = 0;

  if (value > max || value < min) throw new Error(`Invalid value: ${value}`);
  if (!STYLES.hasOwnProperty(size)) throw new Error(`Invalid size: ${size}`);

  return (
    <Progress value={value} max={max} styles={STYLES[size]}>
      {value}
    </Progress>
  );
};

export default ProgressBar;
