import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Text, Link } from '@chakra-ui/react';

// types
import { type INavItem } from '../../types';

// styles
import styles from './nav-item.module.css';

export interface NavItemProps extends INavItem {
  handleCollapsed: (idx: number) => void
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { idx, title, children, icon, handleCollapsed } = props;

  const pathname = usePathname();

  return (
    <AccordionItem my="8px" border="none">
      <AccordionButton onClick={() => { handleCollapsed(idx); }}>
        <Flex
          py="8px"
          w="100%"
          gap="8px"
          align="center"
          cursor="pointer"
        >
          {icon}
          <Text color="gray.600">
            {title}
          </Text>
        </Flex>
        <AccordionIcon color="gray.600" />
      </AccordionButton>
      <AccordionPanel>
        <Flex direction="column">
          {children.map(({ id, url, name }) => (
            <Link
              key={id}
              href={url}
              as={NextLink}
              gap="8px"
              px="12px"
              height="40px"
              display="flex"
              alignItems="center"
              borderRadius="8px"
              className={pathname === url ? styles.activeNavItem : styles.defaultNavItem}
            >
              <Flex
                w="10px"
                h="10px"
                border="1px solid"
                borderRadius="999rem"
              />
              <Text>
                {name}
              </Text>
            </Link>
          ))}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
