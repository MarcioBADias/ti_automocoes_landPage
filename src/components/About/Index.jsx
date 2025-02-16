import React from 'react'
import { AnimatedLogo, Container } from './styles'

const About = () => {
  return (
    <section>
      <Container name="home" id="home">
        <AnimatedLogo
          src="/LogoProv.png"
          alt="Arte da Logo"
          className="logo_art"
        />
      </Container>
      <Container
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <h1 style={{ marginBottom: 10 }}>
          Soluções em automoções tecnologicas
        </h1>
        <p>
          Somos uma empresa especializada em **soluções inovadoras em automação
          tecnológica**, oferecendo serviços que otimizam processos, aumentam a
          eficiência operacional e impulsionam a transformação digital. Nosso
          compromisso é desenvolver e implementar **tecnologias inteligentes**
          que automatizam tarefas, reduzem custos e melhoram a experiência dos
          nossos clientes. Com uma equipe altamente qualificada e expertise em
          **integração de sistemas, IoT, inteligência artificial e automação de
          processos**, entregamos soluções personalizadas para Containerersos
          setores, garantindo inovação, segurança e alto desempenho. Seja para
          **empresas que buscam modernizar operações, aumentar a produtividade
          ou aprimorar a gestão**, estamos prontos para transformar desafios em
          oportunidades através da tecnologia! 🚀
        </p>
      </Container>
    </section>
  )
}

export { About }
