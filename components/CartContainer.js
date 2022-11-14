import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectItems } from '../store/slices/orderSlice';
import { addToOrder, removeFromOrder } from '../store/slices/orderSlice';
import { selectTotal } from '../store/slices/orderSlice';
import { Text, Button } from '@nextui-org/react';
import styles from '../styles/components/CartContainer.module.css';
import NoItems from './NoItems';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';
const CartContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [epayco, setEpayco] = useState();
  let nameOfProducts = '';
  items.cartItems.map((x) => {
    nameOfProducts += x.name;
  });

  useEffect(() => {
    if (!isItExpired) {
      fetch('https://hifility.herokuapp.com/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          console.log(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [isItExpired, user]);

  const handler = () => {
    if (typeof window !== 'undefined') {
      return window.ePayco.checkout.configure({
        key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        test: true,
      });
    }
  };

  const handleBuy = () => {
    handler().open({
      //Parametros compra (obligatorio)
      name: `${nameOfProducts}`,
      description: 'Great option',
      invoice: 'asdcj9823uadv34t',
      currency: 'usd',
      amount: `${total}`,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'en',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',
      response: 'http://localhost:3000/response',

      //Atributos cliente
      name_billing: `${data.fullName}`,
      address_billing: `${data.adress}`,
      type_doc_billing: 'cc',
      mobilephone_billing: `${data.phoneNumber}`,
      number_doc_billing: '1234567896',

      //atributo deshabilitación metodo de pago
      methodsDisable: ['SP'],
    });
  };
  console.log(data);
  const handleBuyButton = () => {
    if (data !== undefined) {
      if (data.adress !== undefined) {
        handleBuy();
      } else {
        router.push('/form');
      }
    } else {
      console.log('hola');
      router.push('/form');
    }
  };
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch(addToOrder({ ...item, quantity }));
  };
  const removeItemHandler = (item) => {
    const id = item.id;
    dispatch(removeFromOrder({ ...item, id }));
  };

  return (
    <div>
      {items.cartItems.length > 0 ? (
        <table className={styles.Table__body}>
          <thead className={styles.Table__body_head}>
            <th>
              <Text
                size={20}
                weight={'bold'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg, grey 1%, black',
                }}
              >
                Item
              </Text>
            </th>
            <th>
              <Text
                size={20}
                weight={'bold'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg, grey 50%, black',
                }}
              >
                Quantity
              </Text>
            </th>
            <th>
              <Text
                size={20}
                weight={'bold'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg, green 1%, grey',
                }}
              >
                Price
              </Text>
            </th>
            <th>
              <Text
                size={20}
                weight={'bold'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg,black 1%, red',
                }}
              >
                Action
              </Text>
            </th>
          </thead>
          <tbody className={styles.Table__body_body}>
            {items.cartItems.map((item) => {
              return (
                <tr className={styles.items} key={item.id}>
                  <td>
                    <Text
                      size={20}
                      weight={'bold'}
                      css={{
                        textAlign: 'center',
                        textGradient: '0deg, grey 1%, black',
                      }}
                    >
                      {item.brand} - {item.name}
                    </Text>
                  </td>
                  <td>
                    <select
                      className={styles.select}
                      value={item.quantity}
                      onChange={(e) => updateCartHandler(item, e.target.value)}
                    >
                      {[...Array(item.quantityStock).keys()].map((x) => (
                        <option value={x + 1} key={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <Text
                      size={20}
                      weight={'light'}
                      css={{
                        textAlign: 'center',
                        textGradient: '0deg,green 1%,grey',
                      }}
                    >
                      {item.price} USD
                    </Text>
                  </td>
                  <td className={styles.button_cont}>
                    <Button
                      onClick={() => removeItemHandler(item)}
                      color='error'
                      flat
                      auto
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tr className={styles.Table__Body_price}>
            <td></td>
            <td></td>
            <td>
              <Text
                h1
                size={20}
                weight={'bolder'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg,green 1%,grey',
                }}
              >
                TOTAL: {total.toFixed(2)} USD
              </Text>
            </td>
            <td className={styles.button_cont}>
              {!loading ? (
                <Button color='success' onClick={handleBuyButton} flat auto>
                  Buy Now
                </Button>
              ) : (
                <></>
              )}
            </td>
          </tr>
        </table>
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default CartContainer;
