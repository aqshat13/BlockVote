import React from 'react'
import './App.css'
import headerImg from './assets/headerImg.svg'

const Banner = () => {
  return (
    <div className="banner mt-5">
  <div className="head">
   <h3> This is a BlockChain based Voting System!!</h3>
  </div>
  <div className='head2'>
  <h3>Human</h3>
  <div>
  <img src={headerImg} alt="Header Img"/>
  </div>
  <h3>Alien</h3>
  </div>
  </div>
  )
}

export default Banner;