import React from 'react';
import Icon from './Icon';
import { Text, Spacer } from '@nextui-org/react';
import { Link, Button } from '@nextui-org/react';
const Brand = () => {
  return (
    <Button
      style={{ backgroundColor: '#F2F2F2', color: 'black' }}
      flat
      auto
      as={Link}
      href='/'
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon />
        <Spacer />
        <Text b color='inherit'>
          Hifility
        </Text>
      </div>
    </Button>
  );
};

export default Brand;
