import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Tippy from '@tippyjs/react';
import { find } from 'lodash-es';

import { V } from 'util/theming';

import { ThemedChevron } from './icons';

const TippyWrapper = styled.div`
  .tippy-box {
    background-color: transparent;
  }
  .tippy-content {
    padding: 0;
  }
  width: 200px;
  min-width: 80px;
  max-width: 100%;
`;

const SelectButton = styled.button`
  background-color: ${V.color.backSofter};
  color: ${V.color.front};
  border: 1px solid ${V.color.backSoftest};
  border-radius: ${V.size.borderRadius};
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${V.size.borderRadius};
  overflow: hidden;
  border: 1px solid ${V.color.backSoftest};
  width: 100%;
`;

const DropdownItem = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  align-items: center;
  background-color: ${V.color.backSofter};
  color: ${V.color.front};
  border-top: 1px solid ${V.color.backSoftest};
  cursor: pointer;
  font-weight: normal;
  font-size: 16px;
  &:first-of-type {
    border-top: none;
  }
  &:hover {
    background-color: ${V.color.backHard};
  }
  ${p =>
    p.selected &&
    css`
      background-color: ${V.color.back};
      flex-direction: column;
      font-weight: 700;
    `}
`;

type SelectionType = string | number;

type OptionType<T extends SelectionType> = {
  label: string;
  value: T;
};

type SelectProps<T extends SelectionType> = {
  options: OptionType<T>[];
  defaultValue: T;
  onSelect: (value: T) => void;
};

const Select = <T extends SelectionType>({ options, defaultValue, onSelect }: SelectProps<T>) => {
  const [currentValue, setCurrentValue] = React.useState<T>(null);

  React.useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  const [instance, setInstance] = React.useState(null);

  const handleItemClick = React.useCallback(
    (value: T) => {
      instance.hide();
      setCurrentValue(value);
      onSelect(value);
    },
    [instance, onSelect]
  );

  return (
    <TippyWrapper>
      <Tippy
        interactive
        placement="bottom"
        animation="scale"
        trigger="click"
        arrow={false}
        onCreate={setInstance}
        onShow={({ popper, reference }) => {
          popper.style.width = `${reference.getBoundingClientRect().width}px`;
        }}
        content={
          <DropdownContainer>
            {options.map(option => (
              <DropdownItem
                key={option.value}
                selected={option.value === currentValue}
                onClick={() => handleItemClick(option.value)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownContainer>
        }
      >
        <SelectButton type="button">
          {find(options, opt => opt.value === currentValue)?.label ?? 'Select'}
          <ThemedChevron />
        </SelectButton>
      </Tippy>
    </TippyWrapper>
  );
};

export default Select;
