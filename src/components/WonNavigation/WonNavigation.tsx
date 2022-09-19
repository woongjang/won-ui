import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface NavItem {
  title: ReactNode;
  icon: ReactNode | JSX.Element
  disabled?: boolean;
  sideContents?: ReactNode | JSX.Element;
}


interface ContainerProps {
  direction: WonNavigationProps['direction'];
}

const NavigationContainer = styled.ul<ContainerProps>`
  width: 100%;
  height: 100%;
  text-align: left;
  list-style: none;
  outline: none;
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: ${(props) => (props.direction === 'row' ? 'flex' : 'block')};
`;
interface NavMenuProps {
  focused: boolean;
  disabled?: boolean;
}
const NavMenu = styled.li<NavMenuProps>`
  width: 100%;
  min-height: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) => (props.focused ? '#103c75' : '#f2f6fc')};
  -webkit-transition: background-color 500ms ease-out;
  -ms-transition: background-color 500ms ease-out;
  transition: background-color 500ms ease-out;
  color: ${(props) => {
    let color = props.focused && '#f2f6fc';
    if (props.disabled) color = '#8c8c8c';
    return color;
  }};
  margin: 0;
  padding: 0 3px 0 16px;
  margin-top: 8px;
  border-radius: 6px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'unset')};
  :not(:last-child) {
    margin-bottom: 8px;
  }
  :hover {
    ${(props) =>
      !props.focused && {
        'border-radius': 0,
        'border-left': '5px solid #103c75',
      }}
  }
`;

const MenuTitle = styled.span`
  flex: auto;
  box-sizing: border-box;
  padding-left: 12px;
`;

export interface WonNavigationProps {
  direction?: 'row' | 'column';
  navItems: NavItem[];
  startIndex?: number;
  onClickNavMenu?: (item: NavItem) => void | Promise<void>;
}
function WonNavigation(props: WonNavigationProps) {
  const {
    navItems,
    direction = 'column',
    startIndex = 0,
    onClickNavMenu,
  } = props;
  const [focusedMenu, setFocusedMenu] = React.useState<number | undefined>(
    startIndex,
  );
  const handleClickMenu = (navItem: NavItem, idx: number) => {
    setFocusedMenu(idx);
    if (onClickNavMenu) {
      onClickNavMenu(navItem);
    }
  };
  return (
    <NavigationContainer direction={direction}>
      {navItems.map((navItem, idx) => {
        const { icon, title, disabled, sideContents } = navItem;
        const menuKey = `menu${idx}`;
        return (
          <NavMenu
            key={menuKey}
            focused={idx === focusedMenu}
            onClick={() => handleClickMenu(navItem, idx)}
            disabled={disabled}
          >
            {icon}
            <MenuTitle>{title}</MenuTitle>
            <span className="sideContents">{sideContents}</span>
          </NavMenu>
        );
      })}
    </NavigationContainer>
  );
}

export default WonNavigation;
