import React from 'react'
import Navbar from './components/Navbar.jsx'
import Section1 from './components/Section1/Section1.jsx'
import heart4 from './assets/heart4.png'
import dollar from './assets/dollar.png'
import chineseCoin from './assets/chinesecoin.png'
import elizabeth from './assets/elizabeth.png'
import bitcoin from './assets/bitcoin.png'

const cardData = [
  {
    name: "Bitcoin",
    img: bitcoin,
    year: 2026,
    upTme: "17/01/2026",
    desc: "A symbol of digital revolution and decentralized wealth—Bitcoin represents innovation, independence, and the future of finance."
  },
  {
    name: "Chinese Coin",
    img: chineseCoin,
    year: 2025,
    upTme: "08/02/2025",
    desc: "Rooted in ancient tradition, this coin signifies prosperity, balance, and good fortune across generations."
  },
  {
    name: "Dollar",
    img: dollar,
    year: 2024,
    upTme: "11/11/2024",
    desc: "A timeless emblem of wealth and power—the Dollar signifies financial strength, opportunity, and global value."
  },
  {
    name: "Royal Sovereign",
    img: elizabeth,
    year: 2023,
    upTme: "06/05/2023",
    desc: "Representing legacy and authority, the Royal Sovereign reflects enduring value, heritage, and national pride."
  },
  {
    name: "Heart of Leaves",
    img: heart4,
    year: 2025,
    upTme: "03/03/2025",
    desc: "A symbol of growth, harmony, and natural abundance—Heart of Leaves represents prosperity rooted in balance and renewal."
  }
]

const App = () => {
  return (
    <div className="w-full h-full bg-black">
    <Navbar />
    <Section1 data={cardData} />
    </div>
  )
}

export default App