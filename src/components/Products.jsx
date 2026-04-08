import { useReveal } from '../hooks/useReveal'
import ProductCard from './ProductCard'
import styles from './Products.module.css'

const PRODUCTS = [
  {
    badge: 'TOP VENDA',
    category: 'Acessório',
    name: 'Chaveiros 3D',
    description: 'Personalizados com qualquer tema: logos, personagens, formas geométricas e muito mais.',
    price: '15',
    imgPlaceholderLabel: 'FOTO DOS CHAVEIROS',
  },
  {
    category: 'Organização',
    name: 'Suporte Alexa',
    description: 'Suportes decorativos para Amazon Echo, Dot e demais modelos. Designs exclusivos.',
    price: '45',
    imgPlaceholderLabel: 'FOTO SUPORTE ALEXA',
  },
  {
    badge: 'EXCLUSIVO',
    category: 'Decoração',
    name: 'Decorativos',
    description: 'Esculturas, miniaturas e objetos decorativos para transformar qualquer ambiente.',
    price: '60',
    imgPlaceholderLabel: 'FOTO DECORATIVOS',
  },
  {
    category: 'Colecionável',
    name: 'Action Figures',
    description: 'Figuras detalhadas de personagens, heróis, vilões e criações originais.',
    price: '80',
    imgPlaceholderLabel: 'FOTO ACTION FIGURES',
  },
  {
    badge: 'DESTAQUE',
    category: 'Cosplay / Arte',
    name: 'Máscaras 3D',
    description: 'Para cosplay, decoração e eventos. Personagens, robôs, animais e designs únicos.',
    price: '120',
    imgPlaceholderLabel: 'FOTO DAS MÁSCARAS',
  },
  {
    badge: 'VOCÊ CRIA',
    badgeOutline: true,
    category: 'Personalizado',
    name: 'Seu Modelo',
    description: 'Envie seu arquivo STL ou sua ideia. Imprimimos qualquer modelo sob medida.',
    priceLabel: 'Orçamento\nGrátis',
    imgPlaceholderLabel: 'FOTO PERSONALIZADO',
    highlighted: true,
  },
]

export default function Products() {
  const { ref, visible } = useReveal()

  return (
    <section id="produtos">
      <div ref={ref} className={`${styles.header} ${visible ? styles.on : ''}`}>
        <h2>NOSSOS PRODUTOS</h2>
        <p>Cada peça é impressa sob demanda com filamento premium e acabamento profissional.</p>
      </div>
      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
