import React, { useContext } from 'react'
import { cartContext } from '../App';

export default function Cart() {

  const { cart, setCart } = useContext(cartContext);

  let total = 0;
  return (
    <div className='flex justify-evenly items-start mt-10'>
      <div className='w-[45%]'>
        {cart.map((item) => {
          return <div key={item.id}>

            <div className='flex items-center border p-2 bg-slate-50 gap-6 mb-5'>
              <img src={item.image} alt="" className='w-[100px] h-[75px] object-contain' />
              <div className='flex flex-col gap-4 w-[40%] overflow-hidden'>
                <p className='font-bold'>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.smallDescription}</p>
              </div>
             
            </div>
          </div>
        })}



    </div>
        
        <div className="billing">
                <div>
                  <h2 className='text-2xl font-bold'>Total Amount</h2>
                </div>
                <div className="cart-item">
                  {cart.forEach((obj)=>{

                    total = total + obj.price;
                    
                  })}

                  <p className='text-2xl text-center'>{total.toFixed(2)}</p>

                </div>


              </div>
        
        </div>
  )
}
