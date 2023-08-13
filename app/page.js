import Image from 'next/image' 
import { Menu } from '@/componets/Menu'
import { Hero } from '@/componets/Hero'
import { Card } from '@/componets/Card'
import "./globals.css"
export default function Home() {
  return (
    <>
      <Menu />
      <Hero/>
      <Card/>
    </>
  )
}
