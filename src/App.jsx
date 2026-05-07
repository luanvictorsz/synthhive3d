import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Products from './components/Products'
import Processo from './components/Processo'
import Contato from './components/Contato'
import Footer from './components/Footer'
import CategoryPage from './components/CategoryPage'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  if (selectedCategory) {
    return (
      <>
        <Nav onLogoClick={() => setSelectedCategory(null)} />
        <CategoryPage category={selectedCategory} onBack={() => setSelectedCategory(null)} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Products onSelectCategory={setSelectedCategory} />
      <Processo />
      <Contato />
      <Footer />
    </>
  )
}