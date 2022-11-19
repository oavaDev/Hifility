import Reactm, { useState, useEffect } from 'react';
import { Text, Input, Button } from '@nextui-org/react';
import Brand from '../components/Brand';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';

import styles from '../styles/components/FormContainer.module.css';
import SignUpContainer from '../components/SignUpContainer';
const FormContainer = () => {
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

  const [submitData, setSubmitData] = useState({
    adress: '',
    city: '',
    state_province_region: '',
    zip: '',
    country: '',
    phoneNumber: '',
  });
  const [error, setError] = useState();
  const canContinue = () => {
    if (
      submitData.adress.length > 0 &&
      submitData.city.length > 0 &&
      submitData.state_province_region.length > 0 &&
      submitData.zip.length > 0 &&
      submitData.phoneNumber.length > 0 &&
      submitData.country.length > 0
    ) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    if (canContinue()) {
      await fetch('https://hifility.onrender.com/auth/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify(submitData),
      })
        .then((response) => response.json())
        .then((data) => {
          router.push('/payment');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  return (
    <>
      {isItExpired ? (
        <SignUpContainer />
      ) : (
        <>
          <div className={styles.Formcontainer__body}>
            <div className={styles.Formcontainer__body_brand}>
              <Brand />
            </div>
            <div className={styles.Formcontainer__body_text}>
              <span>
                <Text
                  h1
                  size={25}
                  css={{
                    margin: '1rem',
                    textAlign: 'center',
                    textGradient: '45deg, grey, black',
                  }}
                  weight='bold'
                >
                  In order to get your products at home, we need your shipping
                  info
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
              <div className={styles.Formcontainer__body_input}>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='Address'
                      underlined
                      labelLeft='Address'
                      value={submitData.adress}
                      placeholder='street 123 # 43-233'
                      onChange={(e) =>
                        setSubmitData({ ...submitData, adress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='City'
                      underlined
                      value={submitData.city}
                      labelLeft='City'
                      placeholder='Los Angeles'
                      onChange={(e) =>
                        setSubmitData({ ...submitData, city: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='zip'
                      underlined
                      value={submitData.zip}
                      labelLeft='ZIP'
                      placeholder='000000'
                      onChange={(e) =>
                        setSubmitData({ ...submitData, zip: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='State/Province/Region'
                      underlined
                      labelLeft='State/Province/Region'
                      value={submitData.state_province_region}
                      placeholder='California'
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          state_province_region: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='Country'
                      underlined
                      labelLeft='Country'
                      value={submitData.country}
                      placeholder='United States'
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className={styles.Formcontainer__body_input_item}>
                  <div>
                    <Input
                      aria-label='Number'
                      underlined
                      labelLeft='Number'
                      value={submitData.phoneNumber}
                      placeholder='+? 123456789'
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  {error ? (
                    <Text
                      h1
                      size={15}
                      css={{
                        textAlign: 'center',
                        textGradient: '45deg, grey, red',
                      }}
                      weight='light'
                    >
                      Fields needs to be filled
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
        </>
      )}
    </>
  );
};

export default FormContainer;
