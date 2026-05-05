import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useSelection } from '../../state-management';
import {
  Header,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
} from '../../styles';

const navItems = [
  { path: '/', label: 'Gallery' },
  { path: '/about', label: 'About' },
];

export function Layout() {
  const location = useLocation();
  const { selectedCount } = useSelection();

  return (
    <>
      <Header>
        <HeaderContent>
          <Logo>
            <Link to="/">🐾 Pet Gallery</Link>
          </Logo>
          <Nav>
            {navItems.map(item => (
              <NavLink
                key={item.path}
                as={Link}
                to={item.path}
                $active={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
            {selectedCount > 0 && (
              <span style={{ 
                backgroundColor: '#4f46e5', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                {selectedCount} selected
              </span>
            )}
          </Nav>
        </HeaderContent>
      </Header>
      <Outlet />
    </>
  );
}
