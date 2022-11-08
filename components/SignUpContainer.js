import React, { useState } from 'react';
import styles from '../styles/components/SignUpContainer.module.css';
import { Text, Input, Button, Link } from '@nextui-org/react';
import Brand from './Brand';
import { useRouter } from 'next/router';
const SignUpContainer = () => {
  const router = useRouter();
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [submitData, setSubmitData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(submitData.email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    submitData.name.length <= 3 ? setErrorName(true) : setErrorName(false);
    submitData.password.length < 8 ? setErrorPass(true) : setErrorPass(false);

    if (errorEmail === false && errorName === false && errorPass === false) {
      await fetch('https://hifility.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('hifility', data.data.token);
          router.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      localStorage.removeItem('hifility');
    }
  };
  return (
    <div className={styles.Registercontainer__body}>
      <div className={styles.Registercontainer__body_brand}>
        <Brand />
      </div>
      <div className={styles.Registercontainer__body_text}>
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
            Register
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
            Please fill all the fields
          </Text>
        </span>
      </div>
      <form>
        <div className={styles.Registercontainer__body_input}>
          <div className={styles.Registercontainer__body_input_item}>
            <div>
              <Input
                aria-label='name'
                underlined
                value={submitData.name}
                labelLeft='Name'
                placeholder='Jhon Doe'
                onChange={(e) =>
                  setSubmitData({ ...submitData, name: e.target.value })
                }
              />
            </div>
            {errorName ? (
              <Text
                h1
                size={15}
                css={{
                  textAlign: 'center',
                  textGradient: '45deg, grey, red',
                }}
                weight='light'
              >
                Type at least 4 characters
              </Text>
            ) : (
              ''
            )}
          </div>
          <div className={styles.Registercontainer__body_input_item}>
            <div>
              <Input
                aria-label='email'
                underlined
                labelLeft='Email'
                value={submitData.email}
                placeholder='JhonDoe@xyz.com'
                onChange={(e) =>
                  setSubmitData({ ...submitData, email: e.target.value })
                }
              />
            </div>
            {errorEmail ? (
              <Text
                h1
                size={15}
                css={{
                  textAlign: 'center',
                  textGradient: '45deg, grey, red',
                }}
                weight='light'
              >
                Type a valid email
              </Text>
            ) : (
              ''
            )}
          </div>
          <div className={styles.Registercontainer__body_input_item}>
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
            {errorPass ? (
              <Text
                h1
                size={15}
                css={{
                  textAlign: 'center',
                  textGradient: '45deg, grey, red',
                }}
                weight='light'
              >
                Type at least 8 characters
              </Text>
            ) : (
              ''
            )}
          </div>
        </div>

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

export default SignUpContainer;
