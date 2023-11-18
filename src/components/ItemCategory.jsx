import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import UseCounter from './UseCounter'


const ItemCategory = ({productos}) => {
    const {id}= useParams()
    const {category}= useParams()

    const categoriaFiltrada = productos.filter((productos) => productos.category == category)

  return (
    <>
    {categoriaFiltrada.map((p)=>{
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
                    <UseCounter/>
                </ButtonGroup>
            </CardFooter>
            </Card>
        )
    })}
    </>
  )
}

export default ItemCategory