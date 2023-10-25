import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'

const ItemDetail = ({productos}) => {

    const {id}= useParams()
    const productosFiltrados = productos.filter((productos) => productos.id == id)
    
  return (
    <>
    {productosFiltrados.map((p)=>{
        return(
            <Card maxW='sm'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{p.name}</Heading>
                <Text>
                  {p.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {p.price}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
        )
    })}
    </>
  )
}

export default ItemDetail