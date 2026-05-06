# Synth Hive 3D — React + Vite

## Instalação

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Nav.jsx / Nav.module.css        → Barra de navegação fixa
    Hero.jsx / Hero.module.css      → Seção principal
    Ticker.jsx / Ticker.module.css  → Faixa animada de palavras-chave
    Products.jsx / Products.module.css   → Grid de produtos (dados em array)
    ProductCard.jsx / ProductCard.module.css → Card individual de produto
    Processo.jsx / Processo.module.css  → Seção "Do Pedido à Entrega"
    Contato.jsx / Contato.module.css    → Seção de CTA e contato
    Footer.jsx / Footer.module.css      → Rodapé
  hooks/
    useReveal.js   → Hook de IntersectionObserver para animação de entrada
  App.jsx          → Composição de todos os componentes
  main.jsx         → Entry point React
  index.css        → CSS global (variáveis, reset)
```

## Como adicionar fotos aos produtos

Coloque suas imagens em `public/imagens/` e edite o array `PRODUCTS` em
`src/components/Products.jsx`, adicionando a prop `imgSrc`:

```jsx
{
  name: 'Chaveiros 3D',
  imgSrc: '/imagens/chaveiros.jpg',
  imgAlt: 'Chaveiros 3D personalizados',
  // ...
}
```

## Como atualizar links de contato

Edite o array `LINKS` em `src/components/Contato.jsx`:

```jsx
{ icon: '💬', label: 'WhatsApp', href: 'https://wa.me/55SEUNUMERO' },
{ icon: '📸', label: 'Instagram', href: 'https://instagram.com/SEUHANDLE' },
{ icon: '✉️', label: 'E-mail',    href: 'mailto:SEU@EMAIL.com' },
```

a ideia vai ser baseada em itens geek ou goticos
