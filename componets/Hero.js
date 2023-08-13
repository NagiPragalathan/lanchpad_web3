import React from 'react'
import '@/style/hero.css'
import Home_img from "../public/home_image.png"
import Side_Style from "../public/side_style.png"
import Image from 'next/image'
export const Hero = () => {
  return (
    <div className='container'>
        <section>
            <div className='cont'>
                <div className='left'>
                    <div>
                        <Image src={Side_Style} />
                    </div>
                    <div className='content'>
                        <h1>Decentralised</h1>
                        <h1>launchpad for</h1>
                        <span>BLOCKCHAIN</span>
                        <h1 style={{marginTop:"20px"}}>Projects.</h1>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <button className='button_style'>Explore</button>
                        <button className='button_style'>View Product</button>
                    </div>
                </div>
                <div className='right'>
                    <Image src={Home_img}/>
                </div>
            </div>
        </section>
    </div>
  )
}
