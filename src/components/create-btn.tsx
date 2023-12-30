import React from 'react';

// ui
import NextLink from 'next/link';
import { Button, Flex, type FlexProps, Link } from '@chakra-ui/react';

// icons
import { AddIcon } from '@chakra-ui/icons';

interface CreateButtonProps extends FlexProps {
  href: string
  children: React.ReactNode
}
export const CreateButton: React.FC<CreateButtonProps> = (props) => {
  const { href, children, ...rest } = props;
  return (
    <Flex my="8px" justify="flex-end" {...rest}>
      <Link as={NextLink} href={href}>
        <Button
          width="200px"
          fontWeight={700}
          colorScheme="green"
          leftIcon={<AddIcon fontSize="14px" />}
        >
          {children}
        </Button>
      </Link>
    </Flex>
  );
};
