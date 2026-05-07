import { useState } from 'react'
import styles from './CategoryPage.module.css'

const CATALOG = {
  'Acessório': [
    { name: 'Chaveiro Caveira', description: 'Detalhado e robusto, ideal para mochilas.', price: '10', imgSrc: '/products/chaveiros.png' },
    { name: 'Chaveiro Animal', description: 'Gatinhos, cachorros e mais.', price: '10', imgSrc: '/products/chaveiros.png' },
    { name: 'Chaveiro Letra', description: 'Iniciais personalizadas em 3D.', price: '12', imgSrc: '/products/chaveiros.png' },
    { name: 'Chaveiro Game', description: 'Personagens dos seus jogos favoritos.', price: '14', imgSrc: '/products/chaveiros.png' },
    { name: 'Chaveiro Anime', description: 'Figuras de animes populares.', price: '14', imgSrc: '/products/chaveiros.png' },
    { name: 'Chaveiro Duplo', description: 'Par combinando para presentes.', price: '22', imgSrc: '/products/chaveiros.png' },
  ],
  'Colecionável': [
    { name: 'Miniatura Dragão', description: 'Detalhes incríveis em escala 1:32.', price: '15', imgSrc: '/products/miniaturas.png' },
    { name: 'Miniatura Cavaleiro', description: 'Armadura completa pintada à mão.', price: '18', imgSrc: '/products/miniaturas.png' },
    { name: 'Miniatura Robô', description: 'Estilo mecha futurista.', price: '20', imgSrc: '/products/miniaturas.png' },
    { name: 'Miniatura Nave', description: 'Ficção científica com detalhes.', price: '22', imgSrc: '/products/miniaturas.png' },
    { name: 'Miniatura Criatura', description: 'Seres fantásticos únicos.', price: '25', imgSrc: '/products/miniaturas.png' },
    { name: 'Miniatura Herói', description: 'Seu personagem favorito em 3D.', price: '28', imgSrc: '/products/miniaturas.png' },
  ],
  'Personalizado': [
    { name: 'Modelo do Cliente', description: 'Envie seu arquivo STL e imprimimos.', priceLabel: 'Orçamento\nGrátis', imgSrc: '/products/personalizados.png' },
    { name: 'Escultura Personalizada', description: 'Criamos o modelo 3D do zero para você.', priceLabel: 'Orçamento\nGrátis', imgSrc: '/products/personalizados.png' },
    { name: 'Presente Corporativo', description: 'Brindes e troféus com sua marca.', priceLabel: 'Orçamento\nGrátis', imgSrc: '/products/personalizados.png' },
    { name: 'Protótipo', description: 'Impressão rápida para validar seu projeto.', priceLabel: 'Orçamento\nGrátis', imgSrc: '/products/personalizados.png' },
  ],
}

const DEFAULT_ITEMS = (category) => CATALOG[category] || []

export default function CategoryPage({ category, onBack }) {
  const [selected, setSelected] = useState(null)
  const items = DEFAULT_ITEMS(category)

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={onBack}>
          ← Voltar
        </button>
        <div className={styles.breadcrumb}>
          <span onClick={onBack}>Produtos</span>
          <span className={styles.sep}>/</span>
          <span className={styles.active}>{category}</span>
        </div>
      </div>

      <div className={styles.header}>
        <p className={styles.catLabel}>{category}</p>
        <h1 className={styles.title}>
          {category === 'Acessório' && 'CHAVEIROS 3D'}
          {category === 'Colecionável' && 'MINIATURAS'}
          {category === 'Personalizado' && 'SEU MODELO'}
        </h1>
        <p className={styles.subtitle}>
          {items.length} {items.length === 1 ? 'modelo disponível' : 'modelos disponíveis'} — todos impressos sob demanda
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} ${selected === i ? styles.selectedCard : ''}`}
            onClick={() => setSelected(i === selected ? null : i)}
          >
            <div className={styles.imgWrap}>
              <img src={item.imgSrc} alt={item.name} className={styles.img} />
              <div className={styles.overlay}>
                <span>Ver Detalhes</span>
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.description}</p>
              <div className={styles.footer}>
                <div className={styles.price}>
                  {item.priceLabel ? (
                    item.priceLabel.split('\n').map((l, j) => (
                      <span key={j} style={{ display: 'block', fontSize: j === 0 ? '16px' : '13px', lineHeight: 1.2 }}>{l}</span>
                    ))
                  ) : (
                    <>
                      <small>R$</small>{item.price}
                    </>
                  )}
                </div>
                <button
                  className={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(`https://wa.me/5511963173371?text=Olá! Tenho interesse em: ${item.name}`, '_blank')
                  }}
                >
                  Pedir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className={styles.detailPanel}>
          <div className={styles.detailContent}>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            <img src={items[selected].imgSrc} alt={items[selected].name} className={styles.detailImg} />
            <div className={styles.detailInfo}>
              <p className={styles.catLabel}>{category}</p>
              <h2 className={styles.detailName}>{items[selected].name}</h2>
              <p className={styles.detailDesc}>{items[selected].description}</p>
              <div className={styles.detailPrice}>
                {items[selected].priceLabel ? (
                  <span>Orçamento Grátis</span>
                ) : (
                  <>a partir de <strong>R$ {items[selected].price}</strong></>
                )}
              </div>
              <button
                className={styles.detailBtn}
                onClick={() => window.open(`https://wa.me/5511963173371?text=Olá! Tenho interesse em: ${items[selected].name}`, '_blank')}
              >
                Solicitar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
