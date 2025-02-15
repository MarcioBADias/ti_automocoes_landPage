import { About } from '@/components/About/Index'
import { Contact } from '@/components/Contact'
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
