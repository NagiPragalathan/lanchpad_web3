"use client";

import Link from 'next/link';
import React from 'react'
import '@/style/menu.css'
export const Menu = () => {
  return (
    <div>
        <nav className='menu'>
            <div>
                logo
            </div>
                <div className='center_menu'>
                    <Link href='/' >Home</Link>
                    <Link href='/pools' >Pools</Link>
                    <Link href='/staking' >Staking</Link>
                    <Link href='/careers' >Careers</Link>
                    <Link href='/faq' >FAQs</Link>
                </div>
                <div>
                    <button className='menu_btn' onClick={()=>{
                        console.log("clicked...")
                    }}>btn</button>
                    <button className='wallet'><span></span>Connect wallet</button>
                </div>
        </nav>
    </div>
  )
}
