import React, { useState, useEffect } from 'react';
import styles from '../styles/components/UserContainer.module.css';
import { Text, Input, Button, Avatar } from '@nextui-org/react';
import Brand from '../components/Brand';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';

const UserContainer = () => {
  const router = useRouter();
  const getFromStorage = () => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('hifility');
    }
    return token;
  };
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const user = getFromStorage('hifility');
  const { isExpired } = useJwt(user);
  const [data, setData] = useState();
  const [submitData, setSubmitData] = useState({});

  const imageHandler = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append(`file`, file[i], file[i].name);
    }
    formData.append('upload_preset', 'hifility-preset');
    await fetch('https://api.cloudinary.com/v1_1/dj80e8qqp/auto/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.secure_url);
        setSubmitData({
          ...submitData,
          profilePhoto: data.secure_url,
        });
        setImage(data.secure_url);
      });
  };

  const handleChange = (event) => {
    setFile(event.target.files);
  };
  const retrieveData = async (e) => {
    await fetch('https://hifility.herokuapp.com/auth/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setSubmitData({
          name: data.data.name,
          fullName: data.data.fullName,
          adress: data.data.adress,
          city: data.data.city,
          state_province_region: data.data.state_province_region,
          zip: data.data.zip,
          country: data.data.country,
          phoneNumber: data.data.phoneNumber,
          profilePhoto: data.data.profilePhoto,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  console.log(data);
  useEffect(() => {
    retrieveData();
  }, []);
  const handleSubmit = async (e) => {
    console.log(submitData.profilePhoto);
    await fetch('http://localhost:8080/auth/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className={styles.Usercontainer__body}>
      <div className={styles.Usercontainer__body_brand}>
        <Brand />
      </div>
      <div className={styles.Usercontainer__body_text}>
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
            Here you can change or update your information
          </Text>
        </span>
      </div>
      <form>
        <div className={styles.Usercontainer__body_input}>
          <div className={styles.Usercontainer__body_input_item}>
            <Avatar squared src={image} />
          </div>
          <label htmlFor='profile-photo'>Selecciona tu foto</label>
          <input
            type='file'
            accept='image/*'
            name='profile-foto'
            id='profile-photo'
            onChange={handleChange}
          />
          {file !== null ? (
            <button type='button' onClick={imageHandler}>
              Cambiar
            </button>
          ) : (
            <></>
          )}

          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='name'
                value={submitData.fullName}
                labelLeft='Full name'
                placeholder='Jhon Doe'
                onChange={(e) =>
                  setSubmitData({
                    ...submitData,
                    fullName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='Address'
                labelLeft='Address'
                value={submitData.adress}
                placeholder='street 123 # 43-233'
                onChange={(e) =>
                  setSubmitData({ ...submitData, adress: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='City'
                value={submitData.city}
                labelLeft='City'
                placeholder='Los Angeles'
                onChange={(e) =>
                  setSubmitData({ ...submitData, city: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='zip'
                value={submitData.zip}
                labelLeft='ZIP'
                placeholder='000000'
                onChange={(e) =>
                  setSubmitData({ ...submitData, zip: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='State/Province/Region'
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
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='Country'
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
          <div className={styles.Usercontainer__body_input_item}>
            <div>
              <Input
                aria-label='Number'
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
          </div>
        </div>

        <div>
          <Button
            onClick={handleSubmit}
            className={styles.signup_button}
            type={'button'}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserContainer;
