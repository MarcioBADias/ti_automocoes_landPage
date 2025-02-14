import { About } from './components/About/Index'
import { Header } from './components/Header'

const App = () => {
  return (
    <main className="app">
      <Header />
      <About />
      <section
        style={{ background: 'var(--color-light)', padding: 50 }}
        className="Products"
      >
        <div
          className="prev_about"
          style={{
            color: 'var(--color-primary)',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h1 style={{ marginBottom: 10 }}>Contato</h1>
          <img
            src="/PDV_Legal_Symbol.png"
            alt="PDV Legal"
            style={{ width: 500, marginTop: -90, marginRight: -50 }}
          />
        </div>
      </section>
      <section
        style={{ background: 'var(--color-secondary)', padding: 50 }}
        className="Products"
      >
        <div
          className="prev_about"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <h1 style={{ marginBottom: 10 }}>Nossos serviços</h1>
          <img src="/model_machine.png" alt="modelo de maquina" />
        </div>
      </section>
      <section style={{ padding: 50 }} className="Products">
        <div
          className="prev_about"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <h1 style={{ marginBottom: 10 }}>Clientes</h1>
          <p>Clientes na tela</p>
        </div>
      </section>

      <footer style={{ padding: 50 }} className="Products">
        <div
          className="prev_about"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <h1 style={{ marginBottom: 10 }}>Footer</h1>
          <p>Contatos</p>
        </div>
      </footer>
    </main>
  )
}

export { App }
