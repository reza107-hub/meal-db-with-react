import React, { useEffect, useState } from 'react';
const Cart = ({names}) => {
    const [n,setN] = useState([])
    useEffect(()=>{
        const allNames = [...n,names]
        setN(allNames)
    },[names])

    return (
        <div>
            <div  className='bg-orange-300 p-5 sticky top-0'>
            <h1 className='text-center font-bold'>Order Summary</h1>
            <div>
                <p>Food Name:</p>
                {
                    n.map(name=><p>{name}</p>)
                }
            </div>
            </div>
        </div>
    );
};

export default Cart;