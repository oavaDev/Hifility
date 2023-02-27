import React, { useState } from 'react';
import { Text, Input, Button, Link } from '@nextui-org/react';
import styles from '../styles/components/LoginContainer.module.css';
import Brand from './Brand';
import { useRouter } from 'next/router';
const LoginContainer = () => {
  const router = useRouter();
  const [submitData, setSubmitData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const [token, setToken] = useState();
  const handleSubmit = async (e) => {
    await fetch('https://hifilityback-production.up.railway.app/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token === undefined) {
          setError(true);
          localStorage.setItem('hifility', undefined);
        } else {
          localStorage.setItem('hifility', data.token);
          setError(false);
          router.push('/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(true);
      });
  };

  return (
    <div className={styles.Logincontainer__body}>
      <div className={styles.Logincontainer__body_brand}>
        <Brand />
      </div>
      <div className={styles.Logincontainer__body_text}>
        <span>
          <Text
            h1
            size={30}
            css={{
              textAlign: 'center',
              textGradient: '45deg, grey, black',
            }}
            weight='bold'
          >
            Sign in
          </Text>
        </span>
        <span>
          <Text
            h1
            size={20}
            css={{
              textAlign: 'center',
              textGradient: '45deg, grey, black',
            }}
            weight='light'
          >
            Using your Hifility account
          </Text>
        </span>
      </div>
      <form>
        <div className={styles.Logincontainer__body_input}>
          <div className={styles.Logincontainer__body_input_email}>
            <Input
              aria-label='email'
              underlined
              labelLeft='Email'
              value={submitData.email}
              placeholder='Email address '
              onChange={(e) =>
                setSubmitData({ ...submitData, email: e.target.value })
              }
            />
          </div>
          <div>
            <Input.Password
              aria-label='email'
              underlined
              value={submitData.password}
              labelLeft='Password'
              placeholder='********'
              onChange={(e) =>
                setSubmitData({ ...submitData, password: e.target.value })
              }
            />
          </div>
        </div>
        {error ? (
          <div>
            <Text
              h1
              size={20}
              css={{
                textAlign: 'center',
                textGradient: '45deg, grey, black',
              }}
              weight='light'
            >
              Hubo un error en sus credenciales
            </Text>
          </div>
        ) : (
          <></>
        )}
        <div>
          <Button
            onClick={handleSubmit}
            className={styles.signup_button}
            type={'button'}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
