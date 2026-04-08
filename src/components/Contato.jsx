import { useReveal } from '../hooks/useReveal'
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from './Contato.module.css'

const LINKS = [
  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/synthhive' },
  { icon: <FaEnvelope />, label: 'E-mail', href: 'mailto:contato@synthhive3d.com' },
]

export default function Contato() {
  const text = useReveal()
  const btns = useReveal()

  return (
    <section id="contato" className={styles.section}>
      <div ref={text.ref} className={`${styles.text} ${text.visible ? styles.on : ''}`}>
        <h2>TRAGA<br />SUA <span>IDEIA</span></h2>
        <p>
          Fale com a gente pelo WhatsApp ou Instagram. Respondemos rápido e o
          orçamento é sem compromisso.
        </p>
      </div>
      <div ref={btns.ref} className={`${styles.buttons} ${btns.visible ? styles.on : ''}`}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon}>{l.icon}</span>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
