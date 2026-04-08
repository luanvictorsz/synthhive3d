import styles from './Ticker.module.css'

const items = [
  'CHAVEIROS', 'SUPORTE ALEXA', 'DECORATIVOS', 'ACTION FIGURES',
  'MÁSCARAS', 'PERSONALIZADO', 'ENTREGA RÁPIDA', 'SYNTH HIVE 3D',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={i % 2 === 1 ? styles.dot : ''}>
            {i % 2 === 1 ? '✦' : item}
          </span>
        ))}
      </div>
    </div>
  )
}
