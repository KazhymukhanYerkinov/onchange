import React from 'react';

// ui
import { NavItem } from './nav-item/nav-item';
import { Box, type BoxProps, Flex, Accordion } from '@chakra-ui/react';

// constants
import { SIDEBAR_WIDTH, navItems } from '../constants';

export interface SidebarProps extends BoxProps {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { ...rest } = props;

  const [collapsed, setCollapsed] = React.useState([0]);

  const handleCollapsed = (idx: number) => {
    setCollapsed((prevCollapsed) => {
      if (prevCollapsed.includes(idx)) {
        return prevCollapsed.filter((prevIdx) => prevIdx !== idx);
      }
      prevCollapsed.push(idx);
      return prevCollapsed;
    });
  };

  return (
    <Box
      h="full"
      position="fixed"
      w={{ base: 'full', md: SIDEBAR_WIDTH }}
      {...rest}
    >
      <Flex
        w="280px"
        gap="10px"
        m="20px auto"
        align="center"
        justify="space-between"
        direction="column"
      >
        <Accordion w="100%" allowMultiple defaultIndex={collapsed}>
          {navItems.map((nav) => (
            <NavItem key={nav.idx} handleCollapsed={handleCollapsed} {...nav} />
          ))}
        </Accordion>

      </Flex>

    </Box>
  );
};
