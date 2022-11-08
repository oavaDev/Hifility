import React, { useEffect, useState } from 'react';
import Brand from './Brand';
import styles from '../styles/components/Nav.module.css';
import CartIconNav from './CartIconNav';
import { useRouter } from 'next/router';
import { Navbar, Text, Button, Dropdown, User, Link } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { useJwt } from 'react-jwt';
import { selectItems } from '../store/slices/orderSlice';
const Nav = ({ auth }) => {
  const numberTotal = useSelector(selectItems);
  const router = useRouter();
  const getFromStorage = () => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('hifility');
    }
    return token;
  };
  const user = getFromStorage('hifility');
  const { isExpired } = useJwt(user);
  const isItExpired = isExpired;
  const [data, setData] = useState();
  useEffect(() => {
    if (!isItExpired) {
      fetch('https://hifility.herokuapp.com/auth/user', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [isItExpired, user]);

  const handleSignOut = () => {
    localStorage.removeItem('hifility');
    router.push('/');
  };

  const collapseItems = ['Products', 'Company', 'Signup', 'Login'];

  return (
    <Navbar maxWidth={'fluid'} isBordered variant='sticky'>
      <Navbar.Brand>
        <Brand />
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' enableCursorHighlight variant='underline'>
        <Navbar.Link hideIn='xs' onPress={() => router.push('/products')}>
          Products
        </Navbar.Link>
        <Navbar.Link hideIn='xs' onPress={() => router.push('/company')}>
          Company
        </Navbar.Link>
        <Navbar.Link hideIn='xs' href='#'></Navbar.Link>
        {isItExpired || auth ? (
          <>
            {' '}
            <Button
              className={styles.login_button}
              flat
              auto
              onPress={() => router.push('/login')}
            >
              <Text
                h1
                size={20}
                css={{
                  margin: 'auto',
                  color: 'black',
                }}
                weight='light'
              >
                Login
              </Text>
            </Button>
            <Button
              className={styles.signup_button}
              flat
              auto
              onPress={() => router.push('/signup')}
            >
              <Text
                h1
                size={20}
                css={{
                  margin: 'auto',
                  color: 'white',
                }}
                weight='light'
              >
                Sign Up
              </Text>
            </Button>
          </>
        ) : (
          <>
            <Dropdown placement='bottom-left'>
              <Dropdown.Trigger>
                <User
                  bordered
                  as='button'
                  size='lg'
                  name={data ? `${data.name}` : 'undefined'}
                  src=''
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color='primary' aria-label='User Actions'>
                <Dropdown.Item
                  textValue={'signed as'}
                  key='profile'
                  css={{ height: '$18' }}
                >
                  <Text b color='inherit' css={{ d: 'flex' }}>
                    Signed in as
                  </Text>
                  <Text b color='inherit' css={{ d: 'flex' }}>
                    {data ? data.email : 'undefined'}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item
                  textValue={'signed as'}
                  key='settings'
                  withDivider
                >
                  My Account
                </Dropdown.Item>
                <Dropdown.Item textValue={'signed as'} key='team_settings'>
                  Track products
                </Dropdown.Item>

                <Dropdown.Item
                  textValue={'signed as'}
                  key='logout'
                  color='error'
                  withDivider
                >
                  <Link onPress={handleSignOut} href='/'>
                    <button
                      style={{
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        margin: '0',
                        padding: '0',
                      }}
                      onPress={handleSignOut}
                    >
                      Log Out
                    </button>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}

        <div className={styles.cart_button}>
          <Button
            className={styles.cart_button_button}
            flat
            auto
            onPress={() => router.push('/cart')}
          >
            <CartIconNav />
            {numberTotal.cartItems.length !== 0 ? (
              numberTotal.cartItems.length
            ) : (
              <></>
            )}
          </Button>
        </div>
      </Navbar.Content>
      <Navbar.Toggle showIn={'xs'} aria-label='toggle navigation' />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>{item}</Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
