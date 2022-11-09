import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectItems } from '../store/slices/orderSlice';
import { addToOrder, removeFromOrder } from '../store/slices/orderSlice';
import { selectTotal } from '../store/slices/orderSlice';
import { Text, Button } from '@nextui-org/react';
import styles from '../styles/components/CartContainer.module.css';
import NoItems from './NoItems';
const CartContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

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
                h1
                size={30}
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
                h1
                size={30}
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
                h1
                size={30}
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
                h1
                size={30}
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
                      h1
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
                      h1
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
                TOTAL: {total.toFixed(2)}
              </Text>
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
