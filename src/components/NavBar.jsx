import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from './cartWidget'
import { Box, Flex, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>

        <Flex>
        <Box p='4' bg='red.400'>
        <h1>Brand</h1>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
        <Menu>
        <MenuButton>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>A</MenuItem>
            <MenuItem>B</MenuItem>
            <MenuItem>C</MenuItem>
        </MenuList>
        </Menu>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
        <CartWidget/>  
        </Box>
        </Flex>

    </div>
  )
}

export default Navbar