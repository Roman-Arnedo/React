/*import React from 'react'
import { useState, useEffect } from 'react'

const Loader = () => {

    const [loading, setLoading] = useState()
    const [elementos, setElementos]= useState()

    useEffect(()=>{
        setTimeout(() => {
            setElementos(["A", "B", "C"])
        }, 5000);
    }, [])

    if(loading){
        return<Loader/>
    }


  return (
    <div>
        <h2>Elementons</h2>
        <ul>
            {
                elementos.map((e)=>{
                   <li>key={e}>{e}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Loader*/