import React from 'react';

import styled from '@emotion/styled';

type MenuItemRootProps = {
  selected: boolean;
};

type MenuIconProps = {
  icon: string;
  selected: boolean;
};

type MenuItemProps = {
  onClick: () => void;
  name: string;
  icon: string;
  selected: boolean;
};

const MenuItemRoot = styled.div<MenuItemRootProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 13px;
  color: ${p => (p.selected ? 'var(--color-white)' : 'var(--color-darkerGray)')};
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  p {
    margin: 0.5rem 0 0 0;
  }
`;

const MenuIcon = styled.div<MenuIconProps>`
  height: 24px;
  width: 24px;
  background: ${p =>
    p.selected ? 'var(--gradient-purple-horizontal)' : 'var(--color-darkerGray)'};
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image: url('${p => p.icon}');
`;

const MenuItem = ({ name, icon, selected, onClick }: MenuItemProps) => (
  <MenuItemRoot onClick={onClick} selected={selected}>
    <MenuIcon icon={icon} selected={selected} />
    <p>{name}</p>
  </MenuItemRoot>
);

export default MenuItem;
