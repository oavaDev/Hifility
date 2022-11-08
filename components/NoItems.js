import React from 'react';
import { Text } from '@nextui-org/react';

const NoItems = () => {
  return (
    <div>
      <Text
        h1
        size={30}
        weight={'bold'}
        css={{
          textAlign: 'center',

          textGradient: '0deg, grey 1%, black',
        }}
      >
        It is empty around here, go find and buy some headphones!
      </Text>
    </div>
  );
};

export default NoItems;
