# Hero Component

Um componente de hero moderno e interativo com animações suaves, efeitos magnetic e spotlight hover.

## Features

- ✨ Animações de texto staggered com blur
- 🎯 Efeito magnetic nos botões de ação
- 💡 Spotlight hover effect nos elementos
- 🎨 Suporte completo a dark mode
- 📱 Totalmente responsivo
- ⚡ Otimizado com Framer Motion
- 🎭 Múltiplas variações (com badge, subtitle, etc)

## Usage

```tsx
import { Hero } from '@/components/ui/hero'

export default function MyPage() {
  return (
    <Hero
      badge="New Product Launch"
      subtitle="Welcome to the future"
      title="Build amazing products"
      description="Create beautiful, performant web experiences with modern tools and technologies."
      primaryAction={{
        label: "Get Started",
        href: "/get-started"
      }}
      secondaryAction={{
        label: "Learn More",
        href: "/docs"
      }}
    />
  )
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | Main heading text |
| `description` | `string` | ✅ | Hero description text |
| `subtitle` | `string` | ❌ | Optional subtitle above the title |
| `badge` | `string` | ❌ | Optional badge text with sparkles icon |
| `primaryAction` | `{ label: string, href: string, onClick?: () => void }` | ❌ | Primary call-to-action button |
| `secondaryAction` | `{ label: string, href: string, onClick?: () => void }` | ❌ | Secondary call-to-action button |
| `className` | `string` | ❌ | Additional CSS classes |

## Examples

### Minimal Hero

```tsx
<Hero
  title="Design meets development"
  description="Bridging the gap between beautiful design and performant code."
  primaryAction={{
    label: "View Projects",
    href: "/projects"
  }}
/>
```

### Full Hero with Badge

```tsx
<Hero
  badge="Now Available"
  subtitle="From idea to production"
  title="Ship products faster"
  description="Modern development workflow with the tools you love."
  primaryAction={{
    label: "Start Building",
    href: "/start"
  }}
  secondaryAction={{
    label: "Documentation",
    href: "/docs"
  }}
/>
```

### With Custom Actions

```tsx
<Hero
  title="Join our community"
  description="Connect with developers around the world."
  primaryAction={{
    label: "Sign Up",
    href: "#",
    onClick: () => console.log("Sign up clicked")
  }}
/>
```

## Demo

Acesse `/hero-demo` para ver todos os exemplos em ação.

## Dependencies

Este componente usa:
- `motion/react` - Animações
- `@/components/ui/text-effect` - Animações de texto
- `@/components/ui/magnetic` - Efeito magnético
- `@/components/ui/spotlight` - Efeito spotlight
- `lucide-react` - Ícones

## Design Tokens

O componente respeita o design system do portfólio:
- Cores: zinc palette com dark mode
- Tipografia: Sistema de fontes do Tailwind
- Espaçamento: Escala padrão do Tailwind
- Animações: Easing personalizado `[0.22, 1, 0.36, 1]`
- Cor de seleção: `#D2F525` (definida em globals.css)
