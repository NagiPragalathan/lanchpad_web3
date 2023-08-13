import React from 'react'
import '@/style/card.css'

export const Card = () => {
  return (
    <div className='card'>
        <div className='card_right'>
            <p>Invest in promising</p>
            <h1>
                UBEX Projects
            </h1>
            <button>View All</button>
        </div>
        <div className='card_left'>
            <div className='card_to_btns'></div>
            <div className='card_container'>
                <div className='img_container'>
                    <img src='https://media.istockphoto.com/id/1391668469/photo/web3-next-generation-world-wide-web-blockchain-technology-with-decentralized-information.webp?b=1&s=170667a&w=0&k=20&c=NNUoL9BDhtoK9Zwf-Wk3Gy1Q8vcTqXAsMKCaG8AuXKU='/>
                </div>
                <div className='card_content'>
                    <h4>heading</h4>
                    <p>paragraph..</p>
                    <div className='card_total'>
                        <p>Total Raised :</p>
                        <p>$12,0000</p>
                    </div>
                    <div className='card_total'>
                        <p>Participant :</p>
                        <p>12</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
