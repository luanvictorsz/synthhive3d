import { useReveal } from '../hooks/useReveal'
import styles from './Processo.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Escolha ou Envie',
    desc: 'Selecione um produto do catálogo ou envie seu arquivo STL para impressão personalizada.',
  },
  {
    num: '02',
    title: 'Orçamento',
    desc: 'Enviamos um orçamento rápido com prazo e opções de material e cor disponíveis.',
  },
  {
    num: '03',
    title: 'Impressão',
    desc: 'Produção com alta precisão e acompanhamento em tempo real pelo WhatsApp.',
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Embalagem segura e envio para todo o Brasil. Retirada em SP também disponível.',
  },
]

export default function Processo() {
  const { ref, visible } = useReveal()

  return (
    <section id="processo" ref={ref} className={`${styles.section} ${visible ? styles.on : ''}`}>
      <h2>DO PEDIDO À ENTREGA</h2>
      <div className={styles.steps}>
        {STEPS.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.title}>{s.title}</div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
