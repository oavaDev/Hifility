import React, { useEffect, useState } from 'react';
import Brand from './Brand';
import styles from '../styles/components/Nav.module.css';
import Icon from './Icon';
import CartIconNav from './CartIconNav';
import { useRouter } from 'next/router';
import {
  Navbar,
  Text,
  Link,
  Button,
  Dropdown,
  Spacer,
  User,
} from '@nextui-org/react';
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
      fetch('http://localhost:8080/auth/user', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          console.log(data.data);
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
    <Navbar maxWidth={'fluid'} shouldHideOnScroll isBordered variant='sticky'>
      <Navbar.Brand>
        <Brand />
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' enableCursorHighlight variant='underline'>
        <Navbar.Link hideIn='xs' onClick={() => router.push('/products')}>
          Products {/**need to change this to a router.push **/}
        </Navbar.Link>
        <Navbar.Link hideIn='xs' href='#'>
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
              onClick={() => router.push('/login')}
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
              onClick={() => router.push('/signup')}
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
                <Dropdown.Item key='profile' css={{ height: '$18' }}>
                  <Text b color='inherit' css={{ d: 'flex' }}>
                    Signed in as
                  </Text>
                  <Text b color='inherit' css={{ d: 'flex' }}>
                    {data ? data.email : 'undefined'}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key='settings' withDivider>
                  My Account
                </Dropdown.Item>
                <Dropdown.Item key='team_settings'>
                  Track products
                </Dropdown.Item>

                <Dropdown.Item key='logout' color='error' withDivider>
                  <button
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      margin: '0',
                      padding: '0',
                    }}
                    onClick={handleSignOut}
                  >
                    Log Out
                  </button>
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
            as={Link}
            href='#'
          >
            <CartIconNav />
            {numberTotal.length !== 0 ? numberTotal.length : <></>}
          </Button>
        </div>
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
