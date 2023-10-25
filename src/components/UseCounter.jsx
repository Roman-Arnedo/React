import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
    const [count, setCount]= useState(initialValue)

    const increment = ()=>{
        setCount((previousCount) => previousCount + step)
    }

    const decrement =()=>{
        setCount((previousCount)=> previousCount - step)
    }

    return{
        count,
        increment,
        decrement
    }
}

export default useCounter