import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: '14px',
    iconSize: '16px',
    iconWeight: 1,
    textPadding: '8px',
    wrapperPadding: '4px',
    borderWidth: '1px',
  },
  large: {
    fontSize: '18px',
    iconSize: '24px',
    iconWeight: 2,
    textPadding: '12px',
    wrapperPadding: '6px',
    borderWidth: '2px',
  },
};

const Input = styled.input`
  border: none;
  font-weight: 700;
  font-size: ${({ styles }) => styles.fontSize};
  padding-left: ${({ styles }) => styles.textPadding};
  color: inherit;
  width: 100%;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ styles }) => styles.wrapperPadding} 0;
  width: ${(props) => props.width}px;
  color: ${COLORS.gray700};
  border-radius: 1px;
  border: none;
  border-bottom: ${({ styles }) => styles.borderWidth} solid #000000;

  :hover {
    color: ${COLORS.black};
  }

  :focus-within {
    outline-offset: 3px;
    outline: 2px solid black;
    outline: 2px auto -webkit-focus-ring-colour;
  }
`;
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (!STYLES.hasOwnProperty(size)) throw new Error(`Invalid size: ${size}`);

  const styles = STYLES[size];

  console.log(styles);

  return (
    <Wrapper width={width} styles={styles}>
      <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconWeight} />
      <Input type="text" placeholder={placeholder} styles={styles}></Input>
    </Wrapper>
  );
};

export default IconInput;
