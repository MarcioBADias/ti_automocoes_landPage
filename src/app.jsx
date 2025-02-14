import { About } from './components/About/Index'
import { Header } from './components/Header'

const App = () => {
  return (
    <main className="app">
      <Header />
      <About />
      <section
        style={{ background: 'var(--color-secondary)', padding: 50 }}
        className="Products"
      >
        <div
          className="prev_about"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <h1 style={{ marginBottom: 10 }}>Nossos serviços</h1>
          <p>
            Somos uma empresa especializada em **soluções inovadoras em
            automação tecnológica**, oferecendo serviços que otimizam processos,
            aumentam a eficiência operacional e impulsionam a transformação
            digital. Nosso compromisso é desenvolver e implementar **tecnologias
            inteligentes** que automatizam tarefas, reduzem custos e melhoram a
            experiência dos nossos clientes. Com uma equipe altamente
            qualificada e expertise em **integração de sistemas, IoT,
            inteligência artificial e automação de processos**, entregamos
            soluções personalizadas para diversos setores, garantindo inovação,
            segurança e alto desempenho. Seja para **empresas que buscam
            modernizar operações, aumentar a produtividade ou aprimorar a
            gestão**, estamos prontos para transformar desafios em oportunidades
            através da tecnologia! 🚀
          </p>
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
          <p>FORM</p>
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
