import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/elements/Button'
import { Banner } from '../components/Banner'
import { CategoriesSection } from '../components/CategoriesSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner/>
      <CategoriesSection/>
      <Footer/>
    </div>
  )
}
