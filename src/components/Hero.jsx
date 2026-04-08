import { useReveal } from '../hooks/useReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className={`${styles.hero} ${visible ? styles.on : ''}`}>
      <div className={styles.eyebrow}>Impressão 3D</div>
      <h1 className={styles.h1}>
        MODELOS<br /><em>3D SOB Encomenda</em>
      </h1>
      <p className={styles.sub}>
        Chaveiros, suportes para Alexa, decorações, action figures e máscaras.
        Cada peça impressa com precisão e acabamento profissional.
      </p>
      <div className={styles.actions}>
        <a href="#produtos" className={styles.btnY}>Ver Catálogo</a>
        <a href="#contato" className={styles.btnO}>Peça o Seu</a>
      </div>
    </section>
  )
}
