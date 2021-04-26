import React, { useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import styled from '@emotion/styled';

import copyIcon from 'assets/copy.svg';
import copyWhite from 'assets/copyWhite.svg';

const COPIED = 'Copied!';
const IconWrapper = styled.div`
  cursor: pointer;
`;
const ImgClickableWrapper = styled.button`
  background: transparent;
  border: none;
`;

type CopyProps = {
  textToCopy: string;
  color?: string;
};

const CopyToClipboard = ({ textToCopy, color }: CopyProps) => {
  const idRef = useRef(null);

  const copy = () => {
    ReactTooltip.show(idRef.current);
    navigator.clipboard.writeText(String(textToCopy));
  };

  return (
    <IconWrapper onClick={() => copy()}>
      <div data-tip={COPIED} ref={idRef} />
      <ImgClickableWrapper onClick={() => copy()} onKeyDown={() => copy()}>
        <img alt="copy" src={color === 'white' ? copyWhite : copyIcon} />
      </ImgClickableWrapper>
      <ReactTooltip
        className="react-tooltip"
        event="click"
        eventOff="blur"
        delayShow={100}
        delayHide={1000}
        afterShow={() => ReactTooltip.hide()}
        backgroundColor="#313d4f"
      />
    </IconWrapper>
  );
};

CopyToClipboard.defaultProps = {
  color: 'var(--color-danger)',
};
export default CopyToClipboard;
