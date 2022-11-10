import Reactm, { useState } from 'react';
import { Text, Input, Button } from '@nextui-org/react';
import Brand from '../components/Brand';
import { useRouter } from 'next/router';
import styles from '../styles/components/FormContainer.module.css';
const FormContainer = () => {
  const router = useRouter();
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const [submitData, setSubmitData] = useState({
    fullName: '',
    adress: '',
    city: '',
    state_province_region: '',
    zip: '',
    country: '',
    phoneNumber: '',
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
            In order to get your product at home, we need your shipping info
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
                aria-label='name'
                underlined
                value={submitData.fullName}
                labelLeft='Full name'
                placeholder='Jhon Doe'
                onChange={(e) =>
                  setSubmitData({ ...submitData, fullName: e.target.value })
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
                  setSubmitData({ ...submitData, country: e.target.value })
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
                  setSubmitData({ ...submitData, phoneNumber: e.target.value })
                }
              />
            </div>
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

export default FormContainer;
