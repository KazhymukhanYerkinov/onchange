import React from 'react';
import { useRouter } from 'next/navigation';

// ui
import { Flex, Text, IconButton, Icon } from '@chakra-ui/react';

// assets
import { ArrowLeftOutlined } from '@ant-design/icons';

interface GoBackFormProps {
  children: React.ReactNode
}

export const GoBackForm: React.FC<GoBackFormProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  const goBack = () => { router.back(); };

  return (
    <Flex mb="16px" gap="8px" align="center">
      <IconButton
        size="lg"
        aria-label="icons"
        icon={<Icon as={ArrowLeftOutlined} />}
        onClick={goBack}
      />
      <Text
        fontWeight={700}
        fontSize={{ base: '24px' }}
      >
        {children}
      </Text>
    </Flex>
  );
};
