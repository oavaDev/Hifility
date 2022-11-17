import React, { useState } from 'react';
import { Text, Input, Button, Loading } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectItems } from '../store/slices/orderSlice';
import { removeFromOrder } from '../store/slices/orderSlice';
import { useRouter } from 'next/router';
import cx from 'classnames';
import styles from '../styles/components/PaymentContainer.module.css';
const PaymentContainer = () => {
  const router = useRouter();
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(0);
  const getFromStorage = () => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('hifility');
    }
    return token;
  };
  const user = getFromStorage('hifility');
  const handleBuy = () => {
    let ids = [];
    items.cartItems.map((x) => {
      ids.push(x.id);
    });
    setTimeout(() => {
      ids.forEach((x) => {
        fetch(`https://hifility.herokuapp.com/product/${x}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            deleteAll();
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    }, 2000);

    router.push('/track');
  };
  const deleteAll = () => {
    items.cartItems.map((item) => {
      const id = item.id;
      dispatch(removeFromOrder({ ...item, id }));
    });
  };

  const [active, setActive] = useState(false);
  const [submitData, setSubmitData] = useState({
    cardNumber: '',
    dateExpire: '',
    cardHolder: '',
  });

  const cardHandler = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={cx(styles.card__front, styles.card__part)}>
          <p className={styles.card_numer}>
            {submitData.cardNumber
              ? `${submitData.cardNumber.slice(0, 4)}
              ${submitData.cardNumber.slice(
                4,
                8
              )} ${submitData.cardNumber.slice(
                  8,
                  12
                )} ${submitData.cardNumber.slice(12, 16)}`
              : '**** **** **** 6258'}
          </p>

          <div className={styles.card__space_75}>
            <span className={styles.card__label}>Card holder</span>
            <p className={styles.card__info}>
              {submitData.cardHolder ? submitData.cardHolder : 'John Doe'}
            </p>
          </div>
          <div className={styles.card__space_25}>
            <span className={styles.card__label}>Expires</span>
            <p className={styles.card__info}>
              {submitData.dateExpire
                ? `${submitData.dateExpire.slice(
                    0,
                    2
                  )}/${submitData.dateExpire.slice(2, 4)}`
                : '10/25'}
            </p>
          </div>
        </div>
        <div
          className={
            active
              ? styles.card__part
              : cx(styles.card__back, styles.card__part)
          }
        >
          <div className={styles.card__black_line} />
          <div className={styles.card__back_content}>
            <div className={styles.card__secret}>
              <p className={styles.card__secret__last}>
                {submitData.cv ? submitData.cv : '420'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Logincontainer__body}>
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
              Add your billing info
            </Text>
          </span>
        </div>
        <form>
          <div className={styles.BillingContainer__body_input}>
            <div className={styles.BillingContainer__body_input_email}>
              <Input
                aria-label='CardNumber'
                css={{ marginBottom: '1rem' }}
                underlined
                autocomplete='cc-number'
                labelLeft='Card Number'
                maxLength={16}
                value={submitData.cardNumber}
                placeholder='**** **** **** **** '
                onChange={(e) =>
                  setSubmitData({ ...submitData, cardNumber: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                aria-label='cardHolder'
                css={{ marginBottom: '1rem' }}
                underlined
                value={submitData.cardHolder}
                labelLeft='Card Holder'
                placeholder='John Doe'
                onChange={(e) =>
                  setSubmitData({ ...submitData, cardHolder: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                aria-label='expiration'
                css={{ marginBottom: '1rem' }}
                underlined
                value={submitData.dateExpire}
                labelLeft='Expires in'
                placeholder='00/00'
                maxLength={4}
                onChange={(e) =>
                  setSubmitData({ ...submitData, dateExpire: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                aria-label='cv'
                underlined
                css={{ marginBottom: '1rem' }}
                value={submitData.cv}
                labelLeft='CV'
                placeholder='***'
                onFocus={cardHandler}
                onBlur={cardHandler}
                maxLength={3}
                onChange={(e) =>
                  setSubmitData({ ...submitData, cv: e.target.value })
                }
              />
            </div>
            <div>
              <Button
                onClick={handleBuy}
                className={styles.Buy_button}
                type={'button'}
              >
                Continue
              </Button>
              <Text
                h1
                size={20}
                css={{
                  textAlign: 'center',
                  textGradient: '45deg, grey, black',
                }}
                weight='light'
              >
                Once done, you will be redirected to the tracking page
              </Text>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentContainer;
