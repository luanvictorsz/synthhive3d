import { useReveal } from '../hooks/useReveal'
import styles from './ProductCard.module.css'

export default function ProductCard({
  badge,
  badgeOutline,
  category,
  name,
  description,
  price,
  priceLabel,
  imgSrc,
  imgAlt,
  imgPlaceholderLabel,
  highlighted,
}) {
  const { ref, visible } = useReveal()

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.on : ''} ${highlighted ? styles.highlighted : ''}`}
    >
      <div className={styles.imgWrap}>
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} className={styles.img} />
        ) : (
          <div className={styles.placeholder}>
            <span>📷</span>
            <span>{imgPlaceholderLabel}<br /><small>600 × 450 px</small></span>
          </div>
        )}
        {badge && (
          <div className={`${styles.badge} ${badgeOutline ? styles.badgeOutline : ''}`}>
            {badge}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.cat}>{category}</div>
        <div className={styles.name}>{name}</div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.footer}>
          <div className={`${styles.price} ${priceLabel ? styles.priceSmall : ''}`}>
            {priceLabel ? (
              <>{priceLabel}</>
            ) : (
              <><small>a partir de R$</small>{price}</>
            )}
          </div>
          <button className={styles.btn} onClick={scrollToContact}>
            {priceLabel ? 'Enviar' : 'Pedir'}
          </button>
        </div>
      </div>
    </div>
  )
}
