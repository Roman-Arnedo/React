import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from './cartWidget'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = ({category}) => {

  return (
    <div>

        <Flex>
        <Box p='4'>
          <Link to='/'>
            <h1>Brand</h1>
          </Link>
        </Box>
        <Spacer />
        <Box p='4'>
        <Menu>
        <MenuButton>
            Filtrar
        </MenuButton>
        <MenuList>

            <MenuItem>
            <Link to={`/productos/${category}`}>A</Link>
            </MenuItem>

            <MenuItem>
            <Link to={`/productos/${category}`}>B</Link>
            </MenuItem>

            <MenuItem>
            <Link to={`/productos/${category}`}>C</Link>
            </MenuItem>

            <MenuItem>
            <Link to={`/productos/${category}`}>D</Link>
            </MenuItem>

        </MenuList>
        </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <Link to={"/cart"}>
          <CartWidget/>  
          </Link>
        </Box>
        </Flex>

    </div>
  )
}

export default Navbar