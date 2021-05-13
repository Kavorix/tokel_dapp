/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from 'react';

import ErrorMessage from 'components/_General/ErrorMessage';
import Input from 'components/_General/Input';
import { GrayLabel, VSpaceTiny } from 'components/Dashboard/widgets/common';

type InputWithLabelProps = {
  id?: string;
  placeholder: string;
  value: string;
  autoFocus?: boolean;
  width?: string;
  type?: string;
  onChange: (e) => void;
  onKeyDown: (e) => void;
  error?: string;
  label: string;
};

const InputWithLabel = ({
  id,
  onChange,
  onKeyDown,
  value,
  placeholder,
  width,
  autoFocus,
  error,
  type,
  label,
}: InputWithLabelProps): ReactElement => {
  return (
    <label htmlFor={id}>
      <GrayLabel>{label}</GrayLabel>
      <VSpaceTiny />
      <Input
        id={id}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
        width={width}
        autoFocus={autoFocus}
        type={type}
      />{' '}
      <div style={{ textAlign: 'right' }}>
        <ErrorMessage>{error}</ErrorMessage>
      </div>
    </label>
  );
};

InputWithLabel.defaultProps = {
  id: '',
  autoFocus: false,
  width: '240px',
  type: 'text',
  error: null,
};
export default InputWithLabel;