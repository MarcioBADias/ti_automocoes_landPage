import { About } from '@/components/Home-Form/Index'
import { Contact } from '@/components/Advantages'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { Services } from '@/components/Services'

const App = () => {
  return (
    <main className="app">
      <Header />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export { App }
