import React from 'react'
import amazon from '/brand/amazon-high-resolution-logo-transparent.png'
import nokia from '/brand/nokia-high-resolution-logo-transparent.png'
import bmw from '/brand/bmw-high-resolution-logo-transparent.png'
import firebolt from '/brand/firebolt-high-resolution-logo-transparent.png'
import space from '/brand/space-high-resolution-logo-transparent.png'

const Page3 = () => {
  return (
    <>
    <div className=' bg-cream1 flex items-center justify-center gap-40 '>
        <img className='h-[100px]' src={amazon}/>
        <img className='h-[100px]' src={nokia}/>
        <img className='h-[100px]' src={bmw}/>
        <img className='h-[100px]' src={firebolt}/>
        <img className='h-[100px]' src={space}/>
    </div>
    </>
  )
}

export default Page3