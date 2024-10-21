import React from 'react'
import Hero from '../Component/hero/Hero'
import Popular from '../Component/popular/Popular'
import Offers from '../Component/offers/Offers'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewsLatter from '../Component/NewsLatter/NewsLatter'

export default function Shop() {
  
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>  
      <NewsLatter/>
    </div>
  )
}
