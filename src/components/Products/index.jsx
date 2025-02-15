import React from 'react'

const Products = () => {
  return (
    <section style={{ background: 'var(--color-light)', padding: 50 }}>
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
  )
}

export { Products }
