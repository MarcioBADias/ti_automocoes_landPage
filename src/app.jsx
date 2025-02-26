import { HomeForm } from '@/components/Home-Form'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { Services } from '@/components/Services'

const App = () => {
  return (
    <main className="app">
      <Header />
      <HomeForm />
      <Products />
      <Services />
      <Footer />
    </main>
  )
}

export { App }
