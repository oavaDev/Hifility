import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import Layout from '../components/Layout';
import { useJwt } from 'react-jwt';
const Form = () => {
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
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [isItExpired, user]);
  return (
    <Layout footer={false}>
      {!loading ? (
        data.adress ? (
          <>{data.adress}</>
        ) : (
          <FormContainer />
        )
      ) : (
        <>loading</>
      )}
    </Layout>
  );
};

export default Form;
