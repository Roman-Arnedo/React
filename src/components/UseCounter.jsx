import React, { useState } from 'react';
import { Flex, Box, Button, Spacer } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex>
      <Box>
        <Button variant="outline" colorScheme="teal" m={1}>
          -
        </Button>
        <Button m={1}>{count}</Button>
        <Button variant="outline" colorScheme="teal" m={1}>
          +
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Button>Add to cart</Button>
      </Box>
    </Flex>
  );
};

export default Counter;