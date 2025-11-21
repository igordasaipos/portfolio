# 📚 Exemplos de Uso - Landing Page Components

## 🎯 Exemplo 1: Landing Page Minimalista

```tsx
import { Hero } from '@/components/ui/hero'
import { Features, CTA, Footer } from '@/components/landing'
import { Zap, Shield, Users } from 'lucide-react'

export default function MinimalLanding() {
  return (
    <>
      <Hero
        title="Simplifique seu trabalho"
        description="A ferramenta que você precisa para ser mais produtivo"
        primaryAction={{ label: "Começar Grátis", href: "#signup" }}
      />

      <Features
        features={[
          { icon: Zap, title: "Rápido", description: "Performance otimizada" },
          { icon: Shield, title: "Seguro", description: "Dados protegidos" },
          { icon: Users, title: "Colaborativo", description: "Trabalhe em equipe" }
        ]}
      />

      <CTA
        title="Pronto para começar?"
        description="Teste grátis por 14 dias"
        primaryAction={{ label: "Criar Conta", href: "#signup" }}
      />

      <Footer
        logo="MeuSaaS"
        sections={[
          {
            title: "Produto",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" }
            ]
          }
        ]}
      />
    </>
  )
}
```

## 💰 Exemplo 2: Foco em Pricing

```tsx
import { Hero } from '@/components/ui/hero'
import { Pricing, Testimonials, FAQ, Footer } from '@/components/landing'

export default function PricingFocusedLanding() {
  return (
    <>
      <Hero
        badge="Oferta Limitada"
        title="Planos que cabem no seu bolso"
        description="Escolha o plano ideal e comece hoje mesmo"
        primaryAction={{ label: "Ver Planos", href: "#pricing" }}
      />

      <Pricing
        plans={[
          {
            name: "Básico",
            price: "Grátis",
            description: "Para experimentar",
            features: ["5 projetos", "1 GB storage"],
            cta: { label: "Começar", href: "#" }
          },
          {
            name: "Pro",
            price: "$29",
            period: "/mês",
            description: "Para profissionais",
            features: ["Projetos ilimitados", "100 GB storage", "Suporte prioritário"],
            cta: { label: "Assinar", href: "#" },
            popular: true
          }
        ]}
      />

      <Testimonials
        testimonials={[
          {
            name: "Maria Silva",
            role: "Founder",
            company: "StartupXYZ",
            content: "O melhor investimento que fizemos este ano!",
            rating: 5
          }
        ]}
      />

      <FAQ
        items={[
          {
            question: "Posso cancelar a qualquer momento?",
            answer: "Sim, sem taxas ou multas. Cancele quando quiser."
          },
          {
            question: "Aceitam qual forma de pagamento?",
            answer: "Cartão de crédito, PayPal e transferência bancária."
          }
        ]}
      />

      <Footer logo="MeuSaaS" sections={[]} />
    </>
  )
}
```

## 🚀 Exemplo 3: Landing Page Completa (Produção)

```tsx
import { Hero } from '@/components/ui/hero'
import {
  Features,
  Stats,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Footer
} from '@/components/landing'
import { Zap, Shield, Users, BarChart, Lock, Rocket } from 'lucide-react'

export default function FullLanding() {
  return (
    <>
      {/* Hero com todos os elementos */}
      <Hero
        badge="Produto do Ano 2024"
        subtitle="A ferramenta número 1"
        title="Transforme sua produtividade"
        description="Automatize tarefas, colabore em tempo real e escale seu negócio com nossa plataforma completa."
        primaryAction={{ label: "Teste Grátis", href: "#trial" }}
        secondaryAction={{ label: "Ver Demo", href: "#demo" }}
      />

      {/* Métricas de impacto */}
      <Stats
        stats={[
          { value: "50000", label: "Usuários Ativos", suffix: "+" },
          { value: "99", label: "Uptime Garantido", suffix: ".9%" },
          { value: "150", label: "Países", suffix: "+" },
          { value: "4", label: "Avaliação Média", suffix: ".8" }
        ]}
      />

      {/* Features principais */}
      <Features
        title="Tudo que você precisa em um só lugar"
        subtitle="Recursos poderosos"
        features={[
          {
            icon: Zap,
            title: "Performance Extrema",
            description: "Infraestrutura global com CDN para velocidade máxima"
          },
          {
            icon: Shield,
            title: "Segurança Enterprise",
            description: "Criptografia de ponta a ponta e conformidade SOC 2"
          },
          {
            icon: Users,
            title: "Colaboração Real-time",
            description: "Trabalhe junto com seu time sem conflitos"
          },
          {
            icon: BarChart,
            title: "Analytics Avançado",
            description: "Dashboards customizáveis com insights acionáveis"
          },
          {
            icon: Lock,
            title: "Privacidade Total",
            description: "Seus dados são seus. Nunca vendemos informações"
          },
          {
            icon: Rocket,
            title: "Deploy em 1 Clique",
            description: "Configure tudo em minutos, não em dias"
          }
        ]}
      />

      {/* Planos e preços */}
      <Pricing
        title="Invista no seu crescimento"
        subtitle="Planos flexíveis para times de todos os tamanhos"
        plans={[
          {
            name: "Starter",
            price: "$19",
            period: "/mês",
            description: "Ideal para freelancers",
            features: [
              "5 membros do time",
              "50 GB storage",
              "Analytics básico",
              "Suporte email"
            ],
            cta: { label: "Começar Teste", href: "#trial" }
          },
          {
            name: "Business",
            price: "$49",
            period: "/mês",
            description: "Para equipes em crescimento",
            features: [
              "25 membros do time",
              "500 GB storage",
              "Analytics avançado",
              "Suporte prioritário",
              "API completa",
              "Integrações custom"
            ],
            cta: { label: "Começar Teste", href: "#trial" },
            popular: true
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "Para grandes organizações",
            features: [
              "Membros ilimitados",
              "Storage ilimitado",
              "Analytics dedicado",
              "Suporte 24/7",
              "SLA garantido",
              "Onboarding dedicado",
              "Custom contracts"
            ],
            cta: { label: "Falar com Vendas", href: "#sales" }
          }
        ]}
      />

      {/* Prova social */}
      <Testimonials
        title="Empresas que confiam em nós"
        subtitle="Veja o que nossos clientes dizem"
        testimonials={[
          {
            name: "João Santos",
            role: "CEO",
            company: "TechCorp",
            content: "Em 3 meses aumentamos nossa produtividade em 40%. A plataforma paga por si mesma.",
            rating: 5
          },
          {
            name: "Ana Costa",
            role: "Product Lead",
            company: "InnovateHub",
            content: "Testamos várias soluções e esta foi a única que atendeu todas nossas necessidades.",
            rating: 5
          },
          {
            name: "Carlos Mendes",
            role: "CTO",
            company: "DataFlow",
            content: "A API é fantástica e a documentação é perfeita. Nossa integração levou apenas 2 dias.",
            rating: 5
          }
        ]}
      />

      {/* FAQ - Remove objeções */}
      <FAQ
        title="Perguntas Frequentes"
        subtitle="Tudo que você precisa saber"
        items={[
          {
            question: "Como funciona o período de teste?",
            answer: "14 dias grátis com acesso completo ao plano Business. Sem cartão de crédito necessário."
          },
          {
            question: "Posso mudar de plano depois?",
            answer: "Sim! Faça upgrade ou downgrade a qualquer momento. Ajustamos a cobrança proporcionalmente."
          },
          {
            question: "Os dados ficam seguros?",
            answer: "Absolutamente. Usamos criptografia AES-256, compliance SOC 2 e backups diários automáticos."
          },
          {
            question: "Tem suporte em português?",
            answer: "Sim! Nossa equipe de suporte fala português e está disponível de segunda a sexta."
          },
          {
            question: "Consigo importar dados de outras ferramentas?",
            answer: "Sim, oferecemos importação automática das principais ferramentas do mercado."
          }
        ]}
      />

      {/* CTA Final */}
      <CTA
        title="Comece sua transformação digital hoje"
        description="Junte-se a 50.000+ empresas que já transformaram seu trabalho"
        primaryAction={{ label: "Iniciar Teste Grátis", href: "#trial" }}
        secondaryAction={{ label: "Agendar Demo", href: "#demo" }}
      />

      {/* Footer completo */}
      <Footer
        logo="SuaSaaS"
        description="Construindo o futuro do trabalho colaborativo"
        sections={[
          {
            title: "Produto",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Segurança", href: "#security" },
              { label: "Roadmap", href: "#roadmap" }
            ]
          },
          {
            title: "Empresa",
            links: [
              { label: "Sobre", href: "#about" },
              { label: "Blog", href: "#blog" },
              { label: "Carreiras", href: "#careers" },
              { label: "Contato", href: "#contact" }
            ]
          },
          {
            title: "Recursos",
            links: [
              { label: "Documentação", href: "#docs" },
              { label: "API", href: "#api" },
              { label: "Centro de Ajuda", href: "#help" },
              { label: "Status", href: "#status" }
            ]
          }
        ]}
        socialLinks={[
          { label: "Twitter", href: "https://twitter.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "GitHub", href: "https://github.com" }
        ]}
      />
    </>
  )
}
```

## 🎨 Exemplo 4: Customização Avançada

```tsx
// Custom colors e animações
import { Hero } from '@/components/ui/hero'

export default function CustomizedLanding() {
  return (
    <Hero
      title="Seu título"
      description="Sua descrição"
      primaryAction={{ label: "CTA", href: "#" }}
      // Adicione classes customizadas
      className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950"
    />
  )
}
```

## 📊 Exemplo 5: Com Analytics

```tsx
import { Hero } from '@/components/ui/hero'
import { useEffect } from 'react'

export default function LandingWithAnalytics() {
  const handleCTAClick = () => {
    // Track no Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_cta', {
        event_category: 'engagement',
        event_label: 'hero_primary_cta'
      })
    }
  }

  return (
    <Hero
      title="Rastreie suas conversões"
      description="Landing page com analytics integrado"
      primaryAction={{
        label: "Começar",
        href: "#signup",
        onClick: handleCTAClick
      }}
    />
  )
}
```

## 🔗 Exemplo 6: Integração com Forms

```tsx
'use client'

import { Hero, CTA } from '@/components/ui/hero'
import { useState } from 'react'

export default function LandingWithForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Enviar para sua API
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
  }

  return (
    <>
      <Hero
        title="Cadastre-se na nossa newsletter"
        description="Receba atualizações semanais"
        primaryAction={{
          label: "Inscrever-se",
          href: "#newsletter"
        }}
      />

      <section id="newsletter" className="py-20 px-4">
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full rounded-full px-6 py-3"
          />
          <button type="submit">Inscrever</button>
        </form>
      </section>
    </>
  )
}
```

## 💡 Dicas Finais

1. **Sempre teste mobile first**
2. **Use imagens reais quando possível**
3. **Mantenha CTAs consistentes**
4. **Adicione social proof (logos, números)**
5. **Teste diferentes headlines**
6. **Otimize para Core Web Vitals**
7. **Implemente lazy loading**
8. **Configure analytics desde o início**
