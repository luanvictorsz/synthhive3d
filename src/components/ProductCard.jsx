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
  highlighted,
  onSelect,
}) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.on : ''} ${highlighted ? styles.highlighted : ''}`}
      onClick={onSelect}
      style={{ cursor: onSelect ? 'pointer' : 'default' }}
    >
      <div className={styles.imgWrap}>
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} className={styles.img} />
        ) : (
          <div className={styles.placeholder}>
            <span>◈</span>
            <span>IMAGEM EM BREVE</span>
          </div>
        )}
        {badge && (
          <span className={`${styles.badge} ${badgeOutline ? styles.badgeOutline : ''}`}>
            {badge}
          </span>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.cat}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.footer}>
          <div className={`${styles.price} ${priceLabel ? styles.priceSmall : ''}`}>
            {priceLabel ? (
              priceLabel.split('\\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)
            ) : (
              <>
                <small>a partir de R$</small>{price}
              </>
            )}
          </div>
          <button
            className={styles.btn}
            onClick={(e) => { e.stopPropagation(); onSelect?.() }}
          >
            Ver Mais
          </button>
        </div>
      </div>
    </div>
  )
}
