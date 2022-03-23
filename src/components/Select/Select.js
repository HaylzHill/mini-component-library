import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  appearance: none;
`;

const DropDown = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 2px solid black;
    outline: 2px auto -webkit-focus-ring-colour;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Value = styled.p`
  margin-right: 24px;
`;
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <DropDown>
        <Value>{displayedValue}</Value>
        <Icon id="chevron-down" stroke-width={1} size="20px"></Icon>
      </DropDown>
    </Wrapper>
  );
};

export default Select;
