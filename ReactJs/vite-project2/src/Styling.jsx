import React from 'react'
import './Style.css'


export default function Styling() {
    return (
        <div className='navbar d-flex'>
                {/* <div className="logo"> */}
                    <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/logo.svg" alt="" />
                {/* </div> */}
            <div className='nav container d-flex justify-content-between'>
                <div className="search-bar">
                    <select name="" id="" >
                        <option value="">All Catagories</option>
                        <option value="">Men's</option>
                        <option value="">Women's</option>
                        <option value="">Kids</option>
                    </select>
                    <input type="text" placeholder='search' />
                </div>

                <div className='side-logo d-flex'>
                    <div>

                        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-compare.svg" alt="" />
                        <span>Compare</span>
                    </div>
                    <div>

                        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-heart.svg" alt="" />
                        <span>Compare</span>
                    </div>
                    <div>

                        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-cart.svg" alt="" />
                        <span>Compare</span>
                    </div>
                    <div>

                        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-user.svg" alt="" />
                        <span>Compare</span>
                    </div>
                </div>




            </div>

        </div>
    )
}
