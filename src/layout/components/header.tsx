import React from 'react';

// ui
import { Flex, Text, Avatar } from '@chakra-ui/react';

// constants
import { HEADER_HEIGHT } from '../constants';

export const Header: React.FC = () => (
  <Flex
    pl="42px"
    pr="36px"
    bg="white"
    h={HEADER_HEIGHT}
    align="center"
    justify="space-between"
  >
    <Flex
      align="center"
      justify="center"
    >
      <Text
        w="280px"
        fontWeight={900}
        fontSize={{ base: '24px' }}
      >
        OnCharge
      </Text>
    </Flex>

    <Flex align="center" gap="12px">
      <Avatar w="40px" h="40px" />
      <Flex direction="column">
        <Text fontSize={{ base: '14px' }} fontWeight={700}> Kazhymukhan Yerkinov </Text>
        <Text fontSize={{ base: '12px' }} color="gray.600"> Admin </Text>
      </Flex>
    </Flex>
  </Flex>
);
