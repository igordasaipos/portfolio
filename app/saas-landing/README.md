# SaaS Landing Page

Uma landing page completa e profissional para empresas SaaS, otimizada para campanhas de marketing.

## 🎯 Features

- ✨ **Hero Section** - Chamada principal com CTAs e badge
- 📊 **Stats Section** - Métricas animadas com números crescentes
- 🎨 **Features Grid** - Grade de features com ícones e spotlight hover
- 💰 **Pricing Section** - Planos com destaque para o mais popular
- 💬 **Testimonials** - Depoimentos de clientes com rating
- ❓ **FAQ** - Perguntas frequentes com accordion
- 🎯 **CTA Section** - Call-to-action final com spotlight
- 🔗 **Footer** - Footer completo com links e redes sociais

## 🚀 Demo

Acesse: **http://localhost:3000/saas-landing**

## 📦 Componentes Criados

### Landing Components

1. **[Features](../../components/landing/features.tsx)** - Grade de features com ícones
2. **[Pricing](../../components/landing/pricing.tsx)** - Tabela de preços
3. **[Testimonials](../../components/landing/testimonials.tsx)** - Depoimentos de clientes
4. **[Stats](../../components/landing/stats.tsx)** - Estatísticas animadas
5. **[FAQ](../../components/landing/faq.tsx)** - Accordion de perguntas
6. **[CTA](../../components/landing/cta.tsx)** - Call-to-action destacado
7. **[Footer](../../components/landing/footer.tsx)** - Footer com links

### UI Components Reutilizados

- **Hero** - Componente hero principal
- **Spotlight** - Efeito de hover
- **Magnetic** - Efeito magnético em botões
- **TextEffect** - Animações de texto

## 🎨 Personalização

### Modificar o Hero

\`\`\`tsx
<Hero
  badge="Seu Badge Aqui"
  subtitle="Seu subtítulo"
  title="Seu título principal"
  description="Sua descrição"
  primaryAction={{
    label: 'Seu CTA',
    href: '#sua-secao',
  }}
/>
\`\`\`

### Adicionar Features

\`\`\`tsx
import { Zap } from 'lucide-react'

<Features
  title="Título da seção"
  features={[
    {
      icon: Zap,
      title: 'Título do Feature',
      description: 'Descrição do feature',
    },
    // ... mais features
  ]}
/>
\`\`\`

### Configurar Pricing

\`\`\`tsx
<Pricing
  plans={[
    {
      name: 'Nome do Plano',
      price: '$29',
      period: '/mês',
      description: 'Descrição do plano',
      features: [
        'Feature 1',
        'Feature 2',
      ],
      cta: {
        label: 'Começar',
        href: '#signup',
      },
      popular: true, // Destaca o plano
    },
  ]}
/>
\`\`\`

### Adicionar Testimonials

\`\`\`tsx
<Testimonials
  testimonials={[
    {
      name: 'Nome do Cliente',
      role: 'Cargo',
      company: 'Empresa',
      content: 'Depoimento aqui...',
      rating: 5,
    },
  ]}
/>
\`\`\`

### Modificar Stats

\`\`\`tsx
<Stats
  stats={[
    { value: '10000', label: 'Usuários', suffix: '+' },
    { value: '99', label: 'Uptime', suffix: '%' },
  ]}
/>
\`\`\`

### Configurar FAQ

\`\`\`tsx
<FAQ
  items={[
    {
      question: 'Sua pergunta?',
      answer: 'Sua resposta aqui...',
    },
  ]}
/>
\`\`\`

### Personalizar Footer

\`\`\`tsx
<Footer
  logo="Seu Logo"
  description="Descrição da empresa"
  sections={[
    {
      title: 'Produto',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
  ]}
  socialLinks={[
    { label: 'Twitter', href: 'https://twitter.com/suaempresa' },
  ]}
/>
\`\`\`

## 🎯 SEO & Marketing

### Meta Tags Recomendadas

Adicione no `layout.tsx` ou `page.tsx`:

\`\`\`tsx
export const metadata = {
  title: 'Seu Produto - Transforme sua produtividade',
  description: 'Descrição otimizada para SEO com keywords...',
  openGraph: {
    title: 'Seu Produto - Transforme sua produtividade',
    description: 'Descrição para redes sociais...',
    images: ['/og-image.png'],
  },
}
\`\`\`

### Conversão

Todos os CTAs incluem:
- Links âncora para navegação suave
- Botões com efeito magnetic para melhor UX
- Spotlight hover para destacar elementos
- Animações suaves que guiam o olhar

### A/B Testing

Seções modulares permitem fácil A/B testing:
- Trocar ordem das seções
- Testar diferentes CTAs
- Variar copy do hero
- Modificar planos de pricing

## 🎨 Design System

- **Cores**: Zinc palette com suporte a dark mode
- **Tipografia**: Inter (via Tailwind)
- **Espaçamento**: Sistema 8px
- **Animações**: Framer Motion com easing personalizado
- **Responsivo**: Mobile-first design

## 📱 Responsividade

Testado em:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Wide (1440px+)

## 🚀 Performance

- Animações otimizadas com Framer Motion
- Lazy loading de componentes
- Viewport-based animations (só anima quando visível)
- Imagens otimizadas (quando usadas)

## 📊 Métricas Sugeridas

Configure tracking para:
- Scroll depth
- Cliques nos CTAs
- Tempo na página
- Conversão por seção
- Taxa de bounce

## 🔧 Próximos Passos

1. **Integração com Backend**
   - Conectar forms com API
   - Adicionar autenticação
   - Implementar payment gateway

2. **Analytics**
   - Google Analytics
   - Hotjar/Mixpanel
   - Custom events

3. **Otimizações**
   - Adicionar imagens reais
   - Implementar lazy loading de vídeos
   - Otimizar Core Web Vitals

4. **Marketing**
   - Pixel do Facebook
   - Google Ads tracking
   - Email capture forms
