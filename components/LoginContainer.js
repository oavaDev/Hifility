import React from 'react';
import { Text, Input, Button, Link } from '@nextui-org/react';
import styles from '../styles/components/LoginContainer.module.css';
import Brand from './Brand';
const LoginContainer = () => {
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
      <div className={styles.Logincontainer__body_input}>
        <div className={styles.Logincontainer__body_input_email}>
          <Input
            aria-label='email'
            underlined
            labelLeft='Email'
            placeholder='Email address '
          />
        </div>
        <div>
          <Input.Password
            aria-label='email'
            underlined
            labelLeft='Password'
            placeholder='****'
          />
        </div>
      </div>
      <div>
        <Button className={styles.signup_button} flat as={Link} href='#'>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LoginContainer;
