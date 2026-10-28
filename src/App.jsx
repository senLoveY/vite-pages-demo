import { useState } from 'react'

const card = {
  background: '#f4f6fc',
  border: '1px solid #e2e8f0',
  borderRadius: 16,
  padding: '26px 28px',
}

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div
      style={{
        fontFamily: '-apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        color: '#060644',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 640, textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: 14,
            fontWeight: 700,
            color: '#0b5c58',
            background: '#eaf5f4',
            border: '1px solid #cfe9e7',
            padding: '6px 14px',
            borderRadius: 999,
            marginBottom: 20,
          }}
        >
          React + Vite · развёрнуто на GitHub Pages
        </span>
        <h1 style={{ fontSize: 44, margin: '0 0 12px' }}>Приложение работает 🎉</h1>
        <p style={{ fontSize: 18, color: '#5b6472', margin: '0 0 28px' }}>
          Это React-приложение, собранное Vite и опубликованное бесплатно на GitHub Pages
          через GitHub Actions.
        </p>
        <div style={{ ...card, display: 'inline-block' }}>
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#fff',
              background: '#72c3c0',
              border: 'none',
              borderRadius: 10,
              padding: '12px 24px',
              cursor: 'pointer',
            }}
          >
            Нажато раз: {count}
          </button>
          <p style={{ fontSize: 14, color: '#5b6472', margin: '14px 0 0' }}>
            Интерактивный компонент — JS работает на статическом хостинге
          </p>
        </div>
      </div>
    </div>
  )
}
