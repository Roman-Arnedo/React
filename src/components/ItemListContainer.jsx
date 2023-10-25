import React from 'react'
import ItemList from './ItemList'

const itemListContainer = () => {
    
  const productos = [

    { id: "1", name: "Producto A", description: "Descripcion del producto A", stock: 10, price: 2000, category: 'A' },
    { id: "2", name: "Producto B", description: "Descripcion del producto B", stock: 20, price: 2000, category: 'B' },
    { id: "3", name: "Producto C", description: "Descripcion del producto C", stock: 30, price: 2000, category: 'C' },
    { id: "4", name: "Producto D", description: "Descripcion del producto D", stock: 40, price: 2000, category: 'D' },

    ]

    const mostrarProductos = new Promise((resolve, reject) =>{
        if(productos.length > 0){
            setTimeout(() => {
                resolve (productos)
            }, 2000)
        }else{
            reject ("No hay productos disponibles")
        }
    })

    mostrarProductos
        .then ((resultado) => {
            console.log(resultado)
        })
        .catch((error) =>{
            console.log(error)
        })

  return (
    <div>
    <ItemList productos={productos}/>
    </div>
  )
}

export default itemListContainer