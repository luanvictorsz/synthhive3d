import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        SYNTH <span>HIVE</span> 3D
      </div>
      <p>© 2025 Synth Hive 3D — Todos os direitos reservados</p>
    </footer>
  )
}
