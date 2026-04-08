import styles from './Nav.module.css'

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        SYNTH <span>HIVE</span> 3D
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
