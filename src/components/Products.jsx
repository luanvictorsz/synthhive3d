import { useReveal } from '../hooks/useReveal'
import ProductCard from './ProductCard'
import styles from './Products.module.css'

const PRODUCTS = [
  {
    category: 'Acessório',
    name: 'Chaveiros 3D',
    description: 'Personalizados com qualquer tema...',
    price: '10',
    imgSrc: '/products/chaveiros.png',
    imgAlt: 'Chaveiros 3D',
  },
  {
    badge: 'TOP VENDA',
    category: 'Colecionável',
    name: 'Miniaturas',
    description: 'Figuras detalhadas...',
    price: '15',
    imgSrc: '/products/miniaturas.png',
    imgAlt: 'Miniaturas',
  },
  // {
  //   category: 'Organização',
  //   name: 'Suporte Alexa',
  //   description: 'Suportes decorativos...',
  //   price: '45',
  //   imgSrc: '/products/ghostface.png',
  //   imgAlt: 'Suporte Alexa',
  // },
  // {
  //   badge: 'EXCLUSIVO',
  //   category: 'Decoração',
  //   name: 'Decorativos',
  //   description: 'Esculturas...',
  //   price: '60',
  //   imgSrc: '/products/ghostface.png',
  //   imgAlt: 'Decorativos',
  // },
  // {
  //   badge: 'DESTAQUE',
  //   category: 'Cosplay / Arte',
  //   name: 'Máscaras 3D',
  //   description: 'Para cosplay...',
  //   price: '120',
  //   imgSrc: '/products/ghostface.png',
  //   imgAlt: 'Máscaras',
  // },
  //  {
  //   badge: 'VOCÊ CRIA',
  //   badgeOutline: true,
  //   category: 'Personalizado',
  //   name: 'Seu Modelo',
  //   description: 'Envie seu arquivo...',
  //   priceLabel: 'Orçamento\nGrátis',
  //   imgSrc: '/products/personalizados.png',
  //  imgAlt: 'Personalizado',
  //   highlighted: true,
  // },
]

export default function Products({ onSelectCategory }) {
  const { ref, visible } = useReveal()

  return (
    <section id="produtos">
      <div ref={ref} className={`${styles.header} ${visible ? styles.on : ''}`}>
        <h2>NOSSOS PRODUTOS</h2>
        <p>Cada peça é impressa sob demanda com filamento premium.</p>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} onSelect={() => onSelectCategory(p.category)} />
        ))}
      </div>
    </section>
  )
}