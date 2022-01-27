import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { FeaturedProducts } from "../components/FeaturedProducts"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { TopSellers } from "../components/TopSellers"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <TopSellers/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

export default Home
