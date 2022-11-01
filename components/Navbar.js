import React from 'react';
import { Navbar, Text, Link, Button, Spacer } from '@nextui-org/react';
import Icon from './Icon';
const Nav = () => {
  const collapseItems = ['Products', 'Company', 'Signup', 'Login'];
  return (
    <Navbar maxWidth={'fluid'} shouldHideOnScroll isBordered variant='sticky'>
      <Navbar.Brand>
        <Icon />
        <Spacer />
        <Text b color='inherit'>
          Hifility
        </Text>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' enableCursorHighlight variant='underline'>
        <Navbar.Link hideIn='xs' href='#'>
          Products
        </Navbar.Link>
        <Navbar.Link hideIn='xs' href='#'>
          Company
        </Navbar.Link>
        <Button className='login-button' flat auto as={Link} href='#'>
          Login
        </Button>
        <Button className='signup-button' flat auto as={Link} href='#'>
          Sign Up
        </Button>
      </Navbar.Content>
      <Navbar.Toggle showIn={'xs'} aria-label='toggle navigation' />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color='inherit'
              css={{
                minWidth: '100%',
              }}
              href='#'
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
