import styles from './Nav.module.css'

export default function Nav({ onLogoClick }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={onLogoClick} style={{ cursor: onLogoClick ? 'pointer' : 'default' }}>
        SYNTH <span>HIVE</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#processo">Processo</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <button className={styles.btn} onClick={() => scrollTo('contato')}>
        Pedir Orçamento
      </button>
    </nav>
  )
}
