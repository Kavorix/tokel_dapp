import React from 'react';

import styled from '@emotion/styled';

import { GrayLabel, HSpaceMed } from '../common';

const Value = styled.div`
  margin: 4px 0 16px 0;
  p {
    margin: 0;
  }
`;

const ColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;

type TxConfirmationProps = {
  label: string;
  value?: string;
  children?: JSX.Element | JSX.Element[];
};

const TxConfirmationRow = ({ label, value, children }: TxConfirmationProps): React.ReactElement => {
  return (
    <ColumnRoot>
      <GrayLabel>{label}</GrayLabel>
      <Value>
        <p>{value}</p>
        {value && <HSpaceMed />}
        {children}
      </Value>
    </ColumnRoot>
  );
};

TxConfirmationRow.defaultProps = {
  children: null,
};
export default TxConfirmationRow;
